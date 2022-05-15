import React from "react";
import styles from "./style.module.scss";

type Props = {
    text: string;
    className?: any;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export function PrimaryButton(props: Props) {
    return (
        <>
            <button className={`${styles.primaryButton} ${styles[props.className]}`} onClick={props.onClick}>
                {props.text}
            </button>
        </>
    );
}
