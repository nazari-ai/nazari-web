import type { NextPage } from "next";
import "react-loading-skeleton/dist/skeleton.css";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { useRedditAnalyticsQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { useStore } from "src/store";
import styles from "styles/dashboard.module.scss";
import { useEffect, useState } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { useRouter } from "next/router";
import { SummaryLineChart } from "src/components/SummaryLineChart";

const Home: NextPage = () => {
    const { selectedAsa } = useStore();
    const { data } = useRedditAnalyticsQuery({
        asaID: selectedAsa.assetId,
        startDate: "2020-01-01",
    });

    const router = useRouter();
    const { postId } = router.query;

    const [commentSentimentAnalyticsInState, setCommentSentimentAnalyticsInState] = useState([] as any);
    const [commentScoreAnalyticsInState, setCommentScoreAnalyticsInState] = useState([] as any);

    let sentimentAnalytics = [] as Array<any>;
    let commentSentimentAnalytics = [] as Array<any>;
    let commentScoreAnalytics = [] as Array<any>;

    const getEmoji = (score: number): string => {
        if (score < 20) {
            return "😝";
        }
        if (score >= 20 && score < 40) {
            return "😎";
        }
        if (score >= 40 && score < 60) {
            return "😂";
        }
        if (score >= 60 && score < 80) {
            return "😇";
        }

        return "😍";
    };

    useEffect(() => {
        if (data) {
            data.redditAnalytics?.forEach((item) => {
                sentimentAnalytics.push({
                    data: item.sentimentScore,
                    name: getEmoji(Number(item.score)),
                });
            });
        }
    }, [data]);

    useEffect(() => {
        if (data) {
            data.redditAnalytics
                ?.find((item) => item.postId === postId)
                ?.more.forEach((comment) => {
                    commentSentimentAnalytics.push({
                        data: comment.commentSentimentScore,
                        name: comment.commentId,
                    });

                    commentScoreAnalytics.push({
                        data: comment.commentScore,
                        name: comment.commentId,
                    });
                });
        }

        setCommentSentimentAnalyticsInState(commentSentimentAnalytics);
        setCommentScoreAnalyticsInState(commentScoreAnalytics);
    }, [data]);

    return (
        <DashboardLayout>
            <DashboardAssetSocial />
            <div className={styles.dashboardContainer}>
                <div className={styles.sentimentChartContainer}>
                    {data?.redditAnalytics?.length ? (
                        <SentimentBarChart title="COMMENT SENTIMENT" data={commentSentimentAnalyticsInState} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
                <div className={styles.sentimentChartContainer}>
                    <SummaryLineChart title="Comment Upvote (Past 15 days)" data={commentSentimentAnalyticsInState} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
