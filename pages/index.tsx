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

const Home: NextPage = () => {
    const { analyzeModal, openAnalyzeModal } = useStore();
    console.log(analyzeModal);
    return (
        <HomeLayout>
            <HomePageHero />
            {analyzeModal ? <AnalyzeAsaModal /> : null}
            {/* <HomePageMarketUpdate /> */}
            <HomePageGetStarted />
        </HomeLayout>
    );
};

export default Home;
