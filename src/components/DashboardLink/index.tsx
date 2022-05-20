import Link from "next/link";
import React from "react";

import styles from "./style.module.scss";

type Props = {
    href: string;
    title: any;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    className?: any;
    icon?: JSX.Element;
};

export function DashboardLink(props: Props) {
    return (
        <>
            <div className={styles.linkContainer}>
                {props.icon}
                <Link className={`${styles.dashboardLink} ${styles[props.className]}`} href={props.href}>
                    {props.title}
                </Link>
            </div>
        </>
    );
}
