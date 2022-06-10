import type { NextPage } from "next";
import Link from "next/link";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    return (
        <DashboardLayout>
            <DashboardAssetSocial />
            <div className={styles.dashboardContainer}>
                <TwitterSubLinks />
                <TwitterAnalysisSummary />
                <div className={styles.summaryBarChartContainer}>
                    <SummaryBarChart header="TWEETS ARE MOSTLY MADE ON" title="Wednesday" />
                    <SummaryBarChart header="IMPRESSIONS ARE MOSTLY GOTTEN ON" title="Friday" />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
