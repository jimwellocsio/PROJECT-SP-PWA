'use client';

import { useEffect } from "react";

export default function RegisterServiceWorker() {
    useEffect(() => {
        if("serviceWorker" in navigator && window.serwist !== undefined) {
            window.serwist.register();
        }
    }, []);

    return <></>;
}