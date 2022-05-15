import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryLogo } from "../../components/PrimaryLogo";
import styles from "./style.module.scss";

export function HomePageHeader() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerLogoContainer}>
             <PrimaryLogo/>
            </div>

            <div className={styles.headerButtonContainer}>
               <PrimaryButton text="Coming Soon" styleClass="disabledButton"/>
            </div>
        </div>
    );
}
