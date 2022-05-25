import Image from "next/image";
import Link from "next/link";
import React from "react";
import MemoVerifyIcon from "../Icons/VerifyIcon";
import styles from "./style.module.scss";

type Props = {
    header: string;
    info: string;
};

export function AssetFinancial(props: Props) {
    return (
        <>
            <div className={`${styles.detailContainer}`}>
                <p className={styles.detailHeader}>{props.header}</p>
                <p className={styles.detail}>{props.info}</p>
            </div>
        </>
    );
}
