import React from "react";
import styles from "./style.module.scss";

type Props = {
    children: any;
};

export default function AssetsWrapper(props: Props) {
    return <section className={styles.assets}>{props.children}</section>;
}
