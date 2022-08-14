import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { useTransition, animated, useSpring } from "react-spring";
import { TeamMemberProfile } from "src/components/TeamMemberProfile";
import Steven from "../../../public/images/steven.png";
import Ernest from "../../../public/images/ernest.png";
import Busayo from "../../../public/images/busayor.png";
import Precious from "../../../public/images/precious.png";
import Temi from "../../../public/images/temi.png";

export function AboutPageTeam() {
    return (
        <div className={styles.teamContainer}>
            <TeamMemberProfile name="Steven Kolawole" role="Machine Learning Engineer" image={Steven} />
            <TeamMemberProfile name="Ernest Owojori" role="Technical Product Manager" image={Ernest} />
            <TeamMemberProfile name="Busayo Awobade" role="Data Engineer" image={Busayo} />
            <TeamMemberProfile name="Precious Kolawole" role="Data Scientist" image={Precious} />
            <TeamMemberProfile name="Oladetoun Temitayo" role="Frontend Engineer" image={Temi} />
        </div>
    );
}
