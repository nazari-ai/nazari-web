import type { NextPage } from "next";
import Link from "next/link";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <TwitterSubLinks />
                <div className={styles.sentimentChartContainer}>
                    <SentimentLineChart title="Retweets (Past 15 days)" />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
