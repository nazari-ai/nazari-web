import styles from "./style.module.scss";
import { animated, useSpring } from "react-spring";

export function AssetsPageHero() {
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
                    List of Algorand Standard Assets
                </animated.h1>
            </div>
        </animated.div>
    );
}
