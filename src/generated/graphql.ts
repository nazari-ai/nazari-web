import { useQuery, UseQueryOptions } from "react-query";
import { fetchData } from "../services/fetcher";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** Date with time (isoformat) */
    DateTime: any;
};

export type GithubAnalyticsPerRepo = {
    __typename?: "GithubAnalyticsPerRepo";
    commits: Scalars["Int"];
    contributors: Scalars["Int"];
    forks: Scalars["Int"];
    issues: Scalars["Int"];
    pullRequests: Scalars["Int"];
    repoName: Scalars["String"];
    stars: Scalars["Int"];
};

export type GithubAnalyticsPerTime = {
    __typename?: "GithubAnalyticsPerTime";
    commits: Scalars["Int"];
    forks: Scalars["Int"];
    issues: Scalars["Int"];
    lastPushDate?: Maybe<Scalars["DateTime"]>;
    lpDay?: Maybe<Scalars["Int"]>;
    lpDayOfWeek?: Maybe<Scalars["String"]>;
    pullRequests: Scalars["Int"];
    stars: Scalars["Int"];
    watches: Scalars["Int"];
};

export type GithubOverview = {
    __typename?: "GithubOverview";
    commits: Scalars["Int"];
    contributors: Scalars["Int"];
    forks: Scalars["Int"];
    issues: Scalars["Int"];
    languages: Array<Scalars["String"]>;
    pullRequests: Scalars["Int"];
    stars: Scalars["Int"];
    watches: Scalars["Int"];
};

export type PerRepo = {
    __typename?: "PerRepo";
    repo: Array<GithubAnalyticsPerRepo>;
};

export type PerTime = {
    __typename?: "PerTime";
    repo: Array<GithubAnalyticsPerTime>;
};

export type Query = {
    __typename?: "Query";
    githubAnalyticsPerepo: PerRepo;
    githubAnalyticsPertime: PerTime;
    githubOverview: GithubOverview;
    redditAnalytics: Array<RedditPostSchema>;
    twitterAnalytics: Response;
    twitterOverview: TwitterOverview;
};

export type QueryGithubAnalyticsPerepoArgs = {
    asaID: Scalars["String"];
    sortBy: Scalars["String"];
};

export type QueryGithubAnalyticsPertimeArgs = {
    asaID: Scalars["String"];
    day?: Scalars["Boolean"];
    endDate?: InputMaybe<Scalars["String"]>;
    startDate?: InputMaybe<Scalars["String"]>;
    weekDay?: Scalars["Boolean"];
};

export type QueryGithubOverviewArgs = {
    asaID: Scalars["String"];
};

export type QueryRedditAnalyticsArgs = {
    asaID: Scalars["String"];
    endDate?: Scalars["String"];
    startDate?: Scalars["String"];
};

export type QueryTwitterAnalyticsArgs = {
    asaID: Scalars["String"];
    endDate?: InputMaybe<Scalars["String"]>;
    hour?: Scalars["Boolean"];
    startDate?: InputMaybe<Scalars["String"]>;
    weekday?: Scalars["Boolean"];
};

export type QueryTwitterOverviewArgs = {
    asaID: Scalars["String"];
};

export type RedditCommentSchema = {
    __typename?: "RedditCommentSchema";
    commentId: Scalars["String"];
    commentScore: Scalars["Int"];
    commentSentimentScore: Scalars["Float"];
    postId: Scalars["String"];
};

export type RedditPostSchema = {
    __typename?: "RedditPostSchema";
    asaID: Scalars["String"];
    more: Array<RedditCommentSchema>;
    numOfComments: Scalars["Int"];
    postId: Scalars["String"];
    postText: Scalars["String"];
    postTitle: Scalars["String"];
    score: Scalars["Int"];
    sentimentScore: Scalars["Float"];
};

export type Response = {
    __typename?: "Response";
    asaID?: Maybe<Scalars["String"]>;
    results: Array<TwitterAnalytics>;
};

export type TwitterAnalytics = {
    __typename?: "TwitterAnalytics";
    dayOfWeek?: Maybe<Scalars["Int"]>;
    hour?: Maybe<Scalars["Int"]>;
    likes: Scalars["Int"];
    postedAt?: Maybe<Scalars["DateTime"]>;
    retweets: Scalars["Int"];
    sentiment: Scalars["Float"];
};

