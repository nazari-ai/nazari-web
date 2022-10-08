import type { NextPage } from "next";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { useSocialAnalyticsHook } from "src/hooks/useSocialAnalyticsHook";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { AnalysisBar } from "src/sections/AnalysisBar";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    const { data, list, setList } = useSocialAnalyticsHook("twitter");
    let sentimentAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.twitterAnalytics?.results?.forEach((item: { sentiment: any; weekday: any }) => {
                sentimentAnalytics.push({
                    data: item.sentiment,
                    name: item.weekday,
                });
            });
        }
        setList(sentimentAnalytics);
    }, [data]);
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <AnalysisBar socialType={"twitter"} />
                <TwitterSubLinks />
                <div className={styles.sentimentChartContainer}>
                    {data?.twitterAnalytics?.results?.length ? (
                        <SentimentBarChart title="Replies (Past 15 days)" data={list} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
