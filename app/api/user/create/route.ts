import prisma from "@/lib/db";
import {Prisma} from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";
import {hashPassword} from "@/lib/utils/hash-password";
import bcrypt from "bcrypt";

export async function POST(req: Request, res: NextResponse) {
    let errors = [];
    const {
        name,
        email,
        password,
        birthDate,
    } = await req.json();

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long");
        return NextResponse.json({message: errors}, {status: 400});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                birthDate: new Date(birthDate),
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