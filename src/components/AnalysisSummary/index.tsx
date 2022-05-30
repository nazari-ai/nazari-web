import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";

type Props = {
    header: string;
    info: string;
};

export function AnalysisSummary(props: Props) {
    return (
        <>
            <div className={`${styles.detailContainer}`}>
                <p className={styles.detailHeader}>{props.header}</p>
                <div>
                    <p className={styles.detail}>{props.info}</p>
                </div>
            </div>
        </>
    );
}
