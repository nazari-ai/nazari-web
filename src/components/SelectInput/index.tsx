import React from "react";
import styles from "./style.module.scss";

type Props = {
    options: string[];
    handleChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export function SelectInput(props: Props) {
    return (
        <select name="SelectInput" className={styles.selectInput} onChange={props.handleChange}>
            {props.options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}