export type TwitterOverview = {
    __typename?: "TwitterOverview";
    asaID: Scalars["String"];
    likeTotal: Scalars["Int"];
    retweetTotal: Scalars["Int"];
    sentimentTotal: Scalars["Float"];
    tweetTotal: Scalars["Int"];
};

export type GithubOverviewQueryVariables = Exact<{
    asaID: Scalars["String"];
}>;

export type GithubOverviewQuery = {
    __typename?: "Query";
    githubOverview: {
        __typename?: "GithubOverview";
        commits: number;
        contributors: number;
        forks: number;
        issues: number;
        languages: Array<string>;
        pullRequests: number;
        watches: number;
        stars: number;
    };
};

export type GithubAnalyticsPerTimeQueryVariables = Exact<{
    asaID: Scalars["String"];
    day?: InputMaybe<Scalars["Boolean"]>;
    endDate?: InputMaybe<Scalars["String"]>;
    startDate?: InputMaybe<Scalars["String"]>;
    weekDay?: InputMaybe<Scalars["Boolean"]>;
}>;

export type GithubAnalyticsPerTimeQuery = {
    __typename?: "Query";
    githubAnalyticsPertime: {
        __typename?: "PerTime";
        repo: Array<{
            __typename?: "GithubAnalyticsPerTime";
            commits: number;
            lastPushDate?: any | null;
            forks: number;
            issues: number;
            lpDay?: number | null;
            lpDayOfWeek?: string | null;
            pullRequests: number;
            watches: number;
            stars: number;
        }>;
    };
};

export type GithubAnalyticsPerRepoQueryVariables = Exact<{
    asaID: Scalars["String"];
    sortBy: Scalars["String"];
}>;

export type GithubAnalyticsPerRepoQuery = {
    __typename?: "Query";
    githubAnalyticsPerepo: {
        __typename?: "PerRepo";
        repo: Array<{
            __typename?: "GithubAnalyticsPerRepo";
            commits: number;
            contributors: number;
            forks: number;
            issues: number;
            pullRequests: number;
            repoName: string;
            stars: number;
        }>;
    };
};

export type RedditAnalyticsQueryVariables = Exact<{
    asaID: Scalars["String"];
    endDate?: InputMaybe<Scalars["String"]>;
    startDate?: InputMaybe<Scalars["String"]>;
}>;

export type RedditAnalyticsQuery = {
    __typename?: "Query";
    redditAnalytics: Array<{
        __typename?: "RedditPostSchema";
        asaID: string;
        numOfComments: number;
        postId: string;
        postText: string;
        postTitle: string;
        score: number;
        sentimentScore: number;
        more: Array<{
            __typename?: "RedditCommentSchema";
            commentId: string;
            commentScore: number;
            commentSentimentScore: number;
            postId: string;
        }>;
    }>;
};

export type TwitterOverviewQueryVariables = Exact<{
    asaID: Scalars["String"];
}>;

export type TwitterOverviewQuery = {
    __typename?: "Query";
    twitterOverview: {
        __typename?: "TwitterOverview";
        asaID: string;
        likeTotal: number;
        retweetTotal: number;
        sentimentTotal: number;
        tweetTotal: number;
    };
};

export type TwitterAnalyticsQueryVariables = Exact<{
    asaID: Scalars["String"];
    endDate?: InputMaybe<Scalars["String"]>;
    startDate?: InputMaybe<Scalars["String"]>;
    weekday?: InputMaybe<Scalars["Boolean"]>;
    hour?: InputMaybe<Scalars["Boolean"]>;
}>;

export type TwitterAnalyticsQuery = {
    __typename?: "Query";
    twitterAnalytics: {
        __typename?: "Response";
        asaID?: string | null;
        results: Array<{
            __typename?: "TwitterAnalytics";
            dayOfWeek?: number | null;
            hour?: number | null;
            likes: number;
            postedAt?: any | null;
            retweets: number;
            sentiment: number;
        }>;
    };
};

