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
}

export const defaultAsa = {
    assetId: "",
    available: false,
    logo: null,
    unitname1: "",
    name: "",
};

interface dateRangeType {
    startDate: string;
    endDate: string | null;
}

const defaultDateRange = {
    startDate: "2020-01-01",
    endDate: null,
};

const defaultAnalysisType = {
    hour: false,
    weekdays: true,
};

export const useStore = create<State>((set) => ({
    analyzeModal: false,
    selectedAsa: defaultAsa,
    dateRange: defaultDateRange,
    analysisType: defaultAnalysisType,
    setSelectedAsa: (asa: asset) => set((state) => ({ selectedAsa: asa })),
    openAnalyzeModal: () => set((state) => ({ analyzeModal: !state.analyzeModal })),
    setDateRange: (dateRange: dateRangeType) => set((state) => ({ dateRange })),
    setAnalysisType: (analysisType: AnalysisTypeType) => set((state) => ({ analysisType })),
}));
