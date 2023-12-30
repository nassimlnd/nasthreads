'use client'

import React, {Component} from 'react';

type SidebarItemProps = {
    value: string,
    icon: any,
    link: string,
    className?: string
    selected: boolean
}

class SidebarItem extends Component<SidebarItemProps> {
    render() {
        return (
            <div className={"h-fit flex items-center w-fit lg:w-full gap-x-5 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-4 rounded-lg font-semibold cursor-pointer transition-all " + this.props.className}>
                {this.props.icon}
                <div className={"hidden lg:block"}>{this.props.value}</div>
            </div>
        );
    }
}

export default SidebarItem;