export const GithubOverviewDocument = `
    query githubOverview($asaID: String!) {
  githubOverview(asaID: $asaID) {
    commits
    contributors
    forks
    issues
    languages
    pullRequests
    watches
    stars
  }
}
    `;
export const useGithubOverviewQuery = <TData = GithubOverviewQuery, TError = unknown>(
    variables: GithubOverviewQueryVariables,
    options?: UseQueryOptions<GithubOverviewQuery, TError, TData>,
) =>
    useQuery<GithubOverviewQuery, TError, TData>(
        ["githubOverview", variables],
        fetchData<GithubOverviewQuery, GithubOverviewQueryVariables>(GithubOverviewDocument, variables),
        options,
    );

useGithubOverviewQuery.getKey = (variables: GithubOverviewQueryVariables) => ["githubOverview", variables];
useGithubOverviewQuery.fetcher = (variables: GithubOverviewQueryVariables, options?: RequestInit["headers"]) =>
    fetchData<GithubOverviewQuery, GithubOverviewQueryVariables>(GithubOverviewDocument, variables, options);
export const GithubAnalyticsPerTimeDocument = `
    query githubAnalyticsPerTime($asaID: String!, $day: Boolean, $endDate: String, $startDate: String, $weekDay: Boolean) {
  githubAnalyticsPertime(
    asaID: $asaID
    day: $day
    startDate: $startDate
    endDate: $endDate
    weekDay: $weekDay
  ) {
    repo {
      commits
      lastPushDate
      forks
      issues
      lpDay
      lpDayOfWeek
      pullRequests
      watches
      stars
    }
  }
}
    `;
export const useGithubAnalyticsPerTimeQuery = <TData = GithubAnalyticsPerTimeQuery, TError = unknown>(
    variables: GithubAnalyticsPerTimeQueryVariables,
    options?: UseQueryOptions<GithubAnalyticsPerTimeQuery, TError, TData>,
) =>
    useQuery<GithubAnalyticsPerTimeQuery, TError, TData>(
        ["githubAnalyticsPerTime", variables],
        fetchData<GithubAnalyticsPerTimeQuery, GithubAnalyticsPerTimeQueryVariables>(
            GithubAnalyticsPerTimeDocument,
            variables,
        ),
        options,
    );

useGithubAnalyticsPerTimeQuery.getKey = (variables: GithubAnalyticsPerTimeQueryVariables) => [
    "githubAnalyticsPerTime",
    variables,
];
useGithubAnalyticsPerTimeQuery.fetcher = (
    variables: GithubAnalyticsPerTimeQueryVariables,
    options?: RequestInit["headers"],
) =>
    fetchData<GithubAnalyticsPerTimeQuery, GithubAnalyticsPerTimeQueryVariables>(
        GithubAnalyticsPerTimeDocument,
        variables,
        options,
    );
export const GithubAnalyticsPerRepoDocument = `
    query githubAnalyticsPerRepo($asaID: String!, $sortBy: String!) {
  githubAnalyticsPerepo(asaID: $asaID, sortBy: $sortBy) {
    repo {
      commits
      contributors
      forks
      issues
      pullRequests
      repoName
      stars
    }
  }
}
    `;
export const useGithubAnalyticsPerRepoQuery = <TData = GithubAnalyticsPerRepoQuery, TError = unknown>(
    variables: GithubAnalyticsPerRepoQueryVariables,
    options?: UseQueryOptions<GithubAnalyticsPerRepoQuery, TError, TData>,
) =>
    useQuery<GithubAnalyticsPerRepoQuery, TError, TData>(
        ["githubAnalyticsPerRepo", variables],
        fetchData<GithubAnalyticsPerRepoQuery, GithubAnalyticsPerRepoQueryVariables>(
            GithubAnalyticsPerRepoDocument,
            variables,
        ),
        options,
    );

useGithubAnalyticsPerRepoQuery.getKey = (variables: GithubAnalyticsPerRepoQueryVariables) => [
    "githubAnalyticsPerRepo",
    variables,
];
useGithubAnalyticsPerRepoQuery.fetcher = (
    variables: GithubAnalyticsPerRepoQueryVariables,
    options?: RequestInit["headers"],
) =>
    fetchData<GithubAnalyticsPerRepoQuery, GithubAnalyticsPerRepoQueryVariables>(
        GithubAnalyticsPerRepoDocument,
        variables,
        options,
    );
