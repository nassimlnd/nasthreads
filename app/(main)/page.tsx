import Sidebar from "@/components/main/sidebar/sidebar";
import {redirect, usePathname} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions, getServerAuthSession} from "@/lib/auth";
import {CreatePost, CreatePostModal} from "@/components/main/post/create-post";
import PostFeed from "@/components/main/post/post-feed";

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
            <div
                className={"h-fit w-full ml-16 max-[499px]:ml-0 lg:ml-[300px] lg:w-1/2 border-r border-gray-100 dark:border-gray-900 max-[499px]:pt-24 max-[500px]:pb-[96px]"}>
                <div
                    className={"flex space-x-2.5 items-center justify-center border-b border-gray-100 dark:border-gray-900"}>
                    <div
                        className={"h-full text-xs lg:text-base w-full py-4 px-5 border-b-4 border-indigo-600 cursor-pointer hover:dark:bg-slate-800 transition text-center"}>
                        Fil d'actualité
                    </div>
                    <div className={"h-full text-xs lg:text-base w-full py-4 px-5 transition cursor-not-allowed text-center"}>
                        Abonnements
                    </div>
                    <div className={"h-full text-xs lg:text-base w-full py-4 px-5 cursor-not-allowed text-center"}>
                        Fil d'actualité
                    </div>
                </div>
                <CreatePost user={user}/>
                <CreatePostModal/>
                <PostFeed />
            </div>
        </main>
    );
}

