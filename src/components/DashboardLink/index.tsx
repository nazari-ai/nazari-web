import Link from "next/link";
import React from "react";

import styles from "./style.module.scss";

type Props = {
    href: string;
    title: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    className?: any;
    icon?: JSX.Element;
};

export function DashboardLink(props: Props) {
    return (
        <Link className={styles.dashboardLink} href={props.href}>
            <div className={`${styles.linkContainer} ${styles[props.className]}`}>
                {props.icon}

                {props.title}
            </div>
        </Link>
    );
}
