import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SummaryLineChart } from "src/components/SummaryLineChart";
import { useGithubAnalyticsPerTimeQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styles from "./style.module.scss";

export function GithubSummary() {
    const { selectedAsa } = useStore();
    const { status, data, error, isFetching } = useGithubAnalyticsPerTimeQuery({
        asaID: selectedAsa.assetId,
        startDate: "2020-01-01",
    });

    const [commitAnalyticsInState, setcommitAnalyticsInState] = useState([] as any);
    const [starAnalyticsInState, setstarAnalyticsInState] = useState([] as any);
    const [watchAnalyticsInState, setwatchAnalyticsInState] = useState([] as any);

    const commitAnalytics = [] as Array<any>;
    const starAnalytics = [] as Array<any>;
    const watchAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.githubAnalyticsPertime?.repo?.forEach((item) => {
                commitAnalytics.push({
                    data: item.commits,
                    name: new Date(item.lastPushDate)?.toLocaleString("en-US"),
                });
                starAnalytics.push({
                    data: item.stars,
                    name: new Date(item.lastPushDate)?.toLocaleString("en-US"),
                });
                watchAnalytics.push({
                    data: item.watches,
                    name: new Date(item.lastPushDate)?.toLocaleString("en-US"),
                });
            });
        }

        setcommitAnalyticsInState(commitAnalytics);
        setstarAnalyticsInState(starAnalytics);
        setwatchAnalyticsInState(watchAnalytics);
    }, [data]);
    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Github Summary</h1>

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
                    <SummaryLineChart title="Commits" data={commitAnalyticsInState} />
                    <SummaryLineChart title="Stars" data={starAnalyticsInState} />
                    <SummaryLineChart title="Watches" data={watchAnalyticsInState} />
                </div>
            )}
        </div>
    );
}
