import type { NextPage } from "next";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import styles from "../../../styles/dashboard.module.scss";
import { useGithubHook } from "src/hooks/useGithubHook";
import { AnalysisBar } from "src/sections/AnalysisBar";
import { sortByWeekday } from "src/utils/sortFunctions";
import { useStore } from "src/store";

const Home: NextPage = () => {
    const { repo, list, setList } = useGithubHook();
    const { analysisType } = useStore((state) => ({ analysisType: state.analysisType }));

    let starAnalytics = [] as Array<any>;

    useEffect(() => {
        if (repo) {
            repo.forEach((item) => {
                starAnalytics.push({
                    data: item.stars,
                    name: analysisType.weekdays ? item.lastPushDateWeekday : item.lastPushDateDay,
                });
            });
        }
        setList(starAnalytics);
    }, [repo]);

    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <GithubSubLinks />
                <AnalysisBar socialType={"github"} />
                <div className={styles.sentimentChartContainer}>
                    {repo.length > 0 ? (
                        <SentimentLineChart title="Stars (Past 15 days)" data={list} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
