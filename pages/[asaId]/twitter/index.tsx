import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { useTwitterAnalyticsQuery, useTwitterOverviewQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    const router = useRouter();
    const { asaId } = router.query;
    const { selectedAsa } = useStore();
    const { status, data, error, isFetching } = useTwitterAnalyticsQuery({
        asaID: asaId as string,
        startDate: "2020-01-01",
        weekday: true,
    });
    let retweetAnalytics = [] as Array<any>;
    let likeAnalytics = [] as Array<any>;
    let sortedRetweet = [] as Array<any>;
    let sortedLike = [] as Array<any>;

    const [highestRetweetDay, setHighestRetweetDay] = useState({} as any);
    const [highestLikeDay, setHighestLikeDay] = useState({} as any);

    useEffect(() => {
        if (data) {
            data.twitterAnalytics?.results?.forEach((item) => {
                retweetAnalytics.push({
                    data: item.retweets,
                    name: item.weekday,
                });
                likeAnalytics.push({
                    data: item.likes,
                    name: item.weekday,
                });
            });

            sortedRetweet = [...retweetAnalytics];
            sortedLike = [...likeAnalytics];
        }
    }, [data]);

    return (
        <DashboardLayout>
            <DashboardAssetSocial />
            <div className={styles.dashboardContainer}>
                <TwitterSubLinks />
                <TwitterAnalysisSummary />

                {isFetching ? (
                    <Skeleton
                        count={2}
                        containerClassName={styles.summaryBarChartContainer}
                        className={styles.detailContainer}
                        baseColor="#ebebeb"
                        highlightColor="#f5f5f5"
                        height="200px"
                        width="100%"
                    />
                ) : (
                    <div className={styles.summaryBarChartContainer}>
                        {data?.twitterAnalytics?.results?.length ? (
                            <SummaryBarChart header="RETWEETS ARE MOSTLY MADE ON" data={retweetAnalytics} />
                        ) : (
                            <PrimaryEmptyState text="No data for this section" />
                        )}
                        {data?.twitterAnalytics?.results?.length ? (
                            <SummaryBarChart header="LIKES ARE MOSTLY GOTTEN ON" data={likeAnalytics} />
                        ) : (
                            <PrimaryEmptyState text="No data for this section" />
                        )}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Home;
