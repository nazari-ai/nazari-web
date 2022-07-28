import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { useTwitterAnalyticsQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    const { asaId } = useStore();
    const { status, data, error, isFetching } = useTwitterAnalyticsQuery({ asaID: asaId, startDate: "2020-01-01" });
    let retweetAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.twitterAnalytics?.results?.forEach((item) => {
                retweetAnalytics.push({
                    data: item.likes,
                    name: new Date(item.postedAt)?.toLocaleDateString(),
                });
            });
            console.log(data);
        }
    }, [data]);
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <TwitterSubLinks />
                <div className={styles.sentimentChartContainer}>
                    <SentimentLineChart title="Retweets (Past 15 days)" data={retweetAnalytics} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
