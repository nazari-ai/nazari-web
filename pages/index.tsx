import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HomePageHeader } from "../src/sections/HomePageHeader";
import { HomePageHero } from "../src/sections/HomePageHero";
import styles from "../styles/Home.module.scss";
import { WaitlistLayout } from "../src/layouts/WaitlistLayout";
import { WaitlistModal } from "../src/sections/WaitlistModal";

const Home: NextPage = () => {
    return (
        <WaitlistLayout>
            <HomePageHero />
            <WaitlistModal />
        </WaitlistLayout>
    );
};

export default Home;
