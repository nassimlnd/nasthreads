import Sidebar from "@/components/main/sidebar/sidebar";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import Post from "@/components/main/post/post";
import CreatePost from "@/components/main/post/create-post";

export default async function HomePage() {
    let session = await getServerSession(authOptions);
    if (!session) {
        redirect('/auth');
    }

    const user = await session.user;

    return (
        <main
            className="flex h-full lg:w-3/4 mx-auto">
            <Sidebar user={user}/>
            <div className={"h-full w-full lg:w-fit border-r border-gray-100 dark:border-gray-900 max-[500px]:pt-28"}>
                <CreatePost />
                <Post />
            </div>
        </main>
    );
}
