import { Icon } from "@iconify/react";
import styles from "./Navbar.module.css";



function Navbar() {
    let homeIcon = <Icon icon="akar-icons:dashboard" height="1.5em" />;

    let vanIcon = <Icon icon="hugeicons:van" height="1.5em" />;
    let clipboardIcon = <Icon icon="akar-icons:clipboard" height="1.5em" />;
    let usersIcon = <Icon icon="lucide:users" height="1.5em" />;
    let settingIcon = <Icon icon="lucide:settings" height="1.5em" />;
    let analyticIcon = <Icon icon="material-symbols-light:finance-rounded" height="1.5em" />;
    let helpIcon = <Icon icon="lucide:headphones" height="1.5em" />;
    let leftArrow = <Icon icon="lucide:chevron-right" height="1.5em" />;
    let PanelLeft = <Icon icon="lucide:panel-left" height="1.5em" />;
    let DownArrow = <Icon icon="lucide:chevron-down" height="1.5em" />;



    return (
        <nav className={styles.navbar}>
            <div className={styles.mainContainer}>

                <div className={styles.upperSectionContainer}>
                    <div className={styles.logo}>
                        <div className={styles.logoContent}>
                            <span className={styles.logoMark}>K</span>
                            <span className={styles.logoText}>Kaskoolak</span>
                        </div>

                        <button
                            className={styles.collapseButton}
                            aria-label="Collapse sidebar"
                        >
                            {PanelLeft}
                        </button>
                    </div>

                    <div className={styles.languageContainer}>
                        <select className={styles.languageInput}>
                            <option>English </option>
                            <option>Arabic</option>

                        </select>
                        {DownArrow}
                    </div>
                </div>
                <div className={styles.middleIconContainer}>
                    <div className={styles.divider}></div>
                    <a className={`${styles.icon} ${styles.selected}`} href="/dashboard">
                        {homeIcon}
                        <span>Dashboard</span>
                    </a>

                    <a className={styles.icon} href="/shipments">
                        {vanIcon}
                        <span>Shipments</span>
                    </a>

                    <a className={styles.icon} href="/orders">
                        {clipboardIcon}
                        <span>inventory</span>
                    </a>

                    <a className={styles.icon} href="/customers">
                        {usersIcon}
                        <span>Customers</span>
                    </a>

                    <a className={styles.icon} href="/analytics">
                        {analyticIcon}
                        <span>Finance</span>
                    </a>

                </div>
            </div>

            <div className={styles.buttonSection}>
                <a className={`${styles.icon} ${styles.settingIcon}`} href="/settings">
                    {settingIcon}
                    <span>Settings</span>
                </a>

                <a className={`${styles.icon} ${styles.settingIcon}`} href="/support">
                    {helpIcon}
                    <span>Help & support</span>
                </a>
                <div className={styles.divider}></div>
                <div className={styles.accountSection}>
                    <div className={styles.avatar}></div>
                    <div className={styles.infoContainer}>
                        <h4>Northstar Goods</h4>
                        <h5>John Doe</h5>
                        <h6>Administrator</h6>
                    </div>
                    <button>{leftArrow}</button>
                </div>
            </div>
        </nav>
    );

}

export default Navbar



