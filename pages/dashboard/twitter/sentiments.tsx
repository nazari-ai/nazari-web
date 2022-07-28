import type { NextPage } from "next";
import { useEffect } from "react";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { useTwitterAnalyticsQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    const { asaId } = useStore();
    const { status, data, error, isFetching } = useTwitterAnalyticsQuery({ asaID: asaId, startDate: "2020-01-01" });
    let sentimentAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.twitterAnalytics?.results?.forEach((item) => {
                sentimentAnalytics.push({
                    data: item.sentiment,
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
                    <SentimentLineChart title="Replies (Past 15 days)" data={sentimentAnalytics} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
