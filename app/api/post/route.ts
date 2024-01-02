import {NextResponse} from "next/server";
import prisma from "@/lib/db";
import {getServerAuthSession} from "@/lib/auth";
import {Prisma} from "@prisma/client";

export async function POST(req: Request, res: NextResponse) {
    let errors = [];

    const {
        content
    } = await req.json();

    const session = await getServerAuthSession();

    if (!session || !session.user) {
        errors.push("You must be logged in to create a post");
        return NextResponse.json({message: errors}, {status: 400});
    }

    let userId = session.user.id;

    if (!content) {
        errors.push("Content is required");
        return NextResponse.json({message: errors}, {status: 400});
    }

    console.log("Submitting post: ", content)

    try {
        const post = await prisma.post.create({
            data: {
                userId: userId,
                content: content,
            }
        }).catch(console.error);

        if (post) {
            console.log(`POST CREATED : id: ${post.id}`);
        }

        return NextResponse.json({post}, {status: 200});
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            return NextResponse.json({message: e.message}, {status: 400});
        }
    }
}

export async function GET(req: Request, res: NextResponse) {
    const posts = await prisma.post.findMany({
        include: {
            user: true
        }
    }).catch(console.error);

    return NextResponse.json({posts}, {status: 200});
}