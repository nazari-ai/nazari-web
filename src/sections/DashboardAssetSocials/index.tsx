import Image from "next/image";
import Link from "next/link";
import MemoDiscordIcon from "src/components/Icons/DiscordIcon";
import MemoGithubIcon from "src/components/Icons/GithubIcon";
import MemoHomeIcon from "src/components/Icons/HomeIcon";
import MemoRedditIcon from "src/components/Icons/RedditIcon";
import MemoTelegramIcon from "src/components/Icons/TelegramIcon";
import MemoTwitterIcon from "src/components/Icons/TwitterIcon";
import { useAsaDataQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styles from "./style.module.scss";

export function DashboardAssetSocial() {
    const { selectedAsa } = useStore();
    const { data, isFetching, error, status } = useAsaDataQuery({ asaID: selectedAsa.assetId });
    return (
        <div className={styles.infoContainer}>
            <div className={styles.socialContainer}>
                {data?.asaData?.result[0]?.URL ? (
                    <a href={data?.asaData?.result[0]?.URL || ""} target="_blank">
                        <MemoHomeIcon fill="#626772" />
                    </a>
                ) : (
                    ""
                )}
                {data?.asaData?.result[0]?.twitter ? (
                    <a href={data?.asaData?.result[0]?.twitter || ""} target="_blank">
                        {" "}
                        <MemoTwitterIcon fill="#626772" />
                    </a>
                ) : (
                    ""
                )}
                {data?.asaData?.result[0]?.github ? (
                    <a href={data?.asaData?.result[0]?.github || ""} target="_blank">
                        {" "}
                        <MemoGithubIcon fill="#626772" />
                    </a>
                ) : (
                    ""
                )}
                {data?.asaData?.result[0]?.reddit ? (
                    <a href={data?.asaData?.result[0]?.reddit || ""} target="_blank">
                        {" "}
                        <MemoRedditIcon fill="#626772" />
                    </a>
                ) : (
                    ""
                )}
                {data?.asaData?.result[0]?.discord ? (
                    <a href={data?.asaData?.result[0]?.discord || ""} target="_blank">
                        {" "}
                        <MemoDiscordIcon fill="#626772" />
                    </a>
                ) : (
                    ""
                )}
                {data?.asaData?.result[0]?.telegram ? (
                    <a href={data?.asaData?.result[0]?.telegram || ""} target="_blank">
                        {" "}
                        <MemoTelegramIcon fill="#626772" />
                    </a>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
