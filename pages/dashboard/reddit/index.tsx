import type { NextPage } from "next";
import Link from "next/link";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { GithubAnalysisSummary } from "src/sections/GithubAnalysisSummary";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    return (
        <DashboardLayout>
            <DashboardAssetSocial />
            <div className={styles.dashboardContainer}>
                <GithubAnalysisSummary />
                <div className={styles.summaryBarChartContainer}>
                    <SummaryBarChart header="KEYWORD SENTIMENTS" title="😡Aggressive " />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
