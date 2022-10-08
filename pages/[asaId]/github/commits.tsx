import type { NextPage } from "next";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import styles from "../../../styles/dashboard.module.scss";
import { useSocialAnalyticsHook } from "src/hooks/useSocialAnalyticsHook";
import { AnalysisBar } from "src/sections/AnalysisBar";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();
    const { asaId } = router.query;
    const { data, list, setList } = useSocialAnalyticsHook("github");
    let commitAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.githubAnalyticsPertime?.repo?.forEach(
                (item: { commits: any; lastPushDate: string | number | Date }) => {
                    commitAnalytics.push({
                        data: item.commits,
                        name: new Date(item.lastPushDate)?.toLocaleDateString(),
                    });
                },
            );
        }

        setList(commitAnalytics);
    }, [data]);
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <GithubSubLinks />
                <AnalysisBar socialType={"github"} />
                <div className={styles.sentimentChartContainer}>
                    {data?.githubAnalyticsPertime?.repo?.length ? (
                        <SentimentBarChart title="Commits (Past 15 days)" data={list} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
