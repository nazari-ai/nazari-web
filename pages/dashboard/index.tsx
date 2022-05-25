import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import styles from "../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardHeader}>
                    <h1 className={styles.dashboardGreeting}>Good Evening!</h1>
                    <p className={styles.dashboardNote}>
                        Get an idea of how Algorand is done on <Link href="/dashboard/twitter">Twitter</Link>,{" "}
                        <Link href="/dashboard/github">Github</Link> and <Link href="/dashboard/reddit">Reddit.</Link>
                    </p>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
