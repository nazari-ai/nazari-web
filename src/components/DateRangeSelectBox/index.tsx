import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

type Props = {
    handleClick: () => void;
};

export default function index(props: Props) {
    return (
        <div className={styles.selectBox} onClick={props.handleClick}>
            <p>Select a range</p>
            <Image src={"/images/select_icon.svg"} alt="Drop logo" width={10} height={6} priority={true} />
        </div>
    );
}
