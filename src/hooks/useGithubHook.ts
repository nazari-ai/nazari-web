import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useStore } from "src/store";
import { formatDistance } from "date-fns";
import { removeDuplicate } from "src/utils";

import { useGithubAnalyticsPerTimeQuery, useGithubAnalyticsPerRepoQuery } from "src/generated/graphql";
import { sortByWeekday, sortByDay } from "src/utils/sortFunctions";

export const useGithubHook = () => {
    let [list, setList] = useState([] as Array<any>);

    const { selectedAsa, dateRange, analysisType, setSelectedAsa } = useStore((state) => ({
        selectedAsa: state.selectedAsa,
        dateRange: state.dateRange,
        analysisType: state.analysisType,
        setSelectedAsa: state.setSelectedAsa,
    }));

    let formattedTime = formatDistance(new Date(dateRange?.endDate ?? new Date()), new Date(dateRange.startDate), {
        addSuffix: true,
    });

    const { data: dataPerRepo } = useGithubAnalyticsPerRepoQuery({
        asaID: selectedAsa.assetId,
        sortBy: "commits",
    });

    const { data, refetch } = useGithubAnalyticsPerTimeQuery({
        asaID: selectedAsa.assetId,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate ? dateRange.endDate : format(new Date(), "yyyy-MM-dd"),
        day: analysisType.day,
        weekDay: analysisType.weekdays,
    });

    let repo: any[];

    if (analysisType.weekdays) {
        repo = sortByWeekday(data?.githubAnalyticsPertime?.repo ?? []);
    } else if (analysisType.byrepo) {
        repo = dataPerRepo?.githubAnalyticsPerepo.repo ?? [];
    } else {
        repo = sortByDay(data?.githubAnalyticsPertime?.repo ?? []);
    }

    useEffect(() => {
        refetch();
    }, [dateRange, analysisType]);

    list = removeDuplicate(list);

    return { data, repo, list, setList, formattedTime };
};
