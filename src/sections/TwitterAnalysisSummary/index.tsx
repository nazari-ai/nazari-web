import { SummaryLineChart } from "src/components/SummaryLineChart";
import styles from "./style.module.scss";

export function TwitterAnalysisSummary() {
    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Summary</h1>
            <div className={styles.chartContainer}></div>
        </div>
    );
}
