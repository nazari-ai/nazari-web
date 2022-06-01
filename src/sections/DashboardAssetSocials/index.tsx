import Image from "next/image";
import Link from "next/link";
import MemoDiscordIcon from "src/components/Icons/DiscordIcon";
import MemoGithubIcon from "src/components/Icons/GithubIcon";
import MemoHomeIcon from "src/components/Icons/HomeIcon";
import MemoRedditIcon from "src/components/Icons/RedditIcon";
import MemoTelegramIcon from "src/components/Icons/TelegramIcon";
import MemoTwitterIcon from "src/components/Icons/TwitterIcon";

import styles from "./style.module.scss";

export function DashboardAssetSocial() {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.socialContainer}>
                <MemoHomeIcon fill="#626772" />
                <MemoTwitterIcon fill="#626772" />
                <MemoGithubIcon fill="#626772" />
                <MemoRedditIcon fill="#626772" />
                <MemoDiscordIcon fill="#626772" />
                <MemoTelegramIcon fill="#626772" />
            </div>
        </div>
    );
}
