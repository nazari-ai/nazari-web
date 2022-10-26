import React from "react";
import styles from "./style.module.scss";
import { AsaListQuery } from "src/generated/graphql";
import Link from "next/link";
import Image from "next/image";

interface Props {
    assets: AsaListQuery["asalist"]["result"][0];
}

function AssetsCard(props: Props) {
    const cardStatusStyle = `
        ${styles.card_status} ${!props.assets.available ? styles.unavailable : ""}
      `;

    return (
        <div className={styles.card}>
            <div className={styles.img_wrapper}>
                <Image
                    className={styles.card_img}
                    src={props.assets.logo ? props.assets.logo : "/images/coin.png"}
                    alt={"asset-img"}
                    height={50}
                    width={50}
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
