import type { NextPage } from "next";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PrimaryTable } from "src/components/PrimaryTable";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { useRedditAnalyticsQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { GithubAnalysisSummary } from "src/sections/GithubAnalysisSummary";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    const { selectedAsa } = useStore();
    const { data, isFetching, error, status } = useRedditAnalyticsQuery({
        asaID: selectedAsa.assetId,
        startDate: "2020-01-01",
    });

    const columns = [
        {
            title: "POST",
            dataIndex: "postTitle",
            key: "postTitle",
        },
        {
            title: "SCORE",
            dataIndex: "score",
            key: "score",
        },
        {
            title: "COMMENTS",
            dataIndex: "numOfComments",
            key: "github",
        },
        {
            title: "SENTIMENT SCORE",
            dataIndex: "sentimentScore",
            key: "sentimentScore",
        },
    ];

    return (
        <DashboardLayout>
            <DashboardAssetSocial />
            <div className={styles.dashboardContainer}>
                <div className={styles.tableContainer}>
                    {isFetching ? (
                        <Skeleton
                            count={1}
                            containerClassName={styles.summaryBarChartContainer}
                            className={styles.detailContainer}
                            baseColor="#ebebeb"
                            highlightColor="#f5f5f5"
                            height="200px"
                            width="100%"
                        />
                    ) : (
                        <PrimaryTable columns={columns} data={data?.redditAnalytics.slice(0, 10)} />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
