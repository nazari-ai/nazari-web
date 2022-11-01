import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { TwitterAnalyticsQuery, useTwitterAnalyticsQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";
import { removeDuplicate, getMostDoneInWeekDay } from "src/utils";
import { sortByWeekdayTwitter } from "src/utils/sortFunctions";
import { ThemeContext } from "@pages/_app";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { useTwitterHook } from "src/hooks/useTwitterHook";
import { AnalysisBar } from "src/sections/AnalysisBar";

const Home: NextPage = () => {
    const { selectedAsa } = useStore();
    const { results, formattedTime, analyticsList } = useTwitterHook();

    const theme = useContext(ThemeContext);
    const { status, data, error, isFetching } = useTwitterAnalyticsQuery({
        asaID: selectedAsa.assetId,
        startDate: "2020-01-01",
        weekday: true,
    });

    return (
        <DashboardLayout>
            <DashboardAssetSocial />
            <div className={styles.dashboardContainer}>
                <AnalysisBar socialType={"twitter"} />
                <TwitterSubLinks />

                <div className={styles.combinedChartContainer}>
                    {results?.length > 0 ? (
                        <SentimentBarChart title={`Likes (${formattedTime})`} data={analyticsList.likes} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}

                    {results?.length > 0 ? (
                        <SentimentBarChart title={`Retweets (${formattedTime})`} data={analyticsList.retweets} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}

                    {results?.length > 0 ? (
                        <SentimentBarChart title={`Sentiments (${formattedTime})`} data={analyticsList.sentiments} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
