import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export function AboutPageMission() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroLeftContainer}>
                {/* <p className={styles.heroParagraph}>Our Mission</p> */}
                <h1 className={styles.heroHeading}>NAZARI TEAM</h1>
                <p className={styles.heroParagraph}>
                    We are building the right tool that allows you to analyze Algorand Standard Assets (ASAs) better,
                    but you can spend a minute to know more about us.
                </p>
            </div>
            <div className={styles.heroRightContainer}>
                <Image src="/images/about.svg" width={500} height={500} />
            </div>
        </div>
    );
}
