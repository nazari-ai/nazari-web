import { asset } from "src/types";
import create from "zustand";

interface State {
    analyzeModal: boolean;
    openAnalyzeModal: () => void;
    setSelectedAsa: (asa: asset) => void;
    selectedAsa: asset;
}

const defaultAsa = {
    assetId: "312769",
    available: false,
    logo: null,
    unitname1: "USDt",
    name: "Tether USDt",
};

export const useStore = create<State>((set) => ({
    analyzeModal: false,
    selectedAsa: defaultAsa,
    setSelectedAsa: (asa: asset) => set((state) => ({ selectedAsa: asa })),
    openAnalyzeModal: () => set((state) => ({ analyzeModal: !state.analyzeModal })),
}));
