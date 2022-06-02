import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import styles from "./style.module.scss";

type Props = {
    href: string;
    title: any;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    className?: any;
};

export function DashboardSubLink(props: Props) {
    console.log(props.className);
    return (
        <>
            <div className={`${styles.linkContainer} ${styles[props.className]}`}>
                <Link className={styles.dashboardLink} href={props.href}>
                    {props.title}
                </Link>
            </div>
        </>
    );
}