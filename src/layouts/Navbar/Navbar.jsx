import { Icon } from "@iconify/react";
import styles from "./Navbar.module.css";
import DropdownButton from "../../components/DropDown/DropDownButton/DropDownButton";
import logo from "../../assets/logo.svg";
import DropDownItems from "../../components/DropDown/DropDownItems/DropDownItems";
import { Style, Avatar } from '@dicebear/core';
import definition from '@dicebear/styles/planets.json' with { type: 'json' };
import Tooltip from "../../components/Tooltip/Tooltip";

function Navbar() {
    let homeIcon = <Icon icon="akar-icons:dashboard" height="1.5em" />;

    let vanIcon = <Icon icon="hugeicons:van" height="1.5em" />;
    let clipboardIcon = <Icon icon="akar-icons:clipboard" height="1.5em" />;
    let usersIcon = <Icon icon="lucide:users" height="1.5em" />;
    let settingIcon = <Icon icon="lucide:settings" height="1.5em" />;
    let analyticIcon = <Icon icon="material-symbols:finance-rounded" height="1.5em" />;
    let helpIcon = <Icon icon="lucide:headphones" height="1.5em" />;
    let leftArrow = <Icon icon="lucide:chevron-right" height="1.5em" />;
    let PanelLeft = <Icon icon="lucide:panel-left" height="1.5em" />;
    let DownArrow = <Icon icon="lucide:chevron-down" height="1.5em" />;



    const style = new Style(definition);

    const avatar = new Avatar(style, {
        planetColor: ["e27a8c", "e37f64", "d88a40", "c1982a", "d67cb2"]
    });

    const svg = avatar.toString();

    return (
        <nav className={styles.navbar}>
            <div className={styles.mainContainer}>

                <div className={styles.upperSectionContainer}>
                    <div className={styles.header}>
                        <div className={styles.logo}>
                            <img src={logo} alt="Kaskoolak Logo" className={styles.logoImage} />
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
                        <DropdownButton text={"Language"}>
                            <DropDownItems>
                                English
                            </DropDownItems>
                            <DropDownItems>
                                Arabic
                            </DropDownItems>
                        </DropdownButton>
                    </div>
                    <div className={styles.divider}></div>
                </div>
                <div className={styles.middleIconContainer}>
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
                <div className={styles.divider} ></div>
                <div className={styles.accountSection}>
                    <a href="/settings" className={styles.avatar}>
                        <div dangerouslySetInnerHTML={{ __html: svg }} />
                    </a>
                    <div className={styles.infoContainer}>
                        <Tooltip text={"Northstar Goods"}>

                            <h4>Northstar Goods</h4>
                        </Tooltip>
                        <h5>John Doe</h5>
                        <h5 className={styles.role}>Admin</h5>
                    </div>
                    <button>{leftArrow}</button>
                </div>
            </div>
        </nav>
    );

}

export default Navbar



