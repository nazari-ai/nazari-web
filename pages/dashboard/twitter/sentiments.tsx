import type { NextPage } from "next";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { useTwitterAnalyticsQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    const { selectedAsa } = useStore();
    const { status, data, error, isFetching } = useTwitterAnalyticsQuery({
        asaID: selectedAsa.assetId,
        startDate: "2020-01-01",
        weekday: true,
    });
    let sentimentAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.twitterAnalytics?.results?.forEach((item) => {
                sentimentAnalytics.push({
                    data: item.sentiment,
                    name: item.weekday,
                });
            });
        }
    }, [data]);
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <TwitterSubLinks />
                <div className={styles.sentimentChartContainer}>
                    {data?.twitterAnalytics?.results?.length ? (
                        <SentimentBarChart title="Replies (Past 15 days)" data={sentimentAnalytics} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
