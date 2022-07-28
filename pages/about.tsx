import type { NextPage } from "next";
import Image from "next/image";
import { HomePageHero } from "../src/sections/HomePageHero";
import { useState } from "react";
import { AboutPageHero } from "src/sections/AboutPageHero";
import { AboutPageMission } from "src/sections/AboutPageMission";
import { AboutPageTeam } from "src/sections/AboutPageTeam";
import { HomeLayout } from "src/layouts/HomeLayout";

const About: NextPage = () => {
    const [close, setClose] = useState(false);
    return (
        <HomeLayout>
            <AboutPageHero />
            <AboutPageMission />
            <AboutPageTeam />
        </HomeLayout>
    );
};

export default About;
