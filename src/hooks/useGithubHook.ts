import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useStore } from "src/store";
import { GithubAnalyticsPerTime, useGithubAnalyticsPerTimeQuery } from "src/generated/graphql";
import { sortByWeekday, sortByDay } from "src/utils/sortFunctions";

export const useGithubHook = () => {
    const [list, setList] = useState([] as Array<any>);

    const { selectedAsa, dateRange, analysisType, setSelectedAsa } = useStore((state) => ({
        selectedAsa: state.selectedAsa,
        dateRange: state.dateRange,
        analysisType: state.analysisType,
        setSelectedAsa: state.setSelectedAsa,
    }));

    const { data, refetch } = useGithubAnalyticsPerTimeQuery({
        asaID: selectedAsa.assetId,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate ? dateRange.endDate : format(new Date(), "yyyy-MM-dd"),
        day: analysisType.day,
        weekDay: analysisType.weekdays,
    });

    let repo: GithubAnalyticsPerTime[];

    if (analysisType.weekdays) {
        repo = sortByWeekday(data?.githubAnalyticsPertime?.repo ?? []);
    } else {
        repo = sortByDay(data?.githubAnalyticsPertime?.repo ?? []);
    }

    useEffect(() => {
        refetch();
    }, [dateRange, analysisType]);

    return { repo, list, setList };
};
