import type { NextPage } from "next";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { useTwitterHook } from "src/hooks/useTwitterHook";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { AnalysisBar } from "src/sections/AnalysisBar";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    const { data, results, list, setList, formattedTime } = useTwitterHook();
    const { analysisType } = useStore((state) => ({ analysisType: state.analysisType }));

    let retweetAnalytics = [] as Array<any>;

    useEffect(() => {
        if (results) {
            results?.forEach((item) => {
                retweetAnalytics.push({
                    data: item.likes,
                    name: analysisType.weekdays ? item.weekday : item.hour,
                });
            });
        }

        setList(retweetAnalytics);
    }, [data]);
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <AnalysisBar socialType={"twitter"} />
                <TwitterSubLinks />
                <div className={styles.sentimentChartContainer}>
                    {results?.length > 0 ? (
                        <SentimentBarChart title={`Retweets (${formattedTime})`} data={list} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
