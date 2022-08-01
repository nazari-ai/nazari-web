import Image from "next/image";
import React from "react";
import { useAsaDataQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import MemoVerifyIcon from "../Icons/VerifyIcon";
import styles from "./style.module.scss";

type Props = {
    assetName?: string;
    assetLogo?: string;
};

export function AssetInformation(props: Props) {
    const { selectedAsa } = useStore();
    const { data, isFetching, error, status } = useAsaDataQuery({ asaID: selectedAsa.assetId });
    return (
        <div className={`${styles.infoContainer}`}>
            {data?.asaData?.result[0]?.logo ? (
                <Image
                    className={styles.assetLogo}
                    src={data?.asaData?.result[0]?.logo}
                    alt="Asset Logo"
                    width={40}
                    height={40}
                    priority={true}
                />
            ) : (
                <div className={styles.assetLogoPlaceholder}>
                    <p>{selectedAsa.name.substring(0, 2).toUpperCase()}</p>
                </div>
            )}
            <div className={styles.infoSection}>
                <p className={styles.assetName}>{data?.asaData?.result[0]?.name}</p>
                <p className={styles.assetId}>{data?.asaData?.result[0]?.assetId}</p>
            </div>
            {data?.asaData?.result[0]?.reputation_Pera === "verified" ? <MemoVerifyIcon /> : ""}
        </div>
    );
}
