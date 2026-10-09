import { Icon } from "@iconify/react";
import styles from "./Navbar.module.css";
import DropdownButton from "../../components/DropDown/DropDownButton/DropDownButton";
import logo from "../../assets/logo.svg";
import DropDownItems from "../../components/DropDown/DropDownItems/DropDownItems";
import { Style, Avatar } from '@dicebear/core';
import definition from '@dicebear/styles/planets.json' with { type: 'json' };
import Tooltip from "../../components/Tooltip/Tooltip";
import { useState, useEffect, useMemo } from "react";


function Navbar() {
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem("language");

        if (savedLanguage) {
            return savedLanguage;
        }

        return navigator.language.startsWith("ar")
            ? "Arabic"
            : "English";
    });
    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);




    const homeIcon = <Icon icon="lucide:house" height="1.5em" />;

    const vanIcon = <Icon icon="hugeicons:van" height="1.5em" />;
    const clipboardIcon = <Icon icon="lucide:clipboard" height="1.5em" />;
    const usersIcon = <Icon icon="lucide:users" height="1.5em" />;
    const settingIcon = <Icon icon="lucide:settings" height="1.5em" />;
    const analyticIcon = <Icon icon="lucide:wallet" height="1.5em" />;
    const helpIcon = <Icon icon="lucide:headphones" height="1.5em" />;
    const leftArrow = <Icon icon="lucide:chevron-right" height="1.5em" />;
    const PanelLeft = <Icon icon="lucide:panel-left" height="1.5em" />;




    const svg = useMemo(() => {
        const style = new Style(definition);
        const avatar = new Avatar(style, {
            planetColor: ["e27a8c", "e37f64", "d88a40", "c1982a", "d67cb2"]
        });
        return avatar.toString();
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.mainContainer}>
                <div className={styles.upperSectionContainer}>
                    <div className={styles.header}>
                        <div className={styles.logo}>
                            <img src={logo} alt="Kaskoolak Logo" className={styles.logoImage} />
                            <span className={styles.logoText}>Kaskoolak</span>
                        </div>
                        <button className={styles.collapseButton} aria-label="Collapse sidebar">{PanelLeft}</button>
                    </div>
                    <div className={styles.languageContainer}>
                        <DropdownButton text={language}>
                            <DropDownItems onClick={() => setLanguage("English")}>English</DropDownItems>
                            <DropDownItems onClick={() => setLanguage("Arabic")}>Arabic</DropDownItems>
                        </DropdownButton>
                    </div>
                    <div className={styles.divider}></div>
                </div>
                <div className={styles.middleIconContainer}>
                    <a className={`${styles.icon} ${styles.selected}`} href="/dashboard">{homeIcon}<span>Dashboard</span></a>
                    <a className={styles.icon} href="/customers">{usersIcon}<span>Customers</span></a>
                    <a className={styles.icon} href="/orders">{clipboardIcon}<span>inventory</span></a>
                    <a className={styles.icon} href="/analytics">{analyticIcon}<span>Finance</span></a>
                    <a className={styles.icon} href="/shipments">{vanIcon}<span>Shipments</span></a>
                </div>
            </div>
            <div className={styles.buttonSection}>
                <a className={`${styles.icon} ${styles.settingIcon}`} href="/settings">{settingIcon}<span>Settings</span></a>
                <a className={`${styles.icon} ${styles.settingIcon}`} href="/support">{helpIcon}<span>Help &amp; support</span></a>
                <div className={styles.divider}></div>
                <div className={styles.accountSection}>
                    <a href="/settings" className={styles.avatar}><div dangerouslySetInnerHTML={{ __html: svg }} /></a>
                    <div className={styles.infoContainer}>
                        <Tooltip text={"Northstar Goods"}><h4>Northstar Goods</h4></Tooltip>
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



