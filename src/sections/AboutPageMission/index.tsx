import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export function AboutPageMission() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroLeftContainer}>
                <p className={styles.heroParagraph}>Our Mission</p>
                <h1 className={styles.heroHeading}>Discover. Learn. Build.</h1>
                <p className={styles.heroParagraph}>
                    ASAlytics is a ML-Powered Open Source Tool that helps user's analyze Algorand Standard Assets based
                    on social sentiments. We are humble yet confident, inquisitive and hungry to learn.
                </p>
            </div>
            <div className={styles.heroRightContainer}>
                <Image src="/images/about.svg" width={500} height={500} />
            </div>
        </div>
    );
}
