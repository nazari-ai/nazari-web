import { useStore } from "src/store";
import { PrimaryButton } from "../../components/PrimaryButton";
import styles from "./style.module.scss";
import { ThemeContext } from "@pages/_app";
import { useContext } from "react";
import SunIcon from "src/components/Icons/Sun";
import MoonIcon from "src/components/Icons/Moon";

export function DashboardHeader() {
    const theme = useContext(ThemeContext);
    const { openAnalyzeModal } = useStore();

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerInfoContainer}>
                <PrimaryButton text="Analyse ASA" type="button" onClick={openAnalyzeModal} />
            </div>

            <button className={"switch"} onClick={theme?.toggleTheme}>
                {theme?.theme ? <SunIcon /> : <MoonIcon />}
            </button>
        </div>
    );
}
