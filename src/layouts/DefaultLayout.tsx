import styles from "../../styles/Home.module.scss";
import { HomePageFooter } from "src/sections/HomePageFooter";
import { HomePageHeader } from "src/sections/HomePageHeader";

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
