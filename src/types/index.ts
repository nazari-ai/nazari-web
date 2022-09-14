export interface asset {
    __typename?: "Asa" | undefined;
    assetId: string;
    available: boolean;
    logo?: string | null | undefined;
    name: string;
    unitname1: string;
}

export interface dateRangeType {
    startDate: Date;
    endDate: Date | null;
    key: string;
}

export interface AnalysisTypeType {
    hour: boolean;
    weekdays: boolean;
}
