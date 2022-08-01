import React from "react";
import styles from "./style.module.scss";

type Props = {
    header: string;
    info?: string | null | undefined;
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
