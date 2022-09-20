import { useStore } from "src/store";
import { PrimaryButton } from "../../components/PrimaryButton";
import styles from "./style.module.scss";

export function DashboardHeader() {
    const { openAnalyzeModal } = useStore();
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerInfoContainer}>
                <PrimaryButton text="Analyse ASA" type="button" onClick={openAnalyzeModal} />
            </div>
        </div>
    );
}
