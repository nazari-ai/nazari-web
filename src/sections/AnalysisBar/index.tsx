import React, { useEffect, useState } from "react";
import { SelectInput } from "../../components/SelectInput";
import { DateRangePicker } from "../../components/DateRangePicker";
import styles from "./style.module.scss";
import { AnalysisTypeType, dateRangeType } from "../../types";
import { useStore, defaultAnalysisType } from "../../store";
import { format, subDays, subMonths } from "date-fns";

type Props = {
    socialType: "github" | "twitter";
};

export function AnalysisBar(props: Props) {
    const { globalSetDateRange, globaldateRange, setAnalysisType, setTimeFrame, analysisType } = useStore((state) => ({
        globalSetDateRange: state.setDateRange,
        globaldateRange: state.dateRange,
        setAnalysisType: state.setAnalysisType,
        setTimeFrame: state.setTimeFrame,
        analysisType: state.analysisType,
    }));
    const analysisTypeOptions =
        props.socialType === "twitter"
            ? ["Select an option", "hourly", "weekdays"]
            : ["Select an option", "day", "weekdays"];

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
        let newAnalysisType: AnalysisTypeType = defaultAnalysisType;

        if (e.target.value === "hourly") {
            newAnalysisType = {
                weekdays: false,
                hour: true,
                day: false,
            };
        } else if (e.target.value === "day") {
            newAnalysisType = {
                hour: false,
                weekdays: false,
                day: true,
            };
        } else if (e.target.value === "weekdays") {
            newAnalysisType = {
                hour: false,
                weekdays: true,
                day: false,
            };
        }

        setAnalysisType(newAnalysisType);
    };

    const handleTimeFrame = (time: string) => {
        const currentDate = new Date();
        const endDate = format(currentDate, "yyyy-MM-dd");

        if (time === "1d") {
            const startDate = format(subDays(currentDate, 1), "yyyy-MM-dd");
            globalSetDateRange({ startDate, endDate });
        } else if (time === "1w") {
            const startDate = format(subDays(currentDate, 7), "yyyy-MM-dd");
            globalSetDateRange({ startDate, endDate });
        } else if (time === "1m") {
            const startDate = format(subMonths(currentDate, 1), "yyyy-MM-dd");
            globalSetDateRange({ startDate, endDate });
        }
    };

    useEffect(() => {
        window.onclick = () => setIsOpen(false);
    }, []);

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
                    handleTimeFrame={handleTimeFrame}
                />
            </div>
        </div>
    );
}
