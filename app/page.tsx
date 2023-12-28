import Sidebar from "@/components/main/sidebar/sidebar";

export default async function HomePage() {
    return (
        <main
            className="flex h-full w-3/4 mx-auto">
            <Sidebar />
        </main>
    );
}
