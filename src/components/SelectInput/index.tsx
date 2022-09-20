import React from "react";
import styles from "./style.module.scss";
import { useStore } from "src/store";
import { AnalysisTypeType } from "src/types";

type Props = {
    options: string[];
    handleChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export function SelectInput(props: Props) {
    const { analysisType } = useStore();

    return (
        <select name="SelectInput" className={styles.selectInput} onChange={props.handleChange}>
            {props.options.map((option, index) => (
                <option key={index} value={option} selected={analysisType[option as keyof AnalysisTypeType]}>
                    {option}
                </option>
            ))}
        </select>
    );
}
