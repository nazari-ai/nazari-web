import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";

type Props = {
    disabled?: boolean;
};

export function PrimaryLogo(props: Props) {
    return (
        <>
            <Image
                data-testid="primary-logo"
                className={styles.headerLogo}
                src="/images/logo.svg"
                alt="Asalytics Logo"
                width={133}
                height={62}
                priority={true}
            />
        </>
    );
}
