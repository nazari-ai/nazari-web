import { HomePageHeader } from "../sections/HomePageHeader";
import styles from "../../styles/Home.module.scss";
import { DashboardSidebar } from "src/sections/DashboardSidebar";
import { DashboardHeader } from "src/sections/DashboardHeader";
import { DashboardAssetInfo } from "src/sections/DashboardAssetInfo";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { motion } from "framer-motion";

type Type = {
    children: any;
};
export function DashboardLayout({ children }: Type) {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };
    return (
        <motion.div
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: "linear", duration: 2 }}
            className={styles.dashboardContainer}
        >
            <DashboardSidebar />
            <div className={styles.dashboardSection}>
                <DashboardHeader />
                <DashboardAssetInfo />
                {children}
            </div>
        </motion.div>
    );
}
