import React from "react";
import MemoSorryIcon from "../Icons/SorryIcon";
import styles from "./style.module.scss";

type Props = {
    text: string;
};

export function PrimaryEmptyState(props: Props) {
    return (
        <div className={styles.emptyContainer}>
            <MemoSorryIcon />
            <h1>{props.text}</h1>
        </div>
    );
}
