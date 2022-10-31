import { format, formatDistance } from "date-fns";
import { useEffect, useState } from "react";
import { useStore } from "src/store";
import { TwitterAnalyticsQuery, useTwitterAnalyticsQuery } from "src/generated/graphql";
import { sortByWeekdayTwitter, sortByHour } from "src/utils/sortFunctions";

export const useTwitterHook = () => {
    const [list, setList] = useState([] as Array<any>);

    const { selectedAsa, dateRange, analysisType, setSelectedAsa } = useStore((state) => ({
        selectedAsa: state.selectedAsa,
        dateRange: state.dateRange,
        analysisType: state.analysisType,
        setSelectedAsa: state.setSelectedAsa,
    }));

    let formattedTime = formatDistance(new Date(dateRange?.endDate ?? new Date()), new Date(dateRange.startDate), {
        addSuffix: true,
    });

    const { data, refetch } = useTwitterAnalyticsQuery({
        asaID: selectedAsa.assetId,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate ? dateRange.endDate : format(new Date(), "yyyy-MM-dd"),
        hour: analysisType.hour,
        weekday: analysisType.weekdays,
    });

    let results: TwitterAnalyticsQuery["twitterAnalytics"]["results"];

    if (analysisType.weekdays) {
        results = sortByWeekdayTwitter(data?.twitterAnalytics?.results ?? []);
    } else {
        results = sortByHour(data?.twitterAnalytics?.results ?? []);
    }

    useEffect(() => {
        refetch();
    }, [dateRange, analysisType]);

    let likeAnalyticsList = [] as Array<any>;
    let retweetAnalyticsList = [] as Array<any>;
    let sentimentAnalyticsList = [] as Array<any>;

    const [analyticsList, setAnalyticsList] = useState<{
        likes: Array<any>;
        retweets: Array<any>;
        sentiments: Array<any>;
    }>({ likes: [], retweets: [], sentiments: [] });

    useEffect(() => {
        if (data) {
            results?.forEach((item) => {
                likeAnalyticsList.push({
                    data: item.likes,
                    name: analysisType.weekdays ? item.weekday : item.hour,
                });
                retweetAnalyticsList.push({
                    data: item.retweets,
                    name: analysisType.weekdays ? item.weekday : item.hour,
                });
                sentimentAnalyticsList.push({
                    data: item.sentiment,
                    name: analysisType.weekdays ? item.weekday : item.hour,
                });
            });
        }

        setAnalyticsList({
            likes: likeAnalyticsList,
            retweets: retweetAnalyticsList,
            sentiments: sentimentAnalyticsList,
        });
    }, [data]);

    return {
        data,
        results,
        list,
        setList,
        formattedTime,
        analyticsList,
    };
};
