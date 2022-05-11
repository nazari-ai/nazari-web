import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export function HomePageHeader() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerLogoContainer}>
                <Image
                    className={styles.headerLogo}
                    src="/images/logo.svg"
                    alt="Asalytics Logo"
                    width={133}
                    height={62}
                    priority={true}
                />
            </div>

            <div className={styles.headerButtonContainer}>
                <button className={styles.disabledButton}>COMING SOON</button>
            </div>
        </div>
    );
}
