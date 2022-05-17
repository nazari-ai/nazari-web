import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";

type Props = {
    disabled?: any;
};

export function PrimaryLogo(props: Props) {
    return (
        <>
            <Image
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
