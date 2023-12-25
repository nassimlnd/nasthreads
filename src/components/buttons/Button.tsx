'use client';

import React, {Component} from 'react';

type ButtonProps = {
    type: string,
    style: string,
    size: string,
    children: React.ReactNode,
    className?: string
}

class Button extends Component<ButtonProps> {
    render() {
        let sizeClass = '';

        if (this.props.size === 'small') {
            sizeClass = 'px-3 py-1.5 text-sm';
        } else if (this.props.size === 'medium') {
            sizeClass = 'px-4 py-2 text-base';
        } else if (this.props.size === 'large') {
            sizeClass = 'px-5 py-3 text-lg';
        }

        let styleClass = '';

        if (this.props.style === 'primary') {
            styleClass = 'bg-indigo-500 dark:bg-indigo-400 hover:bg-indigo-700 dark:hover:bg-indigo-300 text-indigo-50 hover:text-indigo-50 dark:text-indigo-950 dark:hover:text-indigo-950';
        } else if (this.props.style === 'secondary') {
            styleClass = 'bg-indigo-100 dark:bg-indigo-600 hover:bg-indigo-300 dark:hover:bg-indigo-400 text-indigo-500 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-50';
        }

        return (
            <button
                type={this.props.type}
                className={'flex items-center justify-center gap-2 rounded-lg transition ' + styleClass + ' ' + sizeClass + ' ' + this.props.className}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;