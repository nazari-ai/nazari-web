import type { NextPage } from "next";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import styles from "../../../styles/dashboard.module.scss";
import { AnalysisBar } from "src/sections/AnalysisBar";
import { useGithubHook } from "src/hooks/useGithubHook";
import { useStore } from "src/store";
import { sortByWeekday } from "src/utils/sortFunctions";

const Home: NextPage = () => {
    const { data, repo, list, setList, formattedTime } = useGithubHook();
    const { analysisType } = useStore((state) => ({ analysisType: state.analysisType }));

    let pullRequestAnalytics = [] as Array<any>;

    useEffect(() => {
        if (repo) {
            repo.forEach((item) => {
                pullRequestAnalytics.push({
                    data: item.pullRequests,
                    name: analysisType.byrepo
                        ? item.repoName
                        : analysisType.weekdays
                        ? item.lastPushDateWeekday
                        : item.lastPushDateDay,
                });
            });
        }

        setList(pullRequestAnalytics);
    }, [data]);
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <GithubSubLinks />
                <AnalysisBar socialType={"github"} />
                <div className={styles.sentimentChartContainer}>
                    {repo?.length > 0 ? (
                        <SentimentBarChart title={`Pull Requests (${formattedTime})`} data={list} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
