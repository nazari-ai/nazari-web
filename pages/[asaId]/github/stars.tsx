import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { useGithubAnalyticsPerTimeQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    const router = useRouter();
    const { asaId } = router.query;
    const { selectedAsa } = useStore();
    const { status, data, error, isFetching } = useGithubAnalyticsPerTimeQuery({
        asaID: asaId as string,
        startDate: "2020-01-01",
    });
    let starAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.githubAnalyticsPertime?.repo?.forEach((item) => {
                starAnalytics.push({
                    data: item.stars,
                    name: new Date(item.lastPushDate)?.toLocaleDateString(),
                });
            });
        }
    }, [data]);
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <GithubSubLinks />
                <div className={styles.sentimentChartContainer}>
                    {data?.githubAnalyticsPertime?.repo?.length ? (
                        <SentimentLineChart title="Stars (Past 15 days)" data={starAnalytics} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
