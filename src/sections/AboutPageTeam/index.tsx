import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { useTransition, animated, useSpring } from "react-spring";
import { TeamMemberProfile } from "src/components/TeamMemberProfile";
import StevenMemoji from "../../../public/images/steven-profile.svg";
import ErnestMemoji from "../../../public/images/ernest-profile.svg";
import BusayoMemoji from "../../../public/images/busayo-profile.svg";
import PreciousMemoji from "../../../public/images/precious-profile.svg";
import TemiMemoji from "../../../public/images/temi-profile.svg";

export function AboutPageTeam() {
    return (
        <div className={styles.teamContainer}>
            <TeamMemberProfile name="Steven Kolawole" role="Engineering Lead" image={StevenMemoji} />
            <TeamMemberProfile name="Ernest Owojori" role="Operation Lead" image={ErnestMemoji} />
            <TeamMemberProfile name="Busayo Awobade" role="Data Engineer" image={BusayoMemoji} />
            <TeamMemberProfile name="Precious Kolawole" role="Data Scientist" image={PreciousMemoji} />
            <TeamMemberProfile name="Oladetoun Temitayo" role="Frontend Engineer" image={TemiMemoji} />
        </div>
    );
}
