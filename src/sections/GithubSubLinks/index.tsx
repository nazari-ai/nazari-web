import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { DashboardSubLink } from "src/components/DashboardSubLink";
import { useStore } from "src/store";

export function GithubSubLinks() {
    const { selectedAsa } = useStore();
    const router = useRouter();

    const dashboardLinks = [
        {
            id: 1,
            path: `/${selectedAsa.assetId || "pass"}/github`,
            title: "Overview",
        },
        {
            id: 2,
            path: `/${selectedAsa.assetId || "pass"}/github/stars`,
            title: "Stars",
        },
        {
            id: 3,
            path: `/${selectedAsa.assetId || "pass"}/github/watches`,
            title: "Watches",
        },
        {
            id: 4,
            path: `/${selectedAsa.assetId || "pass"}/github/commits`,
            title: "Commits",
        },
        {
            id: 5,
            path: `/${selectedAsa.assetId || "pass"}/github/issues`,
            title: "Issues",
        },
        {
            id: 6,
            path: `/${selectedAsa.assetId || "pass"}/github/pull-requests`,
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
                            className={router.asPath === link.path ? "activeLink" : ""}
                        />
                    );
                })}
            </div>
        </div>
    );
}
