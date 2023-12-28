import { SHA256 as sha256 } from "crypto-js";
import prisma from "@/lib/db";
import {Prisma} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import {NextRequest, NextResponse} from "next/server";
import {hashPassword} from "@/lib/utils/hash-password";

export async function POST(req: Request, res: NextResponse) {
    let errors = [];
    const {
        name,
        username,
        email,
        password
    } = await req.json();

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long");
        return NextResponse.json({message: errors}, {status: 400});
    }

    try {
        const user = await prisma.user.create({
            data: {
                name: name,
                username: username,
                email: email,
                password: hashPassword(password)
            }
        }).catch(console.error);

        if (user) {
            console.log(`USER CREATED : id: ${user.id}`);
        }

        return NextResponse.json({user}, {status: 201});
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === "P2002") {
                return NextResponse.json({message: e.message}, {status: 400});
            }
            return NextResponse.json({message: e.message}, {status: 400});
        }
    }
}