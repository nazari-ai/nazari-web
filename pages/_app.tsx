import "../styles/globals.scss";
import "../styles/reset.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import { queryClient } from "src/utils/gateway";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Head>
                    <title>Asalytics</title>
                    <meta name="description" content="Asalytics" />
                    <link rel="icon" href="favicon.svg" />
                </Head>
                <Toaster position="top-center" reverseOrder={false} />
               
                <Component {...pageProps} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
