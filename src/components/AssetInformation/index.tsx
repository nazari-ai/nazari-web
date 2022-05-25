import Image from "next/image";
import Link from "next/link";
import React from "react";
import MemoVerifyIcon from "../Icons/VerifyIcon";
import styles from "./style.module.scss";

type Props = {
    assetName?: any;
    assetLogo?: boolean;
};

export function AssetInformation(props: Props) {
    return (
        <>
            <div className={`${styles.infoContainer}`}>
                <Image
                    className={styles.assetLogo}
                    src="/favicon.svg"
                    alt="Asset Logo"
                    width={35}
                    height={50}
                    priority={true}
                />
                <div className={styles.infoSection}>
                    <p className={styles.assetName}>{props.assetName || "Algorand"}</p>
                    <p className={styles.assetId}>ASA83282389</p>
                </div>
                <MemoVerifyIcon />
            </div>
        </>
    );
}
