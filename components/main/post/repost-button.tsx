import React from 'react';
import {cn} from "@/lib/utils";
import {Repeat} from "lucide-react";
import {Button} from "@/components/ui/button";

interface Props {
    className?: string;
    value?: string;
}

function RepostButton({className, value}: Props) {
    return (
        <Button variant={"ghost"} type={"button"} className={cn("flex items-center justify-center space-x-2", className)}>
            <Repeat size={16}/>
            {value && <p className={"font-light"}>{value}</p>}
        </Button>
    );
}

export default RepostButton;