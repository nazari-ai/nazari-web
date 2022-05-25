import { HomePageHeader } from "../sections/HomePageHeader";
import styles from "../../styles/Home.module.scss";
import { DashboardSidebar } from "src/sections/DashboardSidebar";
import { DashboardHeader } from "src/sections/DashboardHeader";
import { DashboardAssetInfo } from "src/sections/DashboardAssetInfo";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";

type Type = {
    children: any;
};
export function DashboardLayout({ children }: Type) {
    return (
        <div className={styles.dashboardContainer}>
            <DashboardSidebar />
            <div className={styles.dashboardSection}>
                <DashboardHeader />
                <DashboardAssetInfo />
                <DashboardAssetSocial />
                {children}
            </div>
        </div>
    );
}
