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
    const { setDateRange, dateRange, setAnalysisType, setTimeFrame, analysisType } = useStore((state) => ({
        setDateRange: state.setDateRange,
        dateRange: state.dateRange,
        setAnalysisType: state.setAnalysisType,
        setTimeFrame: state.setTimeFrame,
        analysisType: state.analysisType,
    }));
    const analysisTypeOptions =
        props.socialType === "twitter"
            ? ["Select an option", "hour", "weekdays"]
            : ["Select an option", "day", "weekdays", "byrepo"];

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
                activeTimeFrame: null,
            };
        });

        setDateRange(newRange[0]);
        setIsOpen(false);
    };

    const handleDateRangeState = () => {
        setIsOpen(!isOpen);
    };

    const handleAnalysisTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        let newAnalysisType: AnalysisTypeType = defaultAnalysisType;

        if (e.target.value === "hour") {
            newAnalysisType = {
                weekdays: false,
                hour: true,
                day: true,
                byrepo: false,
            };
        } else if (e.target.value === "day") {
            newAnalysisType = {
                hour: true,
                weekdays: false,
                day: true,
                byrepo: false,
            };
        } else if (e.target.value === "weekdays") {
            newAnalysisType = {
                hour: false,
                weekdays: true,
                day: false,
                byrepo: false,
            };
        } else if (e.target.value === "byrepo") {
            newAnalysisType = {
                hour: true,
                weekdays: false,
                day: false,
                byrepo: true,
            };
        }

        setAnalysisType(newAnalysisType);
    };

    const handleTimeFrame = (time: string) => {
        const currentDate = new Date();
        const endDate = format(currentDate, "yyyy-MM-dd");

        if (time === "1d") {
            const startDate = format(subDays(currentDate, 1), "yyyy-MM-dd");
            setDateRange({ startDate, endDate, activeTimeFrame: "1d" });
        } else if (time === "1w") {
            const startDate = format(subDays(currentDate, 7), "yyyy-MM-dd");
            setDateRange({ startDate, endDate, activeTimeFrame: "1w" });
        } else if (time === "1m") {
            const startDate = format(subMonths(currentDate, 1), "yyyy-MM-dd");
            setDateRange({ startDate, endDate, activeTimeFrame: "1m" });
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
