import { HomePageHeader } from "../sections/HomePageHeader";
import styles from "../../styles/Home.module.scss";

type Type = {
    children: any;
};
export function WaitlistLayout({ children }: Type) {
    return (
        <div className={styles.main}>
            <HomePageHeader />
            {children}
        </div>
    );
}
