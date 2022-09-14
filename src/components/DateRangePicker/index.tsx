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

type Props = {
    isOpen: boolean;
    handleClick: () => void;
    range: dateRangeType[];
    setRange: React.Dispatch<any>;
    onClose: () => void;
};

export function DateRangePicker(props: Props) {
    const dateRange = useStore((state) => state.dateRange);

    return (
        <div className={styles.dateRangeContainer}>
            <div className={styles.selectBox} onClick={props.handleClick}>
                <p>{dateRange.endDate ? `${dateRange.startDate} ~ ${dateRange.endDate}` : "Select a range"}</p>
                <Image src={"/images/select_icon.svg"} alt="Drop logo" width={10} height={6} priority={true} />
            </div>
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
