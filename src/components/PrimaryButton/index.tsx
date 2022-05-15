import React from "react";
import styles from "./style.module.scss";


type Props = {
  text: string;
  styleClass?: any;
};

export function PrimaryButton  (props: Props) {
  return (
    <>
      <button className={`${styles.primaryButton} ${styles[props.styleClass]}`}>{props.text}</button>
    </>
  );
};


