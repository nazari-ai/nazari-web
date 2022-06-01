import { DashboardLink } from "src/components/DashboardLink";
import MemoGithubIcon from "src/components/Icons/GithubIcon";
import MemoHomeIcon from "src/components/Icons/HomeIcon";
import MemoRedditIcon from "src/components/Icons/RedditIcon";
import MemoSettingIcon from "src/components/Icons/SettingIcon";
import MemoTwitterIcon from "src/components/Icons/TwitterIcon";
import { PrimaryLogo } from "src/components/PrimaryLogo";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { PrimaryShortLogo } from "src/components/PrimaryShortLogo";
import { useEffect, useState } from "react";

export function DashboardSidebar() {
    const router = useRouter();
    const [width, setWidth] = useState(1024);
    const dashboardLinks = [
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

    useEffect(() => {
        setWidth(window.innerWidth);
        // Client-side-only code
    });
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.logoContainer}>{width > 768 ? <PrimaryLogo /> : <PrimaryShortLogo />}</div>

            <div className={styles.linkContainer}>
                <div className={styles.homeLinkContainer}>
                    <DashboardLink
                        href="/dashboard"
                        title="Home"
                        icon={<MemoHomeIcon />}
                        className={router.pathname === "/dashboard" ? "activeLink" : ""}
                    />
                </div>

                <div className={styles.channelLinkContainer}>
                    <p>Channels</p>
                    <div className={styles.channelLinks}>
                        {dashboardLinks.map((link) => {
                            return (
                                <DashboardLink
                                    key={link.id}
                                    href={link.path}
                                    icon={link.icon}
                                    title={link.title}
                                    className={router.pathname.includes(link.path) ? "activeLink" : ""}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.settingsContainer}>
                <DashboardLink href="/dashboard/settings" title="Settings" icon={<MemoSettingIcon />} disabled={true} />
            </div>
        </div>
    );
}
