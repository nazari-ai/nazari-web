import React, { useState } from "react";
import { SelectInput } from "../../components/SelectInput";
import { DateRangePicker } from "../../components/DateRangePicker";
import styles from "./style.module.scss";
import { dateRangeType } from "../../types";
import { useStore } from "../../store";
import { format } from "date-fns";

type Props = {};

export function AnalysisBar({}: Props) {
    const { globalSetDateRange, globaldateRange, setAnalysisType } = useStore((state) => ({
        globalSetDateRange: state.setDateRange,
        globaldateRange: state.dateRange,
        setAnalysisType: state.setAnalysisType,
    }));
    const analysisTypeOptions = ["Select an option", "hourly", "weekdays"];
    const [isOpen, setIsOpen] = useState(false);

    const [range, setRange] = useState<dateRangeType[]>([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection",
        },
    ]);

    const handleDateRangeSubmit = () => {
        const newRange = range.map((r) => {
            return {
                startDate: format(r.startDate, "yyyy-MM-dd"),
                endDate: r.endDate ? format(r.endDate, "yyyy-MM-dd") : null,
            };
        });

        globalSetDateRange(newRange[0]);
        setIsOpen(false);
    };

    const handleDateRangeState = () => {
        setIsOpen(!isOpen);
    };

    const handleAnalysisTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        let newAnalysisType;

        if (e.target.value === "1") {
            newAnalysisType = {
                weekdays: false,
                hour: true,
            };
        } else {
            newAnalysisType = {
                hour: false,
                weekdays: true,
            };
        }

        setAnalysisType(newAnalysisType);
    };

    return (
        <div className={styles.analysisCointainer}>
            <div className={styles.selectWrapper}>
                <label htmlFor="analysis-type">Analysis Type</label>
                <SelectInput options={analysisTypeOptions} handleChange={handleAnalysisTypeChange} />
            </div>

            <div className={styles.selectWrapper}>
                <label htmlFor="analysis-range">Analysis Range</label>
                <DateRangePicker
                    isOpen={isOpen}
                    handleClick={handleDateRangeState}
                    range={range}
                    setRange={setRange}
                    onClose={handleDateRangeSubmit}
                />
            </div>
        </div>
    );
}
