import { ThemeContext } from "@pages/_app";
import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SelectInput } from "src/components/SelectInput";
import { SummaryLineChart } from "src/components/SummaryLineChart";
import { useGithubAnalyticsPerTimeQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styles from "./style.module.scss";
import TSStyles from "src/sections/TwitterSummary/style.module.scss";

export function GithubSummary() {
    const { selectedAsa, dateRange } = useStore();
    const theme = useContext(ThemeContext);
    const { status, data, error, isFetching } = useGithubAnalyticsPerTimeQuery({
        asaID: selectedAsa.assetId,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
    });

    const [analysisTypeState, setAnalysisTypeState] = useState({
        commits: true,
        stars: false,
        watches: false,
    });

    const [commitAnalyticsInState, setcommitAnalyticsInState] = useState([] as any);
    const [starAnalyticsInState, setstarAnalyticsInState] = useState([] as any);
    const [watchAnalyticsInState, setwatchAnalyticsInState] = useState([] as any);

    const commitAnalytics = [] as Array<any>;
    const starAnalytics = [] as Array<any>;
    const watchAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.githubAnalyticsPertime?.repo?.forEach((item) => {
                commitAnalytics.push({
                    data: item.commits,
                    name: new Date(item.lastPushDate)?.toLocaleString("en-US"),
                });
                starAnalytics.push({
                    data: item.stars,
                    name: new Date(item.lastPushDate)?.toLocaleString("en-US"),
                });
                watchAnalytics.push({
                    data: item.watches,
                    name: new Date(item.lastPushDate)?.toLocaleString("en-US"),
                });
            });
        }

        setcommitAnalyticsInState(commitAnalytics);
        setstarAnalyticsInState(starAnalytics);
        setwatchAnalyticsInState(watchAnalytics);
    }, [data]);

    const selectOptions = ["commits", "stars", "watches"];

    const handleChangeAnalysisType: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        let newAnalysisType;

        if (e.target.value === "commits") {
            newAnalysisType = {
                commits: true,
                stars: false,
                watches: false,
            };
        } else if (e.target.value === "stars") {
            newAnalysisType = {
                commits: false,
                stars: true,
                watches: false,
            };
        } else {
            newAnalysisType = {
                commits: false,
                stars: false,
                watches: true,
            };
        }

        setAnalysisTypeState(newAnalysisType);
    };

    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Github Summary</h1>

            <div className={TSStyles.selectInput}>
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
            ) : data && data?.githubAnalyticsPertime.repo.length > 0 ? (
                <div className={styles.chartContainer}>
                    {analysisTypeState.commits && <SummaryLineChart title="Commits" data={commitAnalyticsInState} />}
                    {analysisTypeState.stars && <SummaryLineChart title="Stars" data={starAnalyticsInState} />}
                    {analysisTypeState.watches && <SummaryLineChart title="Watches" data={watchAnalyticsInState} />}
                </div>
            ) : (
                <PrimaryEmptyState text="No data for this section" />
            )}
        </div>
    );
}
