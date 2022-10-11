import { AnalyzeAsaModal } from "src/sections/AnalyzeAsaModal";
import { useStore } from "src/store";
import { useContext } from "react";
import { ThemeContext } from "@pages/_app";

type Type = {
    children: any;
};
export function DefaultLayout({ children }: Type) {
    const theme = useContext(ThemeContext);

    const { analyzeModal } = useStore();

    return (
        <div data-theme={theme?.theme ? "dark" : "light"} style={{ backgroundColor: theme?.theme ? "#141517" : "" }}>
            {analyzeModal ? <AnalyzeAsaModal /> : null}
            {children}
        </div>
    );
}
