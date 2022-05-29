import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { DashboardSubLink } from "src/components/DashboardSubLink";

export function TwitterSubLinks() {
    const router = useRouter();
    const dashboardLinks = [
        {
            id: 1,
            path: "/dashboard/twitter",
            title: "Overview",
        },
        {
            id: 2,
            path: "/dashboard/twitter/likes",
            title: "Likes",
        },
        {
            id: 3,
            path: "/dashboard/twitter/retweets",
            title: "Retweets",
        },
        {
            id: 4,
            path: "/dashboard/twitter/replies",
            title: "Replies",
        },
        {
            id: 4,
            path: "/dashboard/twitter/sentiments",
            title: "Sentiments",
        },
    ];

    return (
        <div className={styles.linkContainer}>
            {dashboardLinks.map((link) => {
                return (
                    <DashboardSubLink
                        key={link.id}
                        href={link.path}
                        title={link.title}
                        className={router.pathname === link.path ? "activeLink" : ""}
                    />
                );
            })}
        </div>
    );
}
