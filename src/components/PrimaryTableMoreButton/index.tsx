import next from "next";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

type Props = {
    handleRedditMore: (row: any) => void;
    row: any;
};

export function PrimaryTableMoreButton(props: Props) {
    return (
        <div className={styles.moreButtonWrapper} onClick={props.handleRedditMore}>
            <Image src={"/images/more-arrow-down.svg"} width={12} height={10} />
        </div>
    );
}
