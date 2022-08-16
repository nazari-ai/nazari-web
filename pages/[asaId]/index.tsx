import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { useAsaDataQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { AnalyzeAsaModal } from "src/sections/AnalyzeAsaModal";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { GithubSummary } from "src/sections/GithubSummary";
import { RedditSummary } from "src/sections/RedditSummary";
import { TwitterSummary } from "src/sections/TwitterSummary";
import { useStore } from "src/store";
import styles from "../../styles/dashboard.module.scss";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();
    const { asaId } = router.query;
    const { analyzeModal } = useStore();
    const presentHour = new Date().getHours();
    const salutation = presentHour < 12 ? "Good Morning!" : presentHour < 18 ? "Good Afternoon!" : "Good Evening!";
    const { selectedAsa } = useStore();
    const { data, isFetching, error, status } = useAsaDataQuery({ asaID: asaId as string });
    const [value, onChange] = useState(new Date());
    return (
        <DashboardLayout>
            <DashboardAssetSocial />
            {/* {analyzeModal ? <AnalyzeAsaModal  /> : null} */}
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardHeader}>
                    <div>
                        <h1 className={styles.dashboardGreeting}>{salutation}</h1>
                        <p className={styles.dashboardNote}>
                            Get an idea of how {data?.asaData?.result[0]?.name} is doing on{" "}
                            <Link href="/dashboard/twitter">Twitter</Link>, <Link href="/dashboard/github">Github</Link>{" "}
                            and <Link href="/dashboard/reddit">Reddit.</Link>
                        </p>
                    </div>

                    {/* <DatePicker onChange={onChange} value={value} /> */}
                </div>
                <div>
                    <TwitterSummary />
                    {/* <RedditSummary /> */}
                    <GithubSummary />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
