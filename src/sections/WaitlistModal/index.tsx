import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryInput } from "../../components/PrimaryInput";
import { PrimaryLogo } from "../../components/PrimaryLogo";
import styles from "./style.module.scss";

export function WaitlistModal() {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.formContainer}>
                <div className={styles.modalHeader}>
                    <div className={styles.headerLogoContainer}>
                        <PrimaryLogo />
                    </div>
                    <Image
                        className={styles.headerLogo}
                        src="/images/close.svg"
                        alt="Close Icon"
                        width={50}
                        height={60}
                        priority={true}
                    />
                </div>
                <form className={styles.form}>
                    <PrimaryInput placeholder="John Doe" type="name" label="Your First Name" />
                    <PrimaryInput placeholder="hello@asalytics.ai" type="email" label="Your Email Address" />
                    <PrimaryButton text="Join Our Waitlist" className="secondaryButton" />
                </form>
            </div>
        </div>
    );
}
