import Sidebar from "@/components/main/sidebar/sidebar";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

export default async function HomePage() {
    let user = await getServerSession(authOptions);
    if (!user) {
        redirect('/auth');
    }

    return (
        <main
            className="flex h-full w-3/4 mx-auto">
            <Sidebar/>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </main>
    );
}
