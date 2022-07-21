import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { WaitlistLayout } from "../src/layouts/WaitlistLayout";
import { WaitlistModal } from "../src/sections/WaitlistModal";
import { useState } from "react";
import { WaitlistPageHero } from "src/sections/WailistPageHero";

const Home: NextPage = () => {
    const [close, setClose] = useState(false);
    return (
        <WaitlistLayout>
            <WaitlistPageHero openPopup={setClose} />
            {close ? <WaitlistModal closePopup={setClose} /> : null}
        </WaitlistLayout>
    );
};

export default Home;
