import { HomePageHeader } from "../sections/HomePageHeader";
import styles from "../../styles/Home.module.scss";
import { DashboardSidebar } from "src/sections/DashboardSidebar";
import { DashboardHeader } from "src/sections/DashboardHeader";
import { DashboardAssetInfo } from "src/sections/DashboardAssetInfo";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { motion } from "framer-motion";
import { DefaultLayout } from "./DefaultLayout";
import { useStore } from "src/store";
import { useEffect } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useAsaDataQuery } from "src/generated/graphql";

type Type = {
    children: any;
};
export function DashboardLayout({ children }: Type) {
    const { analyzeModal, selectedAsa, openAnalyzeModal } = useStore();
    const router = useRouter();
    const { data, isFetching, error, status } = useAsaDataQuery({ asaID: selectedAsa.assetId });
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    useEffect(() => {
        if (selectedAsa.assetId === "") {
            router.push("/");
            toast("No asset selected", {
                id: "waitlist-toast",
                icon: "👏",
                style: {
                    borderRadius: "10px",
                    background: "#fb6c6c",
                    color: "#fff",
                },
            });
            openAnalyzeModal();
        }
    }, [router]);

    return (
        <DefaultLayout>
            {/* <motion.div
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: "linear", duration: 2 }}
            className={styles.dashboardContainer}
        ></motion.div> */}
            <DashboardSidebar />
            <div className={styles.dashboardSection}>
                <DashboardHeader />
                <DashboardAssetInfo />
                {children}
            </div>
        </DefaultLayout>
    );
}