export const RedditAnalyticsDocument = `
    query redditAnalytics($asaID: String!, $endDate: String, $startDate: String) {
  redditAnalytics(asaID: $asaID, startDate: $startDate, endDate: $endDate) {
    asaID
    more {
      commentId
      commentScore
      commentSentimentScore
      postId
    }
    numOfComments
    postId
    postText
    postTitle
    score
    sentimentScore
  }
}
    `;
export const useRedditAnalyticsQuery = <TData = RedditAnalyticsQuery, TError = unknown>(
    variables: RedditAnalyticsQueryVariables,
    options?: UseQueryOptions<RedditAnalyticsQuery, TError, TData>,
) =>
    useQuery<RedditAnalyticsQuery, TError, TData>(
        ["redditAnalytics", variables],
        fetchData<RedditAnalyticsQuery, RedditAnalyticsQueryVariables>(RedditAnalyticsDocument, variables),
        options,
    );

useRedditAnalyticsQuery.getKey = (variables: RedditAnalyticsQueryVariables) => ["redditAnalytics", variables];
useRedditAnalyticsQuery.fetcher = (variables: RedditAnalyticsQueryVariables, options?: RequestInit["headers"]) =>
    fetchData<RedditAnalyticsQuery, RedditAnalyticsQueryVariables>(RedditAnalyticsDocument, variables, options);
export const TwitterOverviewDocument = `
    query twitterOverview($asaID: String!) {
  twitterOverview(asaID: $asaID) {
    asaID
    likeTotal
    retweetTotal
    sentimentTotal
    tweetTotal
  }
}
    `;
export const useTwitterOverviewQuery = <TData = TwitterOverviewQuery, TError = unknown>(
    variables: TwitterOverviewQueryVariables,
    options?: UseQueryOptions<TwitterOverviewQuery, TError, TData>,
) =>
    useQuery<TwitterOverviewQuery, TError, TData>(
        ["twitterOverview", variables],
        fetchData<TwitterOverviewQuery, TwitterOverviewQueryVariables>(TwitterOverviewDocument, variables),
        options,
    );

useTwitterOverviewQuery.getKey = (variables: TwitterOverviewQueryVariables) => ["twitterOverview", variables];
useTwitterOverviewQuery.fetcher = (variables: TwitterOverviewQueryVariables, options?: RequestInit["headers"]) =>
    fetchData<TwitterOverviewQuery, TwitterOverviewQueryVariables>(TwitterOverviewDocument, variables, options);
export const TwitterAnalyticsDocument = `
    query twitterAnalytics($asaID: String!, $endDate: String, $startDate: String, $weekday: Boolean, $hour: Boolean) {
  twitterAnalytics(
    asaID: $asaID
    startDate: $startDate
    endDate: $endDate
    weekday: $weekday
    hour: $hour
  ) {
    asaID
    results {
      dayOfWeek
      hour
      likes
      postedAt
      retweets
      sentiment
    }
  }
}
    `;
export const useTwitterAnalyticsQuery = <TData = TwitterAnalyticsQuery, TError = unknown>(
    variables: TwitterAnalyticsQueryVariables,
    options?: UseQueryOptions<TwitterAnalyticsQuery, TError, TData>,
) =>
    useQuery<TwitterAnalyticsQuery, TError, TData>(
        ["twitterAnalytics", variables],
        fetchData<TwitterAnalyticsQuery, TwitterAnalyticsQueryVariables>(TwitterAnalyticsDocument, variables),
        options,
    );

useTwitterAnalyticsQuery.getKey = (variables: TwitterAnalyticsQueryVariables) => ["twitterAnalytics", variables];
useTwitterAnalyticsQuery.fetcher = (variables: TwitterAnalyticsQueryVariables, options?: RequestInit["headers"]) =>
    fetchData<TwitterAnalyticsQuery, TwitterAnalyticsQueryVariables>(TwitterAnalyticsDocument, variables, options);
