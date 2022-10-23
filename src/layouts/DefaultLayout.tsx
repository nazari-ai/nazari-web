import { AnalyzeAsaModal } from "src/sections/AnalyzeAsaModal";
import { useStore } from "src/store";
import { useContext } from "react";
import { ThemeContext } from "@pages/_app";
import styles from "../../styles/Home.module.scss";

type Type = {
    children: any;
};
export function DefaultLayout({ children }: Type) {
    const theme = useContext(ThemeContext);

    const { analyzeModal } = useStore();

    return (
        <div
            className={styles.motherContainer}
            data-theme={theme?.theme ? "dark" : "light"}
            style={{ backgroundColor: theme?.theme ? "#262626" : "" }}
        >
            {analyzeModal ? <AnalyzeAsaModal /> : null}
            {children}
        </div>
    );
}
