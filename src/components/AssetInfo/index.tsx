import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useStore } from "src/store";
import { asset } from "src/types";

import styles from "./style.module.scss";

type Props = {
    asset: asset;
    className: string;
    handleClick: (asa: asset) => void;
};

export function AssetInfo(props: Props) {
    const { setPickedAsa } = useStore();
    return (
        <div
            className={`${styles.asset} ${styles[props.className]}`}
            onClick={() => (props.asset.available ? props.handleClick(props.asset) : null)}
        >
            <div className={styles.assetInfo}>
                <p className={styles.assetName}>{props.asset.name}</p>
                <div className={styles.assetDetails}>
                    <p className={styles.assetUnitName}>{props.asset.unitname1}</p>
                    <p className={styles.assetId}>{props.asset.assetId}</p>
                </div>
                {!props.asset.available && <p className={styles.unavailableSign}>Unavailable</p>}
            </div>
            <div className={styles.assetLogo}>
                {props?.asset?.logo ? (
                    <Image src={props.asset?.logo} alt="Asset Logo" height={40} width={40} />
                ) : (
                    <div className={styles.assetLogoPlaceholder}>
                        <p>{props.asset.name.substring(1, 3).toUpperCase()}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
