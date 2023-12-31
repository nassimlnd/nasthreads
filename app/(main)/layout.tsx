'use client'

import React, {useLayoutEffect} from 'react';

interface Props {
    children?: React.ReactNode;
}

function MainLayout({children}: Props) {
    const [isMobile, setIsMobile] = React.useState(false);

    useLayoutEffect(() => {
        function updateSize() {
            if (window.innerWidth < 500) {
                setIsMobile(true);
                //console.log("true")
            } else {
                setIsMobile(false);
            }
        }

        return window.addEventListener('resize', updateSize);
    }, []);

    return (
        <>
            {children}
        </>
    );
}

export default MainLayout;