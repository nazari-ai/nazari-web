import type { NextPage } from "next";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import styles from "../../../styles/dashboard.module.scss";
import { AnalysisBar } from "src/sections/AnalysisBar";
import { useSocialAnalyticsHook } from "src/hooks/useSocialAnalyticsHook";

const Home: NextPage = () => {
    // const { selectedAsa } = useStore();
    // const { status, data, error, isFetching } = useGithubAnalyticsPerTimeQuery({
    //     asaID: selectedAsa.assetId,
    //     startDate: "2020-01-01",
    // });
    const { data, list, setList } = useSocialAnalyticsHook("github");

    let watchAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.githubAnalyticsPertime?.repo?.forEach(
                (item: { watches: any; lastPushDate: string | number | Date }) => {
                    watchAnalytics.push({
                        data: item.watches,
                        name: new Date(item.lastPushDate)?.toLocaleDateString(),
                    });
                },
            );
        }

        setList(watchAnalytics);
    }, [data]);
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <GithubSubLinks />
                <AnalysisBar socialType={"github"} />
                <div className={styles.sentimentChartContainer}>
                    {data?.githubAnalyticsPertime?.repo?.length ? (
                        <SentimentBarChart title="Watches (Past 15 days)" data={list} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
