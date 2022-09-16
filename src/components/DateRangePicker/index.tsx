import React from "react";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "./style.module.scss";
import Image from "next/image";
import { dateRangeType } from "src/types";
import { useStore } from "../../store";
// @ts-ignore
import { DateRange } from "react-date-range";
import { TimeFrame } from "../TimeFrame";

type Props = {
    isOpen: boolean;
    handleClick: () => void;
    range: dateRangeType[];
    setRange: React.Dispatch<any>;
    onClose: () => void;
    handleTimeFrame: (time: string) => void;
};

export function DateRangePicker(props: Props) {
    const dateRange = useStore((state) => state.dateRange);

    return (
        <div className={styles.dateRangeContainer} onClick={(e) => e.stopPropagation()}>
            <TimeFrame handleDateRangeModal={props.handleClick} handleTimeFrame={props.handleTimeFrame} />
            {props.isOpen && (
                <div className={styles.dateRangeWrapper}>
                    <DateRange
                        editableDateInputs={true}
                        onChange={(item: any) => props.setRange([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={props.range}
                        rangeColors={["#000000", "#000000", "#000000"]}
                    />

                    <button className={styles.closeBtn} onClick={props.onClose}>
                        OK
                    </button>
                </div>
            )}
        </div>
    );
}
