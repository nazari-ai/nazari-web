import Link from "next/link";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryLogo } from "../../components/PrimaryLogo";
import styles from "./style.module.scss";
import MoonIcon from "src/components/Icons/Moon";
import SunIcon from "src/components/Icons/Sun";
import { ThemeContext } from "@pages/_app";
import { useContext } from "react";
import { useStore } from "src/store";

export function AssetsPageHeader() {
    const theme = useContext(ThemeContext);
    const { openAnalyzeModal } = useStore();

    return (
        <div className={styles.headerContainer}>
            <Link href="/">
                <div className={styles.headerLogoContainer}>
                    <PrimaryLogo />{" "}
                </div>
            </Link>

            <div className={styles.rightContainer}>
                <div className={styles.headerInfoContainer}>
                    <PrimaryButton text="Analyse ASA" type="button" onClick={openAnalyzeModal} />
                </div>

                <button className={"switch"} onClick={theme?.toggleTheme}>
                    {theme?.theme ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </div>
    );
}
