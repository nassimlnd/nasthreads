import Logo from "@/components/logo-with-text";
import SidebarItem from "@/components/main/sidebar/sidebar-item";
import SidebarProfil from "@/components/main/sidebar/sidebar-profil";
import {Bell, Home, List, MessageCircle, TrendingUp, User} from "lucide-react";
import {ModeToggle} from "@/components/mode-toggle";
import LogoWithText from "@/components/logo-with-text";

const Sidebar = () => {

    return (
        <div className="flex flex-col justify-between px-2.5 py-6 w-[300px] border-gray-100 dark:border-gray-900 border-r">
            <div>
                <LogoWithText className={"gap-3 px-4"} />
                <div className="pt-6 space-y-1">
                    <SidebarItem value={"Accueil"} icon={<Home className={"h-6 w-6"} />} link={"/"} selected={false}/>
                    <SidebarItem value={"Tendances"} icon={<TrendingUp className={"h-6 w-6"} />} link={"/"} selected={false}/>
                    <SidebarItem value={"Notifications"} icon={<Bell className={"h-6 w-6"} />} link={"/"} selected={false}/>
                    <SidebarItem value={"Messages"} icon={<MessageCircle className={"h-6 w-6"} />} link={"/"} selected={false}/>
                    <SidebarItem value={"Listes"} icon={<List className={"h-6 w-6"} />} link={"/"} selected={false}/>
                </div>
            </div>
            <div className={"space-y-3"}>
                <div className={"px-2.5"}>
                    <ModeToggle />
                </div>
                <SidebarProfil />
            </div>
        </div>
    )
}

export default Sidebar