import { SummaryLineChart } from "src/components/SummaryLineChart";
import styles from "./style.module.scss";

export function RedditSummary() {
    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Reddit Summary</h1>
            <div className={styles.chartContainer}>
                {/* <SummaryLineChart title="Comments" />
                <SummaryLineChart title="Upvotes" />
                <SummaryLineChart title="Posts" /> */}
            </div>
        </div>
    );
}
