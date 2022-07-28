import { useEffect } from "react";
import { SummaryLineChart } from "src/components/SummaryLineChart";
import { useTwitterAnalyticsQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styles from "./style.module.scss";

export function TwitterSummary() {
    const { asaId } = useStore();
    const { status, data, error, isFetching } = useTwitterAnalyticsQuery({
        asaID: asaId,
        startDate: "2020-01-01",
    });
    const sentimentAnalytics = [] as Array<any>;
    const retweetAnalytics = [] as Array<any>;
    const likeAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.twitterAnalytics?.results?.forEach((item) => {
                sentimentAnalytics.push({
                    data: item.sentiment,
                    name: new Date(item.postedAt)?.toLocaleDateString(),
                });
                retweetAnalytics.push({
                    data: item.retweets,
                    name: new Date(item.postedAt)?.toLocaleDateString(),
                });
                likeAnalytics.push({
                    data: item.likes,
                    name: new Date(item.postedAt)?.toLocaleDateString(),
                });
            });
            console.log(data);
        }
    }, [data]);
    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Twitter Summary</h1>
            <div className={styles.chartContainer}>
                <SummaryLineChart title="Likes" data={likeAnalytics} />
                <SummaryLineChart title="Retweet" data={retweetAnalytics} />
                <SummaryLineChart title="Sentiments" data={sentimentAnalytics} />
            </div>
        </div>
    );
}
