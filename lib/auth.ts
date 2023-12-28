import {NextAuthOptions} from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import bcrypt from 'bcrypt';
import axios, {AxiosResponse} from 'axios';
import prisma from "@/lib/db";

export const authOptions: NextAuthOptions = {
    // Secret for Next-auth, without this JWT encryption/decryption won't work
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),

    // Configure one or more authentication providers
    providers: [
        /*GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        GoogleProvider({
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
                const userCredentials = {
                    email: credentials.email,
                    password: credentials.password,
                };

                if (!userCredentials.email || !userCredentials.password) {
                    throw new Error('Missing email or password');
                }

                const res = await axios.post('http://localhost:3000/api/user/auth', JSON.stringify(userCredentials));

                const user = await res.data;

                if (user) {
                    return user;
                } else {
                    throw new Error();
                }
            }
        }),
    ],
    debug: process.env.NODE_ENV === "development",
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },

};