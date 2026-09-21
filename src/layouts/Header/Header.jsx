import styles from "./Header.module.css";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Popover from "../../components/Popover/Popover";




const NOTIFICATIONS = [
    {
        id: 1,
        type: "order_delivered",
        title: "Order delivered",
        message: "Order #ORD-1042 was successfully delivered to عبد الرحمن كمال",
        time: "10 minutes ago",
    },
    {
        id: 2,
        type: "plan_updated",
        title: "Plan updated",
        message: "Your subscription has been upgraded to the Pro plan.",
        time: "1 hour ago",
    },
    {
        id: 3,
        type: "delivery_exception",
        title: "Delivery exception",
        message: "Order #ORD-1038 encountered a delivery issue.",
        time: "2 hours ago",
    },
];


function Header() {


    const notificationIconWithDot = <Icon icon="lucide:bell-dot" height="1.5em" />;
    const notificationIcon = <Icon icon="lucide:bell" height="1.5em" />;
    const plusIcon = <Icon icon="lucide:plus" height="1.5em" />;
    const check = <Icon icon="akar-icons:check" height="1.2em" />;

    const delivered = <Icon icon="wpf:sent" height="1.5em" />;

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
                    <div className={styles.notificationPanel}>

                        <div className={styles.notificationHeader}>

                            <h3>Notifications</h3>
                            <button className={styles.check}>
                                {check} <span>Mark all as read</span>
                            </button>


                        </div>
                        
                        <div className={styles.notificationBody}>

                            <div className={styles.notificationItem}>
                                <div className={styles.notificationIcon}>
                                    {delivered}
                                </div>

                                <div className={styles.notificationContent}>
                                    <div className={styles.notificationTextHeader}>
                                        <h4>{NOTIFICATIONS[0].title}</h4>
                                        <h5 className={styles.time}>{NOTIFICATIONS[0].time}</h5>
                                    </div>
                                    <p className={styles.message}>{NOTIFICATIONS[0].message}</p>
                                </div>
                            </div>

                        </div>

                        <a href="/notifications" className={styles.notificationFooter}>
                            View all notifications
                        </a>

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