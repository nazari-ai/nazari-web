import next from "next";
import React, { useContext } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import ArrowDownIcon from "src/components/Icons/ArrowDownIcon";
import { ThemeContext } from "@pages/_app";

type Props = {
    handleRedditMore: (row: any) => void;
};

export function PrimaryTableMoreButton(props: Props) {
    const theme = useContext(ThemeContext);

    return (
        <div
            data-testid="primary-table-more-button"
            className={styles.moreButtonWrapper}
            onClick={props.handleRedditMore}
        >
            <ArrowDownIcon width={12} height={10} fill={theme?.theme ? "#ffffff" : ""} />
        </div>
    );
}
