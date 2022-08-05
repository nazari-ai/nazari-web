import { AnalysisSummary } from "src/components/AnalysisSummary";
import { useGithubOverviewQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styles from "./style.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function GithubAnalysisSummary() {
    const { selectedAsa } = useStore();
    const { status, data, error, isFetching } = useGithubOverviewQuery({ asaID: selectedAsa.assetId });
    return (
        <div className={styles.summaryContainer}>
            <h1 className={styles.summaryHeader}>Summary</h1>
            {isFetching ? (
                <Skeleton
                    count={6}
                    containerClassName={styles.chartContainer}
                    baseColor="#ebebeb"
                    highlightColor="#f5f5f5"
                    height="50px"
                />
            ) : (
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
            )}
        </div>
    );
}
