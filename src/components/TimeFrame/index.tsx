import React from "react";
import styles from "./style.module.scss";

type Props = {};

export function TimeFrame({}: Props) {
    return (
        <div className={styles.timeFrameContainer}>
            <button className={styles.timeBtn}>Time</button>
            <button>24H</button>
            <button>1D</button>
            <button>1W</button>
            <button>1M</button>
        </div>
    );
}
