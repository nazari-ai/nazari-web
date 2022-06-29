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
                    Discover about ASAs and ASAlytics Team.
                </animated.h1>
                <p className={styles.heroParagraph}>
                    We are building the right tool that allows you to analysis ASAs better, but you can spend a minute
                    to know more about us.
                </p>
            </div>
        </animated.div>
    );
}
