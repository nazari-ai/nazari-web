import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";

type Props = {
    disabled?: any;
};

export function PrimaryLoader(props: Props) {
    return (
        <>
          <div className={styles.loader}>
          <svg viewBox="0 0 86 80">
        <polygon points="43 8 79 72 7 72"></polygon>
    </svg>
</div>
        </>
    );
}
