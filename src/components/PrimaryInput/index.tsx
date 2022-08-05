import React from "react";
import styles from "./style.module.scss";

type Props = {
    className?: any;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: React.HTMLInputTypeAttribute;
    disabled?: boolean;
    name?: string;
    id?: string;
    label?: string;
    error?: string;
};

export function PrimaryInput(props: Props) {
    return (
        <>
            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor={props.type}>
                    {props.label}
                </label>
                <input
                    className={`${styles.primaryInput} ${styles[props.className]}`}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    disabled={props.disabled}
                    name={props.name}
                    id={props.id}
                    onChange={props.onChange}
                />
                {props.error ? <p className={styles.errorMessage}>{props.error}</p> : null}
            </div>
        </>
    );
}
