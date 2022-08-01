import type { NextPage } from "next";
import Link from "next/link";
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
    const { data, isFetching, error, status } = useRedditAnalyticsQuery({ asaID: selectedAsa.assetId });

    const columns = [
        {
            title: "NAME",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "PRICE",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "GITHUB",
            dataIndex: "github",
            key: "github",
        },
        {
            title: "REDDIT",
            dataIndex: "reddit",
            key: "reddit",
        },
        {
            title: "TWITTER",
            dataIndex: "twitter",
            key: "twitter",
        },
    ];

    return (
        <DashboardLayout>
            <DashboardAssetSocial />
            <div className={styles.dashboardContainer}>
                <div className={styles.summaryBarChartContainer}>
                    <PrimaryTable columns={columns} data={data?.redditAnalytics} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
