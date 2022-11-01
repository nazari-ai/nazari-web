import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { DashboardSubLink } from "src/components/DashboardSubLink";
import { useStore } from "src/store";

export function TwitterSubLinks() {
    const router = useRouter();
    const { selectedAsa } = useStore();
    const dashboardLinks = [
        {
            id: 1,
            path: `/${selectedAsa.assetId || "null"}/twitter`,
            title: `Overview`,
        },
        {
            id: 2,
            path: `/${selectedAsa.assetId || "null"}/twitter/analytics`,
            title: `Analytics`,
        },
        // {
        //     id: 3,
        //     path: `/${selectedAsa.assetId || "null"}/twitter/retweets`,
        //     title: `Retweets`,
        // },
        // {
        //     id: 4,
        //     path: `/${selectedAsa.assetId || "null"}/twitter/sentiments`,
        //     title: `Sentiments`,
        // },
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
