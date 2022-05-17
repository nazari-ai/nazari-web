import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";

type Props = {
    disabled?: any;
};

export function PrimaryShortLogo(props: Props) {
    return (
        <>
            <Image
                className={styles.headerLogo}
                src="/favicon.svg"
                alt="Asalytics Logo"
                width={30}
                height={30}
                priority={true}
            />
        </>
    );
}
