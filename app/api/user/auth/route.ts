import prisma from "@/lib/db";
import { hashPassword } from "@/lib/utils/hash-password"
import {NextResponse} from "next/server";

export async function POST(req: Request, res: NextResponse) {
    const {email, password} = await req.json();

    if (!email || !password) {
        return NextResponse.json({message: "Please provide an email and password"}, {status: 400});
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                image: true
            }
        });

        if (user && user.password === hashPassword(password)) {
            return NextResponse.json(exclude(user, ["password"]), {status: 200});
        } else {
            return NextResponse.json({message: "Invalid credentials"}, {status: 401});
        }
    } catch (e : any) {
        throw new Error(e);
    }
}

function exclude(user : any, keys : any) {
    for (let key of keys) {
        delete user[key];
    }
    return user;
}