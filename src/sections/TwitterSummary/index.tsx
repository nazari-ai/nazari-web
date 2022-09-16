import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SummaryLineChart } from "src/components/SummaryLineChart";
import { useTwitterAnalyticsQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styles from "./style.module.scss";

export function TwitterSummary() {
    const { selectedAsa } = useStore();
    const { status, data, error, isFetching } = useTwitterAnalyticsQuery({
        asaID: selectedAsa.assetId,
        startDate: "2020-01-01",
    });

    const [sentimentAnalyticsInState, setsentimentAnalyticsInState] = useState([] as any);
    const [retweetAnalyticsInState, setretweetAnalyticsInState] = useState([] as any);
    const [likeAnalyticsInState, setlikeAnalyticsInState] = useState([] as any);

    const sentimentAnalytics = [] as Array<any>;
    const retweetAnalytics = [] as Array<any>;
    const likeAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.twitterAnalytics?.results?.forEach((item) => {
                sentimentAnalytics.push({
                    data: item.sentiment,
                    name: new Date(item.postedAt)?.toLocaleString("en-US"),
                });
                retweetAnalytics.push({
                    data: item.retweets,
                    name: new Date(item.postedAt)?.toLocaleString("en-US"),
                });
                likeAnalytics.push({
                    data: item.likes,
                    name: new Date(item.postedAt)?.toLocaleString("en-US"),
                });
            });
        }

        setsentimentAnalyticsInState(sentimentAnalytics);
        setretweetAnalyticsInState(retweetAnalytics);
        setlikeAnalyticsInState(likeAnalytics);
    }, [data]);
    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Twitter Summary</h1>

            {isFetching ? (
                <Skeleton
                    count={3}
                    containerClassName={styles.chartContainer}
                    className={styles.detailContainer}
                    baseColor="#ebebeb"
                    highlightColor="#f5f5f5"
                    height="150px"
                    width="100%"
                />
            ) : (
                <div className={styles.chartContainer}>
                    <SummaryLineChart title="Likes" data={likeAnalyticsInState} />
                    <SummaryLineChart title="Retweet" data={retweetAnalyticsInState} />
                    <SummaryLineChart title="Sentiments" data={sentimentAnalyticsInState} />
                </div>
            )}
        </div>
    );
}
