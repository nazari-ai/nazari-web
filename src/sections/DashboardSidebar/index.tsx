import { DashboardLink } from "src/components/DashboardLink";
import MemoGithubIcon from "src/components/Icons/GithubIcon";
import MemoHomeIcon from "src/components/Icons/HomeIcon";
import MemoRedditIcon from "src/components/Icons/RedditIcon";
import MemoSettingIcon from "src/components/Icons/SettingIcon";
import MemoTwitterIcon from "src/components/Icons/TwitterIcon";
import { PrimaryLogo } from "src/components/PrimaryLogo";
import styles from "./style.module.scss";
import { useRouter } from "next/router";

export function DashboardSidebar() {
    const router = useRouter();
    const dashboardLinks = [
        {
            id: 1,
            path: "/dashboard",
            icon: <MemoHomeIcon />,
            title: "Home",
        },
        {
            id: 2,
            path: "/dashboard/twitter",
            icon: <MemoTwitterIcon />,
            title: "Twitter",
        },
        {
            id: 3,
            path: "/dashboard/reddit",
            icon: <MemoRedditIcon />,
            title: "Reddit",
        },
        {
            id: 4,
            path: "/dashboard/github",
            icon: <MemoGithubIcon />,
            title: "Github",
        },
    ];

    console.log(router.pathname);
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.logoContainer}>
                <PrimaryLogo />
            </div>

            <div className={styles.linkContainer}>
                {dashboardLinks.map((link) => {
                    console.log(link.icon);
                    return (
                        <DashboardLink
                            key={link.id}
                            href={link.path}
                            icon={link.icon}
                            title={link.title}
                            className={router.pathname === link.path ? "activeLink" : ""}
                        />
                    );
                })}
            </div>
            <div className={styles.settingsContainer}>
                <DashboardLink href="/dashboard/settings" title="Settings" icon={<MemoSettingIcon />} disabled={true} />
            </div>
        </div>
    );
}
