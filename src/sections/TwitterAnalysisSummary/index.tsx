import { AnalysisSummary } from "src/components/AnalysisSummary";
import { useTwitterOverviewQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styles from "./style.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { ThemeContext } from "@pages/_app";
import { useContext } from "react";

export function TwitterAnalysisSummary() {
    const { selectedAsa } = useStore();
    const theme = useContext(ThemeContext);
    const { status, data, error, isFetching } = useTwitterOverviewQuery({ asaID: selectedAsa.assetId });

    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Summary</h1>
            {isFetching ? (
                <Skeleton
                    count={6}
                    containerClassName={styles.chartContainer}
                    className={styles.detailContainer}
                    baseColor={theme?.theme ? "#333333" : "#ebebeb"}
                    highlightColor={theme?.theme ? "#626772" : "#f5f5f5"}
                    height="50px"
                />
            ) : (
                <div>
                    {data?.twitterOverview ? (
                        <div className={styles.chartContainer}>
                            <AnalysisSummary header="Posts" info={data?.twitterOverview?.tweetTotal} />
                            <AnalysisSummary header="Likes" info={data?.twitterOverview?.likeTotal} />
                            {/* <AnalysisSummary header="Replies" /> */}
                            <AnalysisSummary
                                header="Sentiments"
                                info={data?.twitterOverview?.sentimentTotal?.toFixed(1)}
                            />
                            {/* <AnalysisSummary header="Impressions" /> */}
                            <AnalysisSummary header="Retweets" info={data?.twitterOverview?.retweetTotal} />
                        </div>
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            )}
        </div>
    );
}
