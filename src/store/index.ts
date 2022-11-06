import { format } from "date-fns";
import { asset, AnalysisTypeType } from "src/types";
import create from "zustand";

interface State {
    analyzeModal: boolean;
    openAnalyzeModal: () => void;
    setSelectedAsa: (asa: asset) => void;
    selectedAsa: asset;
    dateRange: dateRangeType;
    setDateRange: (range: dateRangeType) => void;
    analysisType: AnalysisTypeType;
    setAnalysisType: (analysisType: AnalysisTypeType) => void;
    timeFrame: string;
    setTimeFrame: (time: string) => void;
}

export const defaultAsa: asset = {
    assetId: "",
    available: false,
    logo: null,
    unitname1: "",
    name: "",
};

interface dateRangeType {
    startDate: string;
    endDate: string | null;
    activeTimeFrame: "1d" | "1w" | "1m" | null;
}

const defaultDateRange = {
    startDate: "2022-10-01",
    endDate: format(new Date(), "yyyy-MM-dd"),
    activeTimeFrame: null,
};

export const defaultAnalysisType = {
    hour: false,
    weekdays: true,
    day: false,
    byrepo: false,
};

export const useStore = create<State>((set) => ({
    analyzeModal: false,
    selectedAsa: defaultAsa,
    dateRange: defaultDateRange,
    analysisType: defaultAnalysisType,
    timeFrame: "",
    setSelectedAsa: (asa: asset) => set((state) => ({ selectedAsa: asa })),
    openAnalyzeModal: () => set((state) => ({ analyzeModal: !state.analyzeModal })),
    setDateRange: (dateRange: dateRangeType) => set((state) => ({ dateRange })),
    setAnalysisType: (analysisType: AnalysisTypeType) => set((state) => ({ analysisType })),
    setTimeFrame: (time: string) => set((state) => ({ timeFrame: time })),
}));
