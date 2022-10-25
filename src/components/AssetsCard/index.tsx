import React from "react";
import styles from "./style.module.scss";
import { AsaListQuery } from "src/generated/graphql";
import Link from "next/link";

interface Props {
    assets: AsaListQuery["asalist"]["result"][0];
}

/* eslint-disable @next/next/no-img-element */
function AssetsCard(props: Props) {
    const cardStatusStyle = `
        ${styles.card_status} ${!props.assets.available ? styles.unavailable : ""}
      `;

    return (
        <div className={styles.card}>
            <div className={styles.img_wrapper}>
                <img
                    className={styles.card_img}
                    src={props.assets.logo ? props.assets.logo : "/images/coin.png"}
                    alt={"asset-img"}
                />
            </div>

            <p className={styles.card_text}>{props.assets.name}</p>
            <Link href={`${props.assets.assetId}`} target={"_blank"}>
                <div className={cardStatusStyle}>Analyze Asa</div>
            </Link>
        </div>
    );
}

export default AssetsCard;
