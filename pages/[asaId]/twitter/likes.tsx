import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { useTwitterAnalyticsQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { AnalysisBar } from "src/sections/AnalysisBar";
import styles from "../../../styles/dashboard.module.scss";
import { useSocialAnalyticsHook } from "src/hooks/useSocialAnalyticsHook";

const Home: NextPage = () => {
    const { data, list, setList } = useSocialAnalyticsHook("twitter");

    let likeAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.twitterAnalytics?.results?.forEach((item: { likes: any; weekday: any }) => {
                likeAnalytics.push({
                    data: item.likes,
                    name: item.weekday,
                });
            });
        }
        setList(likeAnalytics);
    }, [data]);

    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <AnalysisBar socialType={"twitter"} />
                <TwitterSubLinks />

                <div className={styles.sentimentChartContainer}>
                    {data?.twitterAnalytics?.results?.length ? (
                        <SentimentBarChart title="Likes (Past 15 days)" data={list} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
