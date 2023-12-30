'use client'

import React from 'react';
import {cn} from "@/lib/utils";
import {Heart, MessageCircle} from "lucide-react";
import {Button} from "@/components/ui/button";

interface Props {
    className?: string;
    value?: string;
}

function CommentButton({className, value}: Props) {
    return (
        <Button variant={"ghost"} type={"button"} className={cn("flex items-center justify-center space-x-2", className)}>
            <MessageCircle size={16}/>
            {value && <p className={"font-light"}>{value}</p>}
        </Button>
    );
}

export default CommentButton;