import { AnalysisSummary } from "src/components/AnalysisSummary";
import styles from "./style.module.scss";

export function TwitterAnalysisSummary() {
    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Summary</h1>
            <div className={styles.chartContainer}>
                <AnalysisSummary header="Posts" info="250" />
                <AnalysisSummary header="Likes" info="2350" />
                <AnalysisSummary header="Replies" info="3450" />
                <AnalysisSummary header="Sentiments" info="92350" />
                <AnalysisSummary header="Impressions" info="8439" />
                <AnalysisSummary header="Retweets" info="8349" />
            </div>
        </div>
    );
}
