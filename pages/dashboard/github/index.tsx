import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { useGithubAnalyticsPerTimeQuery, useGithubOverviewQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { GithubAnalysisSummary } from "src/sections/GithubAnalysisSummary";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    const { asaId } = useStore();
    const { status, data, error, isFetching } = useGithubAnalyticsPerTimeQuery({
        asaID: asaId,
        startDate: "2020-01-01",
    });
    let commitAnalytics = [] as Array<any>;
    let issueAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.githubAnalyticsPertime?.repo?.forEach((item) => {
                commitAnalytics.push({
                    data: item.commits,
                    name: new Date(item.lastPushDate)?.toLocaleDateString(),
                });
                issueAnalytics.push({
                    data: item.issues,
                    name: new Date(item.lastPushDate)?.toLocaleDateString(),
                });
            });
            console.log(data);
        }
    }, [data]);

    return (
        <DashboardLayout>
            <DashboardAssetSocial />
            <div className={styles.dashboardContainer}>
                <GithubSubLinks />
                <GithubAnalysisSummary />
                <div className={styles.summaryBarChartContainer}>
                    <SummaryBarChart header="COMMITS ARE MOSTLY MADE ON" title="Wednesday" data={commitAnalytics} />
                    <SummaryBarChart header="COMMITS ARE MOSTLY GOTTEN ON" title="Friday" data={issueAnalytics} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
