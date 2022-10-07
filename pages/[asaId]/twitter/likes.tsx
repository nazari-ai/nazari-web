import type { NextPage } from "next";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { AnalysisBar } from "src/sections/AnalysisBar";
import styles from "../../../styles/dashboard.module.scss";
import { useTwitterHook } from "src/hooks/useTwitterHook";
import { useStore } from "src/store";

const Home: NextPage = () => {
    const { results, list, setList } = useTwitterHook();
    const { analysisType } = useStore((state) => ({ analysisType: state.analysisType }));

    let likeAnalytics = [] as Array<any>;

    useEffect(() => {
        if (results) {
            results?.forEach((item) => {
                likeAnalytics.push({
                    data: item.likes,
                    name: analysisType.weekdays ? item.weekday : item.hour,
                });
            });
        }
        setList(likeAnalytics);
    }, [results]);

    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <AnalysisBar socialType={"twitter"} />
                <TwitterSubLinks />

                <div className={styles.sentimentChartContainer}>
                    {results?.length > 0 ? (
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
