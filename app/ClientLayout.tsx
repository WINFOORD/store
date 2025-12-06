'use client';

import { CookieConsent } from "./CookieConsent";
import { useLanguageStore } from "./store/cookieStore";


export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { setCookiesEnabled } = useLanguageStore();

    const handleAccept = () => {
        setCookiesEnabled(true);
    };

    const handleDecline = () => {
        setCookiesEnabled(false);
    };

    return (
        <>
                {children}
            <CookieConsent onAccept={handleAccept} onDecline={handleDecline} />
        </>
    );
}