import { SummaryLineChart } from "src/components/SummaryLineChart";
import styles from "./style.module.scss";

export function TwitterSummary() {
    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Twitter Summary</h1>
            <div className={styles.chartContainer}>
                <SummaryLineChart title="Likes" />
                <SummaryLineChart title="Retweet" />
                <SummaryLineChart title="Impression" />
            </div>
        </div>
    );
}
