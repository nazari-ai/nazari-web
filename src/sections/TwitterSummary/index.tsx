import { ThemeContext } from "@pages/_app";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SelectInput } from "src/components/SelectInput";
import { SummaryLineChart } from "src/components/SummaryLineChart";
import { useTwitterAnalyticsQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styles from "./style.module.scss";

export function TwitterSummary() {
    const { selectedAsa, dateRange } = useStore();
    const theme = useContext(ThemeContext);
    const { status, data, error, isFetching } = useTwitterAnalyticsQuery({
        asaID: selectedAsa.assetId,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
    });

    const [analysisTypeState, setAnalysisTypeState] = useState({
        likes: true,
        retweets: false,
        sentiments: false,
    });

    const [sentimentAnalyticsInState, setsentimentAnalyticsInState] = useState([] as any);
    const [retweetAnalyticsInState, setretweetAnalyticsInState] = useState([] as any);
    const [likeAnalyticsInState, setlikeAnalyticsInState] = useState([] as any);

    const sentimentAnalytics = [] as Array<any>;
    const retweetAnalytics = [] as Array<any>;
    const likeAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.twitterAnalytics?.results?.forEach((item) => {
                sentimentAnalytics.push({
                    data: item.sentiment,
                    name: new Date(item.postedAt)?.toLocaleString("en-US"),
                });
                retweetAnalytics.push({
                    data: item.retweets,
                    name: new Date(item.postedAt)?.toLocaleString("en-US"),
                });
                likeAnalytics.push({
                    data: item.likes,
                    name: new Date(item.postedAt)?.toLocaleString("en-US"),
                });
            });
        }

        setsentimentAnalyticsInState(sentimentAnalytics);
        setretweetAnalyticsInState(retweetAnalytics);
        setlikeAnalyticsInState(likeAnalytics);
    }, [data]);

    const selectOptions = ["likes", "retweets", "sentiments"];

    const handleChangeAnalysisType: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        let newAnalysisType;

        if (e.target.value === "likes") {
            newAnalysisType = {
                likes: true,
                retweets: false,
                sentiments: false,
            };
        } else if (e.target.value === "retweets") {
            newAnalysisType = {
                likes: false,
                retweets: true,
                sentiments: false,
            };
        } else {
            newAnalysisType = {
                likes: false,
                retweets: false,
                sentiments: true,
            };
        }

        setAnalysisTypeState(newAnalysisType);
    };

    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Twitter Summary</h1>

            <div className={styles.selectInput}>
                <label htmlFor="analysis_type">Analysis Type</label>
                <SelectInput options={selectOptions} handleChange={handleChangeAnalysisType} />
            </div>

            {isFetching ? (
                <Skeleton
                    count={3}
                    containerClassName={styles.chartContainer}
                    className={styles.detailContainer}
                    baseColor={theme?.theme ? "#333333" : "#ebebeb"}
                    highlightColor={theme?.theme ? "#626772" : "#f5f5f5"}
                    height="150px"
                    width="100%"
                />
            ) : data && data?.twitterAnalytics?.results?.length > 0 ? (
                <div className={styles.chartContainer}>
                    {analysisTypeState.likes && <SummaryLineChart title="Likes" data={likeAnalyticsInState} />}
                    {analysisTypeState.retweets && <SummaryLineChart title="Retweet" data={retweetAnalyticsInState} />}
                    {analysisTypeState.sentiments && (
                        <SummaryLineChart title="Sentiments" data={sentimentAnalyticsInState} />
                    )}
                </div>
            ) : (
                <PrimaryEmptyState text="No data for this section" />
            )}
        </div>
    );
}
