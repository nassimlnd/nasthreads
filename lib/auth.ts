import {getServerSession, NextAuthOptions} from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import bcrypt from 'bcrypt';
import axios, {AxiosResponse} from 'axios';
import prisma from "@/lib/db";
import {hashPassword} from "@/lib/utils/hash-password";

export const authOptions: NextAuthOptions = {
    // Secret for Next-auth, without this JWT encryption/decryption won't work
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),

    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            id: 'github',
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        /*GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),*/
        CredentialsProvider({
            id: 'credentials',
            name: 'credentials',
            credentials: {
                email: {label: "email", type: "email"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials: any, req: any) {
                console.log(credentials);

                // Check if the email and password are valid
                if (!credentials.email || !credentials.password) {
                    return null;
                }
                console.log("CREDENTIALS CHECKED")

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user) {
                    return null;
                }
                console.log("USER CHECKED")

                const valid = bcrypt.compareSync(credentials.password, user.password as string);

                console.log(valid);

                if (!valid) {
                    return null;
                }

                console.log("User: ", user);
                console.log("Valid: ", valid);

                return user;
            }
        }),
    ],
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
        session: async ({session, token}) => {
            if (session?.user) {
                // @ts-ignore
                session.user.id = token.uid;
            }
            return session;
        },
        jwt: async ({user, token}) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        }
    }
};

export const getServerAuthSession = () => getServerSession(authOptions);