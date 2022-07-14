import { HomePageHeader } from "../sections/HomePageHeader";
import styles from "../../styles/Home.module.scss";
import { HomePageFooter } from "src/sections/HomePageFooter";

type Type = {
    children: any;
};
export function DefaultLayout({ children }: Type) {
    return (
        <div>
            <HomePageHeader />
            {children}
            <HomePageFooter />
        </div>
    );
}
