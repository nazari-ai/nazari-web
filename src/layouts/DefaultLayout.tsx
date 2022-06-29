import { HomePageHeader } from "../sections/HomePageHeader";
import styles from "../../styles/Home.module.scss";

type Type = {
    children: any;
};
export function DefaultLayout({ children }: Type) {
    return (
        <div>
            <HomePageHeader />
            {children}
        </div>
    );
}
