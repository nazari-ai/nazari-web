import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryLogo } from "../../components/PrimaryLogo";
import styles from "./style.module.scss";
import MoonIcon from "src/components/Icons/Moon";
import SunIcon from "src/components/Icons/Sun";
import UnderlineIcon from "src/components/Icons/UnderlineIcon";
import { ThemeContext } from "@pages/_app";
import { useContext } from "react";

export function HomePageHeader() {
    const theme = useContext(ThemeContext);

    return (
        <div className={styles.headerContainer}>
            <Link href="/">
                <div className={styles.headerLogoContainer}>
                    <PrimaryLogo />{" "}
                </div>
            </Link>

            <div className={styles.rightContainer}>
                <div className={styles.headerInfoContainer}>
                    <div className={styles.headerInfoUnderline}>
                        <UnderlineIcon stroke={theme?.theme ? "#fff" : "black"} />
                    </div>
                    <Link href="/about">
                        <p className={styles.headerInfo}>About Us</p>
                    </Link>
                </div>
                {/* <PrimaryButton type="button" text="Analyze ASAs" /> */}

                <button className={"switch"} onClick={theme?.toggleTheme}>
                    {theme?.theme ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </div>
    );
}
