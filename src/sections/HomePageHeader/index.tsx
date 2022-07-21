import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryLogo } from "../../components/PrimaryLogo";
import styles from "./style.module.scss";

export function HomePageHeader() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerLogoContainer}>
                <PrimaryLogo />
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.headerInfoContainer}>
                    <div className={styles.headerInfoUnderline}>
                        <Image height={12} width={110} src="/images/underline.svg" />
                    </div>
                    <p className={styles.headerInfo}>About Us</p>
                </div>
                <PrimaryButton type="button" text="Analyze ASAs" />
            </div>
        </div>
    );
}
