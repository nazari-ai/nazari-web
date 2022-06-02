import type { NextPage } from "next";
import Link from "next/link";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { GithubAnalysisSummary } from "src/sections/GithubAnalysisSummary";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <GithubSubLinks />
                <GithubAnalysisSummary />
                <div className={styles.summaryBarChartContainer}>
                    <SummaryBarChart header="COMMITS ARE MOSTLY MADE ON" title="Wednesday" />
                    <SummaryBarChart header="COMMITS ARE MOSTLY GOTTEN ON" title="Friday" />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
