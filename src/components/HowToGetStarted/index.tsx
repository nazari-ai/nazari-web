import React from "react";

import styles from "./style.module.scss";

type Props = {
    title: string;
    text: string;
    icon?: JSX.Element;
    className?: any;
};

export function HowToGetStarted(props: Props) {
    return (
        <div className={styles.getStartedContainer}>
            <div className={styles.getStartedIcon}>{props.icon}</div>
            <div className={styles.getStartedInfo}>
                <h1 className={styles.getStartedTitle}>{props.title}</h1>
                <p className={styles.getStartedText}>{props.text}</p>
            </div>
        </div>
    );
}
