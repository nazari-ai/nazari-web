export interface asset {
    __typename?: "AsaData" | undefined;
    assetId: string;
    available: boolean;
    logo?: string | null | undefined;
    name: string;
    unitname1?: string | null | undefined;
}

export interface dateRangeType {
    startDate: Date;
    endDate: Date | null;
    key: string;
}

export interface AnalysisTypeType {
    hour: boolean;
    weekdays: boolean;
    day: boolean;
    byrepo: boolean;
}
