import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { useTransition, animated, useSpring } from "react-spring";
import { PrimaryButton } from "../../components/PrimaryButton";

type Props = {
    openPopup: Function;
};
export function HomePageHero(props: Props) {
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
            <div className={styles.heroBackgroundImage}>
                <Image height={500} width={700} src="/images/hero-image.svg" />
            </div>

            <div className={styles.heroLeftContainer}>
                <animated.h1
                    style={{
                        ...slideInTransition,
                    }}
                    className={styles.heroHeading}
                >
                    Explore Algorand Standard Assets🤞🏾
                </animated.h1>
                <p className={styles.heroParagraph}>
                    Explore opinions for Algorand Standard Assets across multiple social platforms for free all on one
                    platform.
                </p>
                <PrimaryButton type="button" text="ANALYZE ASAs" onClick={() => props.openPopup(true)} />
            </div>
        </animated.div>
    );
}
