import { DashboardLink } from "src/components/DashboardLink";
import MemoGithubIcon from "src/components/Icons/GithubIcon";
import MemoHomeIcon from "src/components/Icons/HomeIcon";
import MemoRedditIcon from "src/components/Icons/RedditIcon";
import MemoSettingIcon from "src/components/Icons/SettingIcon";
import MemoTwitterIcon from "src/components/Icons/TwitterIcon";
import { PrimaryLogo } from "src/components/PrimaryLogo";
import styles from "./style.module.scss";
import { Router, useRouter } from "next/router";
import { PrimaryShortLogo } from "src/components/PrimaryShortLogo";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useStore } from "src/store";
import { useContext } from "react";
import { ThemeContext } from "@pages/_app";

export function DashboardSidebar() {
    const theme = useContext(ThemeContext);

    const router = useRouter();
    const { selectedAsa } = useStore();
    const [width, setWidth] = useState(1024);

    const fill = theme?.theme ? "#FFFFFF" : "#000000";

    const dashboardLinks = [
        {
            id: 2,
            path: `/${selectedAsa.assetId || "null"}/twitter`,
            icon: (
                <MemoTwitterIcon
                    fill={router.asPath.includes(`/${selectedAsa.assetId || "null"}/twitter`) ? fill : ""}
                />
            ),
            title: `Twitter`,
        },
        {
            id: 3,
            path: `/${selectedAsa.assetId || "null"}/reddit`,
            icon: (
                <MemoRedditIcon fill={router.asPath.includes(`/${selectedAsa.assetId || "null"}/reddit`) ? fill : ""} />
            ),
            title: `Reddit`,
        },
        {
            id: 4,
            path: `/${selectedAsa.assetId || "null"}/github`,
            icon: (
                <MemoGithubIcon fill={router.asPath.includes(`/${selectedAsa.assetId || "null"}/github`) ? fill : ""} />
            ),
            title: `Github`,
        },
    ];

    useEffect(() => {
        setWidth(window.innerWidth);
        // Client-side-only code
    });
    return (
        <div className={styles.sidebarContainer}>
            <Link href="/">
                <div className={styles.logoContainer}>{width > 768 ? <PrimaryLogo /> : <PrimaryShortLogo />}</div>
            </Link>

            <div className={styles.linkContainer}>
                <div className={styles.homeLinkContainer}>
                    <DashboardLink
                        href={`/${selectedAsa.assetId || "null"}`}
                        title="Home"
                        icon={<MemoHomeIcon fill={router.pathname === "/[asaId]" ? fill : ""} />}
                        className={router.pathname === "/[asaId]" ? "activeLink" : ""}
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
                                    className={router.asPath.includes(link.path) ? "activeLink" : ""}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.settingsContainer}>
                <DashboardLink
                    href="/dashboard/settings"
                    title="Settings"
                    icon={<MemoSettingIcon fill={router.pathname === "/settings" ? fill : ""} />}
                    className="disabledLink"
                />
            </div>
        </div>
    );
}
