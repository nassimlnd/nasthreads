'use client'

import React, {Component} from 'react';
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Heart} from "lucide-react";

interface Props {
    className?: string;
    value?: string;
}

class LikeButton extends Component<Props> {
    render() {
        return (
            <Button variant={"ghost"} type={"button"}
                    className={cn("flex items-center justify-center space-x-2", this.props.className)}>
                <Heart size={16}/>
                {this.props.value && <p className={"font-light"}>{this.props.value}</p>}
            </Button>
        );
    }
}

export default LikeButton;