import styles from "./Header.module.css";
import React, { useState } from "react"
import { Icon } from "@iconify/react";
import PhoneField from "../../components/PhoneField/PhoneField";




function Header() {


    const couriers = [
        "Bosta",
        "Mylerz",
        "ShipBlu",
        "Aramex",
        "Egypt Post",
        "Other"

    ];
    const [showModal, setShowModal] = useState(false)
    let userIcon = <Icon icon="lucide:user" width={24} height={24} />;
    let notificationIcon = <Icon icon="lucide:bell" width={24} height={24} />;
    let plusIcon = <Icon icon="lucide:plus" width={24} height={24} />;


    return (
        <header className={styles.header}>
            <div className={styles.notificationContainer}>
                <button
                    className={`${styles.icon} ${styles.notification}`}
                    id="notificationIcon"
                    aria-label="Notifications"
                >
                    {notificationIcon}
                </button>
                <button onClick={() => { setShowModal(true) }} className={styles.orderCreationBtn}>
                    {plusIcon}  Create Order
                </button>
                {showModal && (
                    <div className={styles.createOrderModal}>
                        <div className={styles.createOrderForm}>
                            <div className={styles.createOrderHeader}>
                                <h2>Create Order</h2>
                            </div>
                            <div className={styles.divider}></div>
                            <div className={styles.createOrderBody}>
                                <div className={styles.customer}>
                                    <h3>customer</h3>
                                    <div className={styles.customerNameContainer}>
                                        {userIcon}
                                        <input
                                            className={styles.customerName}
                                            type="text"
                                            placeholder="Customer Name"
                                        />
                                    </div>

                                    <div className={styles.customerPhone}>
                                        <PhoneField />
                                    </div>

                                    <div className={styles.locationContainer}>
                                        <input
                                            className={styles.locationField}
                                            type="text"
                                            id="country"
                                            name="country"
                                            placeholder="Country"
                                        />
                                        <input
                                            className={styles.locationField}
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="City"
                                        />
                                    </div>

                                    <input
                                        className={styles.address}
                                        type="text"
                                        id="address"
                                        name="address"
                                        placeholder="Address"
                                    />
                                </div>
                                <div className={styles.delivery}>
                                    <h3>Delivery</h3>

                                    <div className={styles.deliveryInfo}>
                                        <select
                                            className={styles.input}
                                            name="status"
                                            id="status"
                                            defaultValue="pending"
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="complete">Complete</option>
                                            <option value="canceled">Canceled</option>
                                        </select>

                                        <input
                                            className={styles.input}
                                            type="date"
                                            name="date"
                                            id="date"
                                        />
                                    </div>
                                </div>


                            </div>
                            <div className={styles.createOrderFooter}>
                                <button type="button" className={styles.cancelBtn} onClick={() => { setShowModal(false) }}>
                                    Cancel
                                </button>

                                <button type="submit" className={styles.orderCreationBtn}>
                                    {plusIcon} Create Order
                                </button>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;