import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useStore } from "src/store";
import shallow from "zustand/shallow";
import { useTwitterAnalyticsQuery, useGithubAnalyticsPerTimeQuery } from "src/generated/graphql";

interface Props {
    asaID: string;
    startDate: string;
    endDate: string | null;
    day: boolean;
    weekday: boolean;
}

type socialTypeType = "github" | "twitter";

export const useSocialAnalyticsHook = (socialType: socialTypeType) => {
    const [list, setList] = useState([] as Array<any>);

    const { selectedAsa, dateRange, analysisType, setSelectedAsa } = useStore((state) => ({
        selectedAsa: state.selectedAsa,
        dateRange: state.dateRange,
        analysisType: state.analysisType,
        setSelectedAsa: state.setSelectedAsa,
    }));

    let refetch: () => void;
    let data: any;

    if (socialType === "github") {
        const { data: rqData, refetch: rqRefetch } = useGithubAnalyticsPerTimeQuery({
            asaID: selectedAsa.assetId,
            startDate: dateRange.startDate,
            endDate: dateRange.endDate ? dateRange.endDate : format(new Date(), "yyyy-MM-dd"),
            day: analysisType.day,
            weekDay: analysisType.weekdays,
        });

        data = rqData;
        refetch = rqRefetch;
    } else {
        const { data: rqData, refetch: rqRefetch } = useTwitterAnalyticsQuery({
            asaID: selectedAsa.assetId,
            startDate: dateRange.startDate,
            endDate: dateRange.endDate ? dateRange.endDate : format(new Date(), "yyyy-MM-dd"),
            hour: analysisType.hour,
            weekday: analysisType.weekdays,
        });

        data = rqData;
        refetch = rqRefetch;
    }

    useEffect(() => {
        refetch();
    }, [dateRange, analysisType]);

    return { data, list, setList };
};
