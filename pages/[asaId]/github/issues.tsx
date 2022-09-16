import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { useGithubAnalyticsPerTimeQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { TimeFrame } from "src/components/TimeFrame";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";
import { AnalysisBar } from "src/sections/AnalysisBar";
import { useSocialAnalyticsHook } from "src/hooks/useSocialAnalyticsHook";

const Home: NextPage = () => {
    const { data, list, setList } = useSocialAnalyticsHook("github");

    let issueAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.githubAnalyticsPertime?.repo?.forEach(
                (item: { issues: any; lastPushDate: string | number | Date }) => {
                    issueAnalytics.push({
                        data: item.issues,
                        name: new Date(item.lastPushDate)?.toLocaleDateString(),
                    });
                },
            );
        }

        setList(issueAnalytics);
    }, [data]);

    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <GithubSubLinks />
                <AnalysisBar socialType={"github"} />
                <div className={styles.sentimentChartContainer}>
                    {data?.githubAnalyticsPertime?.repo?.length ? (
                        <SentimentBarChart title="Issues (Past 15 days)" data={list} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
