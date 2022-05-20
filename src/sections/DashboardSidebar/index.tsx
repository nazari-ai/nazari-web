import { DashboardLink } from "src/components/DashboardLink";
import MemoGithubIcon from "src/components/Icons/GithubIcon";
import MemoHomeIcon from "src/components/Icons/HomeIcon";
import MemoRedditIcon from "src/components/Icons/RedditIcon";
import MemoSettingIcon from "src/components/Icons/SettingIcon";
import MemoTwitterIcon from "src/components/Icons/TwitterIcon";
import { PrimaryLogo } from "src/components/PrimaryLogo";
import styles from "./style.module.scss";

export function DashboardSidebar() {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.logoContainer}>
                <PrimaryLogo />
            </div>
        
            <div className={styles.linkContainer}>
                <DashboardLink href="/" title="Home" icon={<MemoHomeIcon />} />
                <DashboardLink href="/dashboard/twitter" title="Twitter" icon={<MemoTwitterIcon />} />
                <DashboardLink href="/dashboard/reddit" title="Reddit" icon={<MemoRedditIcon />} />
                <DashboardLink href="/dashboard/github" title="Github" icon={<MemoGithubIcon />} />
                
            </div>
            <div className={styles.settingsContainer}>
            <DashboardLink href="/dashboard/settings" title="Settings" icon={<MemoSettingIcon />} disabled={true}/>
            </div>
        </div>
    );
}
