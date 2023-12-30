'use client'

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
import {signOut} from "next-auth/react";

class SidebarProfil extends Component {
    render() {
        return (
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}
                                className={"h-fit w-full flex items-center justify-start bg-white dark:bg-black text-black dark:text-white gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-3 py-3"}>
                            <div
                                className={"h-[40px] w-[40px] rounded-full bg-black text-white border border-gray-500 flex items-center justify-center text-sm"}>
                                NL
                            </div>
                            <div className={"flex flex-col justify-center items-start"}>
                                <p>Nassim LOUNADI</p>
                                <p className={"text-slate-500"}>@nassimlounadi</p>
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[300px] rounded-lg bg-white dark:bg-black dark:border dark:border-slate-600">
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
                        <DropdownMenuSeparator className={"dark:bg-slate-600"} />
                        <DropdownMenuItem className={"gap-x-2 px-3 py-2"}
                                          onClick={async () => {
                                              await signOut();
                                          }}
                        >
                            <LogOut/>
                            <span className="text-sm">Se déconnecter</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        );
    }
}

export default SidebarProfil;