import { HomePageHeader } from "../sections/HomePageHeader";
import styles from "../../styles/Home.module.scss";
import { DashboardSidebar } from "src/sections/DashboardSidebar";

type Type = {
    children: any;
};
export function DashboardLayout({ children }: Type) {
    return (
        <div>
            <DashboardSidebar />
            {children}
        </div>
    );
}
