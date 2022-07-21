import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";

type Props = {
    disabled?: boolean;
};

export function PrimaryLoader(props: Props) {
    return (
        <div data-testid="loader" className={styles.loader}>
            <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
            </svg>
        </div>
    );
}
