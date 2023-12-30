import Sidebar from "@/components/main/sidebar/sidebar";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

export default async function HomePage() {
    let session = await getServerSession(authOptions);
    if (!session) {
        redirect('/auth');
    }

    const user = await session.user;

    return (
        <main
            className="flex h-full w-3/4 mx-auto">
            <Sidebar user={user}/>
        </main>
    );
}
