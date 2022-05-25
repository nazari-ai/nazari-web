import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../../components/PrimaryButton";
import styles from "./style.module.scss";

export function DashboardHeader() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerInfoContainer}>
                <PrimaryButton text="Analyze ASAs" type="button" />
            </div>
        </div>
    );
}
