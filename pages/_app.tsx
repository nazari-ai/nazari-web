import "../styles/reset.scss";
import "../styles/globals.scss";

import Head from "next/head";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import { queryClient } from "src/utils/gateway";
import { ReactQueryDevtools } from "react-query/devtools";
import { AnimatePresence } from "framer-motion";
import { createContext, useState } from "react";

interface contextType {
    theme: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<contextType | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(!theme);
    };

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <meta name="keywords" content="Alogrand Analytics Nazari Coin Algofam"></meta>
                    <meta property="og:title" content="Nazari" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://nazari.ai" />
                    <meta property="og:image" content="https://nazari.ai/images/card.png" />
                    <meta name="twitter:title" property="og:title" content="Nazari" />
                    <meta name="twitter:site_name" property="og:site_name" content="@nazari" />
                    <meta name="twitter:image" content="https://nazari.ai/images/card.png" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:description"
                        property="twitter:description"
                        content="Explore opinions for Algorand Standard Assets across multiple social platforms for free all on one platform."
                    />
                    <meta
                        property="og:description"
                        content="Explore opinions for Algorand Standard Assets across multiple social platforms for free all on one platform."
                    />
                    <meta
                        name="description"
                        content="Explore opinions for Algorand Standard Assets across multiple social platforms for free all on one platform."
                    />
                    <meta name="userreport:mediaId" content="320c31b8-bd1e-4969-aa09-fb79986738fa" />

                    <link rel="icon" href="/favicon.png" />
                    <meta charSet="utf-8"></meta>
                    <link rel="icon" href="/favicon.ico"></link>
                    <title>Nazari</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:wght@300;400;700&display=swap"
                        rel="stylesheet"
                    ></link>

                    <script
                        src="https://sak.userreport.com/asalytics/launcher.js"
                        async
                        id="userreport-launcher-script"
                    ></script>
                </Head>
                <Toaster position="top-center" reverseOrder={false} />
                <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                    <ThemeContext.Provider value={{ theme, toggleTheme }}>
                        <Component {...pageProps} />
                    </ThemeContext.Provider>
                </AnimatePresence>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
