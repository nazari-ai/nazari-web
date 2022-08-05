import type { NextPage } from "next";
import { HomePageHero } from "../src/sections/HomePageHero";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import { AnalyzeAsaModal } from "src/sections/AnalyzeAsaModal";
import { HomePageMarketUpdate } from "src/sections/HomePageMarketUpdate";
import { HomePageGetStarted } from "src/sections/HomePageGetStarted";
import { useGithubOverviewQuery } from "src/generated/graphql";
import { HomeLayout } from "src/layouts/HomeLayout";
import { useStore } from "src/store";
import { WaitlistPageHero } from "src/sections/WailistPageHero";
import { WaitlistModal } from "src/sections/WaitlistModal";

const Home: NextPage = () => {
    const { analyzeModal, openAnalyzeModal } = useStore();
    const [close, setClose] = useState(false);
    return (
        <HomeLayout>
            <HomePageHero openPopup={setClose} />
            {/* {analyzeModal ? <AnalyzeAsaModal /> : null} */}
            {/* <WaitlistPageHero openPopup={setClose} /> */}
            {close ? <WaitlistModal closePopup={setClose} /> : null}
            {/* <HomePageMarketUpdate /> */}
            <HomePageGetStarted openPopup={setClose} />
        </HomeLayout>
    );
};

export default Home;
