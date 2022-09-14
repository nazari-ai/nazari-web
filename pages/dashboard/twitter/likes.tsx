import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { useTwitterAnalyticsQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { AnalysisBar } from "src/sections/AnalysisBar";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";
import { format } from "date-fns";
import { useQueryClient } from "react-query";

const Home: NextPage = () => {
    const { selectedAsa, dateRange, analysisType } = useStore();
    const { status, data, error, isFetching, refetch } = useTwitterAnalyticsQuery({
        asaID: selectedAsa.assetId,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate ? dateRange.endDate : format(new Date(), "yyyy-MM-dd"),
        hour: analysisType.hour,
        weekday: analysisType.weekdays,
    });

    let likeAnalytics = [] as Array<any>;

    const queryClient = useQueryClient();

    useEffect(() => {
        queryClient.invalidateQueries(["twitterAnalytics"]);
        refetch();
    }, [dateRange, analysisType]);

    useEffect(() => {
        if (data) {
            data.twitterAnalytics?.results?.forEach((item) => {
                likeAnalytics.push({
                    data: item.likes,
                    name: item.weekday,
                });
            });
        }
    }, [data, dateRange, analysisType]);

    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <AnalysisBar />
                <TwitterSubLinks />

                <div className={styles.sentimentChartContainer}>
                    {data?.twitterAnalytics?.results?.length ? (
                        <SentimentBarChart title="Likes (Past 15 days)" data={likeAnalytics} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
