import type { NextPage } from "next";
import { HomePageHero } from "../src/sections/HomePageHero";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import { DefaultLayout } from "src/layouts/DefaultLayout";
import { AnalyzeAsaModal } from "src/sections/AnalyzeAsaModal";
import { HomePageMarketUpdate } from "src/sections/HomePageMarketUpdate";
import { HomePageGetStarted } from "src/sections/HomePageGetStarted";

const Home: NextPage = () => {
    const [close, setClose] = useState(false);
    return (
        <DefaultLayout>
            <HomePageHero openPopup={setClose} />
            {close ? <AnalyzeAsaModal closePopup={setClose} /> : null}
            <HomePageMarketUpdate />
            <HomePageGetStarted openPopup={setClose} />
        </DefaultLayout>
    );
};

export default Home;
