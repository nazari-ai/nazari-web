import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@pages/_app";

type Props = {
    disabled?: boolean;
};

export function PrimaryLogo(props: Props) {
    const theme = useContext(ThemeContext);

    return (
        <>
            <Image
                data-testid="primary-logo"
                className={styles.headerLogo}
                src={theme?.theme ? "/images/logo-dark-full.png" : "/images/logo.png"}
                alt="Nazari Logo"
                width={133}
                height={35}
                priority={true}
            />
        </>
    );
}
