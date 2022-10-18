import { AnalysisSummary } from "src/components/AnalysisSummary";
import { useGithubOverviewQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styles from "./style.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";
import { ThemeContext } from "@pages/_app";
import { useContext } from "react";

export function GithubAnalysisSummary() {
    const { selectedAsa } = useStore();
    const theme = useContext(ThemeContext);
    const { status, data, error, isFetching } = useGithubOverviewQuery({ asaID: selectedAsa.assetId });
    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Summary</h1>
            {isFetching ? (
                <Skeleton
                    count={6}
                    containerClassName={styles.chartContainer}
                    baseColor={theme?.theme ? "#333333" : "#ebebeb"}
                    highlightColor={theme?.theme ? "#626772" : "#f5f5f5"}
                    height="50px"
                />
            ) : (
                <div>
                    {data?.githubOverview ? (
                        <div className={styles.chartContainer}>
                            <AnalysisSummary header="Stars" info={data?.githubOverview?.stars} />
                            <AnalysisSummary header="Watches" info={data?.githubOverview?.watches} />
                            <AnalysisSummary header="Commits" info={data?.githubOverview?.commits} />
                            <AnalysisSummary header="Issues" info={data?.githubOverview?.issues} />
                            <AnalysisSummary header="Pull Requests" info={data?.githubOverview?.pullRequests} />
                            <AnalysisSummary header="Contributors" info={data?.githubOverview?.contributors} />
                            <AnalysisSummary header="Forks" info={data?.githubOverview?.forks} />
                            <AnalysisSummary
                                header="Top Languages"
                                info={data?.githubOverview?.languages.join(", ").toString()}
                            />
                        </div>
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            )}
        </div>
    );
}
