import styles from "./style.module.scss";

export interface CustomTooltipType {
    payload?: any;
    label?: any;
    active?: boolean;
}

export function CustomTooltip({ payload, label, active }: CustomTooltipType) {
    if (active) {
        return (
            <div className={styles.customTooltip}>
                <p className={styles.label}>{label}</p>
                <p className={styles.intro}>{payload[0].value}</p>
            </div>
        );
    }

    return null;
}
