import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";

type Props = {
    disabled?: boolean;
};

export function PrimaryShortLogo(props: Props) {
    return (
        <>
            <Image
                className={styles.headerLogo}
                src="/favicon.svg"
                alt="Nazari Logo"
                width={30}
                height={30}
                priority={true}
                data-testid="primary-short-logo"
            />
        </>
    );
}
