import React from "react";
import { PrimaryLoader } from "../PrimaryLoader";
import styles from "./style.module.scss";

type Props = {
    text: string;
    className?: any;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type: any;
    disabled?: boolean;
    isLoading?: boolean;
};

export function PrimaryButton(props: Props) {
    return (
        <>
            <button
                className={`${styles.primaryButton} ${styles[props.className]}`}
                onClick={props.onClick}
                type={props.type}
                disabled={props.disabled || props.isLoading}
            >
              { props.isLoading ? <PrimaryLoader/> : props.text}
            </button>
        </>
    );
}
