import "../styles/globals.scss";
import "../styles/reset.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Asalytics</title>
                <meta name="description" content="Asalytics" />
                <link rel="icon" href="favicon.svg" />
                
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
