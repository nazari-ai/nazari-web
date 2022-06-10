import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { DashboardSubLink } from "src/components/DashboardSubLink";

export function GithubSubLinks() {
    const router = useRouter();
    const dashboardLinks = [
        {
            id: 1,
            path: "/dashboard/github",
            title: "Overview",
        },
        {
            id: 2,
            path: "/dashboard/github/stars",
            title: "Stars",
        },
        {
            id: 3,
            path: "/dashboard/github/watches",
            title: "Watches",
        },
        {
            id: 4,
            path: "/dashboard/github/commits",
            title: "Commits",
        },
        {
            id: 5,
            path: "/dashboard/github/issues",
            title: "Issues",
        },
        {
            id: 6,
            path: "/dashboard/github/pull-requests",
            title: "Pull Requests",
        },
    ];

    return (
        <div className={styles.linkSection}>
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
        </div>
    );
}
