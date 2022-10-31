import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { TwitterAnalyticsQuery, useTwitterAnalyticsQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";
import { removeDuplicate, getMostDoneInWeekDay } from "src/utils";
import { sortByWeekdayTwitter } from "src/utils/sortFunctions";
import { ThemeContext } from "@pages/_app";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { useTwitterHook } from "src/hooks/useTwitterHook";
import { AnalysisBar } from "src/sections/AnalysisBar";

const Home: NextPage = () => {
    const { selectedAsa } = useStore();
    const { results, formattedTime, analyticsList } = useTwitterHook();

    const theme = useContext(ThemeContext);
    const { status, data, error, isFetching } = useTwitterAnalyticsQuery({
        asaID: selectedAsa.assetId,
        startDate: "2020-01-01",
        weekday: true,
    });

    const sortedData: TwitterAnalyticsQuery["twitterAnalytics"]["results"] = sortByWeekdayTwitter(
        data?.twitterAnalytics.results ?? ["hello"],
    );

    const mostRetweetssWeekday = getMostDoneInWeekDay(sortedData, "retweets")?.weekday ?? "";
    const mostLikesWeekday = getMostDoneInWeekDay(sortedData, "likes")?.weekday ?? "";

    const [retweetAnalyticsInState, setretweetAnalyticsInState] = useState([] as any);
    const [likeAnalyticsInState, setlikeAnalyticsInState] = useState([] as any);

    let retweetAnalytics = [] as Array<any>;
    let likeAnalytics = [] as Array<any>;

    const [highestRetweetDay, setHighestRetweetDay] = useState({} as any);
    const [highestLikeDay, setHighestLikeDay] = useState({} as any);

    useEffect(() => {
        if (data) {
            sortedData.forEach((item) => {
                retweetAnalytics.push({
                    data: item.retweets,
                    name: item.weekday,
                });
                likeAnalytics.push({
                    data: item.likes,
                    name: item.weekday,
                });
            });

            setretweetAnalyticsInState(removeDuplicate(retweetAnalytics));
            setlikeAnalyticsInState(removeDuplicate(likeAnalytics));
        }
    }, [data]);

    return (
        <DashboardLayout>
            <DashboardAssetSocial />
            <div className={styles.dashboardContainer}>
                <AnalysisBar socialType={"twitter"} />
                {/* <TwitterSubLinks /> */}
                <TwitterAnalysisSummary />

                {isFetching ? (
                    <Skeleton
                        count={2}
                        containerClassName={styles.summaryBarChartContainer}
                        className={styles.detailContainer}
                        baseColor={theme?.theme ? "#333333" : "#ebebeb"}
                        highlightColor={theme?.theme ? "#626772" : "#f5f5f5"}
                        height="200px"
                        width="100%"
                    />
                ) : (
                    <div className={styles.summaryBarChartContainer}>
                        {data?.twitterAnalytics?.results?.length ? (
                            <SummaryBarChart
                                header="RETWEETS ARE MOSTLY MADE ON"
                                title={mostRetweetssWeekday}
                                data={retweetAnalyticsInState}
                            />
                        ) : (
                            <PrimaryEmptyState text="No data for this section" />
                        )}
                        {data?.twitterAnalytics?.results?.length ? (
                            <SummaryBarChart
                                header="LIKES ARE MOSTLY GOTTEN ON"
                                title={mostLikesWeekday}
                                data={likeAnalyticsInState}
                            />
                        ) : (
                            <PrimaryEmptyState text="No data for this section" />
                        )}
                    </div>
                )}

                <div className={styles.combinedChartContainer}>
                    {results?.length > 0 ? (
                        <SentimentBarChart title={`Likes (${formattedTime})`} data={analyticsList.likes} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}

                    {results?.length > 0 ? (
                        <SentimentBarChart title={`Retweets (${formattedTime})`} data={analyticsList.retweets} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}

                    {results?.length > 0 ? (
                        <SentimentBarChart title={`Sentiments (${formattedTime})`} data={analyticsList.sentiments} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
