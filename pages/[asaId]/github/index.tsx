import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
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
    const router = useRouter();
    const { asaId } = router.query;
    const { selectedAsa } = useStore();
    const { status, data, error, isFetching } = useGithubAnalyticsPerTimeQuery({
        asaID: asaId as string,
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
        }
    }, [data]);

    return (
        <DashboardLayout>
            <DashboardAssetSocial />
            <div className={styles.dashboardContainer}>
                <GithubSubLinks />
                <GithubAnalysisSummary />
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
                        {data?.githubAnalyticsPertime?.repo?.length ? (
                            <SummaryBarChart
                                header="COMMITS ARE MOSTLY MADE ON"
                                title="Wednesday"
                                data={commitAnalytics}
                            />
                        ) : (
                            <PrimaryEmptyState text="No data for this section" />
                        )}

                        {data?.githubAnalyticsPertime?.repo?.length ? (
                            <SummaryBarChart
                                header="ISSUES ARE MOSTLY GOTTEN ON"
                                title="Friday"
                                data={issueAnalytics}
                            />
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
