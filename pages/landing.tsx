import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HomePageHeader } from "../src/sections/HomePageHeader";
import { HomePageHero } from "../src/sections/HomePageHero";
import styles from "../styles/Home.module.scss";
import { WaitlistLayout } from "../src/layouts/WaitlistLayout";
import { WaitlistModal } from "../src/sections/WaitlistModal";
import { useState } from "react";
import { DefaultLayout } from "src/layouts/DefaultLayout";
import { AnalyzeAsaModal } from "src/sections/AnalyzeAsaModal";

const Home: NextPage = () => {
    const [close, setClose] = useState(false);
    return (
        <DefaultLayout>
            <HomePageHero openPopup={setClose} />
            {close ? <AnalyzeAsaModal closePopup={setClose} /> : null}
        </DefaultLayout>
    );
};

export default Home;
