import styles from "../../styles/Home.module.scss";
import { HomePageFooter } from "src/sections/HomePageFooter";
import { HomePageHeader } from "src/sections/HomePageHeader";
import { AnalyzeAsaModal } from "src/sections/AnalyzeAsaModal";
import { DefaultLayout } from "./DefaultLayout";

type Type = {
    children: any;
};
export function HomeLayout({ children }: Type) {
    return (
        <DefaultLayout>
            <HomePageHeader />
            {children}
            <HomePageFooter />
        </DefaultLayout>
    );
}
