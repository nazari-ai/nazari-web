import create from "zustand";
import { persist } from "zustand/middleware";

interface State {
    analyzeModal: boolean;
    openAnalyzeModal: () => void;
    asaId: string;
}

interface AsaState {
    asaId: string;
}

export const useStore = create<State>((set) => ({
    analyzeModal: false,
    openAnalyzeModal: () => set((state) => ({ analyzeModal: !state.analyzeModal })),
    asaId: "ChoiceCoin",
}));

export const useAsaStore = create(
    persist(
        (set, get) =>
            ({
                asaId: "ChoiceCoin",
                changeAsaId: (id: String) => set({ asaId: id }),
            } as AsaState),
        {
            name: "asa", // unique name
            getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
        },
    ),
);
