import type { NextPage } from "next";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import styles from "../../../styles/dashboard.module.scss";
import { useSocialAnalyticsHook } from "src/hooks/useSocialAnalyticsHook";
import { AnalysisBar } from "src/sections/AnalysisBar";

const Home: NextPage = () => {
    const { data, list, setList } = useSocialAnalyticsHook("github");

    let starAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.githubAnalyticsPertime?.repo?.forEach((item: { stars: any; lastPushDate: string | number | Date }) => {
                starAnalytics.push({
                    data: item.stars,
                    name: new Date(item.lastPushDate)?.toLocaleDateString(),
                });
            });
        }
        setList(starAnalytics);
    }, [data]);

    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <GithubSubLinks />
                <AnalysisBar socialType={"github"} />
                <div className={styles.sentimentChartContainer}>
                    {data?.githubAnalyticsPertime?.repo?.length ? (
                        <SentimentLineChart title="Stars (Past 15 days)" data={list} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
