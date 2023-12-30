import React, {Component} from 'react';
import {cn} from "@/lib/utils";
import {Heart, Share} from "lucide-react";
import {Button} from "@/components/ui/button";

interface Props {
    className?: string;
    value?: string;
}

class ShareButton extends Component<Props> {
    render() {
        return (
            <Button variant={"ghost"} type={"button"}
                    className={cn("flex items-center justify-center space-x-2", this.props.className)}>
                <Share size={16}/>
                {this.props.value && <p className={"font-light"}>{this.props.value}</p>}
            </Button>
        );
    }
}

export default ShareButton;