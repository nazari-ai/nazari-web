import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { useTransition, animated, useSpring } from "react-spring";

export function AboutPageHero() {
    const opacityAnimation: any = useSpring({
        config: { duration: 1500 },
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    const slideInTransition: any = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 3000 },
    });

    return (
        <animated.div
            className={styles.heroContainer}
            style={{
                ...opacityAnimation,
            }}
        >
            <div className={styles.heroLeftContainer}>
                <animated.h1
                    style={{
                        ...slideInTransition,
                    }}
                    className={styles.heroHeading}
                >
                    Real-time Opinion Analytics
                </animated.h1>
                <animated.h3
                    style={{
                        ...slideInTransition,
                    }}
                    className={styles.heroSubHeading}
                >
                    Our Mission
                </animated.h3>
                <p className={styles.heroParagraph}>
                    Nazari is a one-stop destination for market stakeholders to do an extensive DYOR (Do Your Own
                    Research) on their preferred assets and get a real-time market opinion of the assets. We are a
                    social media analytics web application that continually tracks market dynamics via gathering data on
                    participants’ and stakeholders’ thoughts, feelings, and mood on social media platforms regarding
                    Algorand Standard Assets(ASA), and using Natural Language Processing techniques to analyze the
                    trends and generate insights dynamically. Market participants’ feelings don’t always reflects
                    assets’ potential but they can significantly affect the price which is why many stakeholders aim to
                    analyze the market’s sentiment to track (and sometimes predict) the short and mid-term potential of
                    a crypto asset. By using Nazari to track the market dynamics, everyone can understand the amount of
                    fear or hype surrounding a specific cryptocurrency, e.g $Algo, Choice coin.
                </p>
            </div>
        </animated.div>
    );
}
