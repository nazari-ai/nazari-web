import type { NextPage } from "next";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <TwitterSubLinks />
                <div className={styles.sentimentChartContainer}>
                    <SentimentLineChart title="Replies (Past 15 days)" />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
