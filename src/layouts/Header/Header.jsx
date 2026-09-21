import styles from "./Header.module.css";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Popover from "../../components/Popover/Popover";



const NOTIFICATIONS = [
    {
        id: 1,
        type: "order",
        title: "Order delivered",
        message: "Order #ORD-1042 was successfully delivered to عبد الرحمن كمال",
        time: "10 minutes ago",
    },
    {
        id: 2,
        type: "finance",
        title: "Payment received",
        message: "You received E£1,250 from order #ORD-1039.",
        time: "1 hour ago",
    },
    {
        id: 3,
        type: "inventory",
        title: "Low stock",
        message: 'Your product "Blusher" has only 5 items remaining.',
        time: "2 hours ago",
    },
    {
        id: 4,
        type: "general",
        title: "Plan updated",
        message: "Your subscription has been upgraded to the Pro plan.",
        time: "3 hours ago",
    },
    {
        id: 5,
        type: "order",
        title: "Delivery exception",
        message: "Order #ORD-1038 encountered a delivery issue.",
        time: "5 hours ago",
    },
];

function Header() {


    const notificationIconWithDot = <Icon icon="lucide:bell-dot" height="1.5em" />;
    const notificationIcon = <Icon icon="lucide:bell" height="1.5em" />;
    const plusIcon = <Icon icon="lucide:plus" height="1.5em" />;
    const check = <Icon icon="bi:check-all" height="1em" />;
    const inventory = <Icon icon="iconmind:inventory-count-outline-bold" height="1.5em" />;
    const finance = <Icon icon="carbon:money" height="1.5em" />;
    const delivered = <Icon icon="wpf:sent" height="1.5em" />;
    const info = <Icon icon="lucide:info" height="1.5em" />;

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
                            {NOTIFICATIONS.map((notification) => {
                                let notificationIcon;

                                switch (notification.type) {
                                    case "order":
                                        notificationIcon = delivered;
                                        break;

                                    case "finance":
                                        notificationIcon = finance;
                                        break;

                                    case "inventory":
                                        notificationIcon = inventory;
                                        break;

                                    case "general":
                                        notificationIcon = info;
                                        break;

                                    default:
                                        notificationIcon = info;
                                }

                                return (
                                    <div className={styles.notificationItem} key={notification.id}>
                                        <div className={styles.notificationIcon}>
                                            {notificationIcon}
                                        </div>

                                        <div className={styles.notificationContent}>
                                            <div className={styles.notificationTextHeader}>
                                                <h4>{notification.title}</h4>
                                                <h5 className={styles.time}>
                                                    {notification.time}
                                                </h5>
                                            </div>

                                            <p className={styles.message}>
                                                {notification.message}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
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