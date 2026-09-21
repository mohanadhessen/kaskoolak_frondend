import styles from "./Header.module.css";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Popover from "../../components/Popover/Popover";

function Header() {


    const notificationIconWithDot = <Icon icon="lucide:bell-dot" height="1.5em" />;
    const notificationIcon = <Icon icon="lucide:bell" height="1.5em" />;
    const plusIcon = <Icon icon="lucide:plus" height="1.5em" />;
    const check = <Icon icon="akar-icons:check" height="1.2em" />;

    return (
        <header className={styles.header}>
            <div className={styles.notificationContainer}>
                <Popover trigger={
                    <button
                        className={`${styles.icon} ${styles.notification}`}
                        aria-label="Notifications"
                    >
                        {notificationIconWithDot}
                    </button>
                }>
                    <div className={styles.notificationHeader}>
                        <h4>Notifications </h4>
                        <button className={styles.check}>
                            {check} <span>Mark as read</span> 
                        </button>

                    </div>
                </Popover>
                <button className={styles.orderCreationBtn}>
                    {plusIcon} Create Order
                </button>
            </div>
        </header>
    );
}

export default Header;