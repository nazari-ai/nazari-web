import styles from "../../styles/Home.module.scss";
import { HomePageFooter } from "src/sections/HomePageFooter";
import { HomePageHeader } from "src/sections/HomePageHeader";
import { AnalyzeAsaModal } from "src/sections/AnalyzeAsaModal";
import { useStore } from "src/store";
import { useAsaListQuery } from "src/generated/graphql";

type Type = {
    children: any;
};
export function DefaultLayout({ children }: Type) {
    const { analyzeModal, selectedAsa, openAnalyzeModal } = useStore();

    const { data, isError, isFetched } = useAsaListQuery();
    return (
        <div>
            {analyzeModal ? <AnalyzeAsaModal /> : null}
            {children}
        </div>
    );
}
