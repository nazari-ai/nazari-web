import { AnalysisSummary } from "src/components/AnalysisSummary";
import { useTwitterOverviewQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styles from "./style.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function TwitterAnalysisSummary() {
    const { asaId } = useStore();
    const { status, data, error, isFetching } = useTwitterOverviewQuery({ asaID: asaId });

    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Summary</h1>
            {isFetching ? (
                <Skeleton
                    count={6}
                    containerClassName={styles.chartContainer}
                    className={styles.detailContainer}
                    baseColor="#ebebeb"
                    highlightColor="#f5f5f5"
                    height="50px"
                />
            ) : (
                <div className={styles.chartContainer}>
                    <AnalysisSummary header="Posts" />
                    <AnalysisSummary header="Likes" info={data?.twitterOverview?.likeTotal} />
                    <AnalysisSummary header="Replies" />
                    <AnalysisSummary header="Sentiments" info={data?.twitterOverview?.sentimentTotal} />
                    <AnalysisSummary header="Impressions" />
                    <AnalysisSummary header="Retweets" info={data?.twitterOverview?.retweetTotal} />
                </div>
            )}
        </div>
    );
}
