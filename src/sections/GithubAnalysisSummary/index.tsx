import { AnalysisSummary } from "src/components/AnalysisSummary";
import styles from "./style.module.scss";

export function GithubAnalysisSummary() {
    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Summary</h1>
            <div className={styles.chartContainer}>
                <AnalysisSummary header="Stars" info="250" />
                <AnalysisSummary header="Watches" info="2350" />
                <AnalysisSummary header="Commits" info="3450" />
                <AnalysisSummary header="Issues" info="92350" />
                <AnalysisSummary header="Pull Requests" info="8439" />
                <AnalysisSummary header="Sentiments" info="8349" />
            </div>
        </div>
    );
}
