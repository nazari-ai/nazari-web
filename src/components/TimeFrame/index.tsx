import React from "react";
import { useStore } from "src/store";
import styles from "./style.module.scss";

type Props = {
    handleDateRangeModal: () => void;
    handleTimeFrame: (time: string) => void;
};

export function TimeFrame(props: Props) {
    const dateRange = useStore((state) => state.dateRange);

    return (
        <div className={styles.timeFrameContainer}>
            <button className={styles.timeBtn} onClick={props.handleDateRangeModal}>
                {dateRange.endDate ? `${dateRange.startDate} ~ ${dateRange.endDate}` : "Time"}
            </button>
            <button onClick={() => props.handleTimeFrame("1d")}>1D</button>
            <button onClick={() => props.handleTimeFrame("1w")}>1W</button>
            <button onClick={() => props.handleTimeFrame("1m")}>1M</button>
        </div>
    );
}
