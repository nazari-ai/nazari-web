import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { useSocialAnalyticsHook } from "src/hooks/useSocialAnalyticsHook";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { AnalysisBar } from "src/sections/AnalysisBar";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    const { data, list, setList } = useSocialAnalyticsHook("twitter");

    let retweetAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.twitterAnalytics?.results?.forEach((item: { likes: any; weekday: any }) => {
                retweetAnalytics.push({
                    data: item.likes,
                    name: item.weekday,
                });
            });
        }

        setList(retweetAnalytics);
    }, [data]);
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <AnalysisBar socialType={"twitter"} />
                <TwitterSubLinks />
                <div className={styles.sentimentChartContainer}>
                    {data?.twitterAnalytics?.results?.length ? (
                        <SentimentBarChart title="Retweets (Past 15 days)" data={list} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
