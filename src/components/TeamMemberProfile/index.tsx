import Image from "next/image";
import React from "react";
import MemoFacebookIcon from "../Icons/FacebookIcon";
import MemoGithubIcon from "../Icons/GithubIcon";
import MemoInstagramIcon from "../Icons/InstagramIcon";
import MemoLinkedinIcon from "../Icons/LinkedinIcon";
import MemoTwitterIcon from "../Icons/TwitterIcon";
import styles from "./style.module.scss";

type Props = {
    name: string;
    role: string;
    image: any;
};

export function TeamMemberProfile(props: Props) {
    return (
        <div className={styles.profileContainer}>
            <Image src={props.image} width={200} height={200} />
            <div className={styles.profileHeaderContainer}>
                <p className={styles.profileName}>{props.name}</p>
                <p className={styles.profileRole}>{props.role}</p>
                <div className={styles.profileSocial}>
                    <MemoFacebookIcon fill="#a2a7b2" />
                    <MemoTwitterIcon fill="#a2a7b2" />
                    <MemoInstagramIcon fill="#a2a7b2" />
                    <MemoLinkedinIcon fill="#a2a7b2" />
                    <MemoGithubIcon fill="#a2a7b2" />
                </div>
            </div>
        </div>
    );
}
