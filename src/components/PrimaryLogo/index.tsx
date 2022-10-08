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
                src="/images/logo.png"
                alt="Nazari Logo"
                width={133}
                height={35}
                priority={true}
            />
        </>
    );
}
