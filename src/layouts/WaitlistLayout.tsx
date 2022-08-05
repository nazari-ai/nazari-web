import { WaitlistPageHeader } from "src/sections/WaitlistPageHeader";
import styles from "../../styles/Home.module.scss";

type Type = {
    children: any;
};
export function WaitlistLayout({ children }: Type) {
    return (
        <div className={styles.main}>
            <WaitlistPageHeader />
            {children}
        </div>
    );
}
