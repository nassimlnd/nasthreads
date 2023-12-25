'use client';

import React, {Component} from 'react';

type InputProps = {
    style: string,
    type: string,
    size: string,
    placeholder?: string,
    value?: string,
    className?: string,
    icon?: React.ReactNode,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

class Input extends Component<InputProps> {
    render() {
        let styleClass = '';

        if (this.props.style === 'primary') {
            styleClass = 'bg-white dark:bg-slate-900 placeholder-slate-400 dark:placeholder-slate-500 border border-slate-300 dark:border-slate-600 text-indigo-950 dark:text-indigo-50 focus:bg-indigo-50 dark:focus:bg-indigo-950 dark:focus:outline-none focus:outline-none dark:focus:ring-2 dark:focus:ring-indigo-600 dark:focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:border-transparent';
        } else if (this.props.style === 'secondary') {
            styleClass = 'bg-indigo-100 dark:bg-indigo-600 hover:bg-indigo-300 dark:hover:bg-indigo-400 text-indigo-500 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-50';
        }

        let sizeClass = '';

        if (this.props.size === 'small') {
            sizeClass = 'px-3 py-1.5 text-sm';
        } else if (this.props.size === 'medium') {
            sizeClass = 'px-4 py-2 text-base';
        } else if (this.props.size === 'large') {
            sizeClass = 'px-5 py-3 text-lg';
        }

        return (
            <div className={'relative'}>
                <input
                    className={'block rounded-lg ' + styleClass + ' ' + sizeClass + ' ' + this.props.className}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
                <div className={'absolute right-0 inset-y-0 flex items-center pr-3'}>
                    {this.props.icon}
                </div>
            </div>
        );
    }
}

export default Input;