import { SummaryLineChart } from "src/components/SummaryLineChart";
import styles from "./style.module.scss";

export function GithubSummary() {
    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Github Summary</h1>
            <div className={styles.chartContainer}>
                <SummaryLineChart title="Commits" />
                <SummaryLineChart title="Stars" />
                <SummaryLineChart title="Watches" />
            </div>
        </div>
    );
}
