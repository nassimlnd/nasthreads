import React, {Component} from 'react';
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuSub
} from "@/components/ui/dropdown-menu";

import {
    User, Settings, LogOut, Cloud, LifeBuoy, Github
} from "lucide-react";
import Image from "next/image";
import LogoutButton from "@/components/auth/logout-button";

interface Props {
    children?: React.ReactNode,
    user: any
}

const SidebarProfil = async ({children, user}: Props) => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"}
                            className={"h-fit w-full flex items-center justify-start bg-white dark:bg-black text-black dark:text-white gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-3 py-3"}>
                        {!user.image && <div
                            className={"h-[40px] w-[40px] rounded-full bg-black text-white border border-gray-500 flex items-center justify-center text-sm"}>
                            {user.name.split(" ").map((name: string) => name[0].toUpperCase())}
                        </div>}
                        {user.image && <Image src={user.image} alt={"Profile picture"} width={40} height={40}/>}
                        <div className={"hidden lg:flex flex-col justify-center items-start"}>
                            <p>{user.name || "NO NAME"}</p>
                            <p className={"text-slate-500"}>@nassimlounadi</p>
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-[300px] rounded-lg bg-white dark:bg-black dark:border dark:border-slate-600">
                    <DropdownMenuGroup>
                        <DropdownMenuItem className={"gap-x-2 px-3 py-2"}>
                            <User/>
                            <span className="text-sm">Profil</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className={"gap-x-2 px-3 py-2"}>
                            <Settings/>
                            <span className="text-sm">Options</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator className={"dark:bg-slate-600"}/>
                    <DropdownMenuItem className={"gap-x-2 px-3 py-2"}>
                        <Github/>
                        <span className="text-sm">GitHub</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={"gap-x-2 px-3 py-2"} disabled>
                        <LifeBuoy/>
                        <span className="text-sm">Aide</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={"gap-x-2 px-3 py-2"} disabled>
                        <Cloud/>
                        <span className="text-sm">API</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className={"dark:bg-slate-600"}/>
                    <LogoutButton/>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default SidebarProfil;