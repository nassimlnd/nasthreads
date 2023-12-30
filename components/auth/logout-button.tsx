'use client'

import React, {Component} from 'react';
import {LogOut} from "lucide-react";
import {signOut} from "next-auth/react";
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";

class LogoutButton extends Component {
    render() {
        return (
            <DropdownMenuItem className={"gap-x-2 px-3 py-2"} onClick={async () => {
                await signOut();
            }}>
                <LogOut/>
                <span className="text-sm">Se déconnecter</span>
            </DropdownMenuItem>
        );
    }
}

export default LogoutButton;