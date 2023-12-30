import Sidebar from "@/components/main/sidebar/sidebar";
import {redirect} from "next/navigation";

export default async function HomePage() {
    let user;
    if (!user) {
        redirect("/auth");
    }

    return (
        <main
            className="flex h-full w-3/4 mx-auto">
            <Sidebar />
        </main>
    );
}
