import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { useGithubAnalyticsPerTimeQuery, GithubAnalyticsPerTime } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { GithubAnalysisSummary } from "src/sections/GithubAnalysisSummary";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";
import { sortByWeekday } from "src/utils/sortFunctions";
import { removeDuplicate, getMostDoneInWeekDay } from "src/utils";

const Home: NextPage = () => {
    const { selectedAsa } = useStore();
    const { data, isFetching } = useGithubAnalyticsPerTimeQuery({
        asaID: selectedAsa.assetId,
        startDate: "2020-01-01",
        weekDay: true,
    });

    const sortedData: GithubAnalyticsPerTime[] = sortByWeekday(data?.githubAnalyticsPertime.repo ?? ["hello"]);

    const mostCommitsWeekday = getMostDoneInWeekDay(sortedData, "commits")?.lastPushDateWeekday ?? "";
    const mostIssuesWeekday = getMostDoneInWeekDay(sortedData, "issues")?.lastPushDateWeekday ?? "";

    const [commitAnalyticsState, setcommitAnalyticsState] = useState([] as any);
    const [issueAnalyticsState, setissueAnalyticsState] = useState([] as any);

    let commitAnalytics = [] as Array<any>;
    let issueAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            sortedData.forEach((item) => {
                commitAnalytics.push({
                    data: item.commits,
                    name: item.lastPushDateWeekday,
                });
                issueAnalytics.push({
                    data: item.issues,
                    name: item.lastPushDateWeekday,
                });
            });
            setcommitAnalyticsState(removeDuplicate(commitAnalytics));
            setissueAnalyticsState(removeDuplicate(issueAnalytics));
        }
    }, [sortedData]);

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
                                title={mostCommitsWeekday}
                                data={commitAnalyticsState}
                            />
                        ) : (
                            <PrimaryEmptyState text="No data for this section" />
                        )}

                        {data?.githubAnalyticsPertime?.repo?.length ? (
                            <SummaryBarChart
                                header="ISSUES ARE MOSTLY GOTTEN ON"
                                title={mostIssuesWeekday}
                                data={issueAnalyticsState}
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
