import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HomePageHeader } from "../src/sections/HomePageHeader";
import { HomePageHero } from "../src/sections/HomePageHero";
import styles from "../styles/Home.module.scss";
import { WaitlistLayout } from "../src/layouts/WaitlistLayout";
import { WaitlistModal } from "../src/sections/WaitlistModal";
import { useState } from "react";
import MemoHome from "src/components/Icons/HomeIcon";

const Home: NextPage = () => {
    const [close, setClose] = useState(false);
    return (
        <WaitlistLayout>
            <HomePageHero openPopup={setClose} />
            {close ? <WaitlistModal closePopup={setClose} /> : null}

            <MemoHome />
        </WaitlistLayout>
    );
};

export default Home;
