import styles from "./Header.module.css";
import React, { useState } from "react"
import { Icon } from "@iconify/react";


import DropdownButton from "../../components/DropDown/DropDownButton/DropDownButton";
import DropDownItems from "../../components/DropDown/DropDownItems/DropDownItems";



import {
    PhoneInput
} from "react-international-phone";

import "react-international-phone/style.css";



function Header() {


    const couriers = [
        "Bosta",
        "Mylerz",
        "ShipBlu",
        "Aramex",
        "Egypt Post",
        "Other"

    ];
    const status = [
        "Completed",
        "Pending",
        "Cancelled"
    ];

    const [phone, setPhone] = useState("");
    const [showModal, setShowModal] = useState(false)
    const [showItemsModal, setShowItemModal] = useState(false)

    const userIcon = <Icon icon="lucide:user" height="1.5em" />;
    const notificationIcon = <Icon icon="lucide:bell" height="1.5em" />;
    const plusIcon = <Icon icon="lucide:plus" height="1.5em" />;

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
                                <div className={styles.leftSection}>
                                    <div className={styles.customer}>
                                        <h3>Customer</h3>

                                        <div className={styles.customerNameContainer}>
                                            {userIcon}
                                            <input
                                                className={styles.customerName}
                                                type="text"
                                                placeholder="Customer Name"
                                            />
                                        </div>

                                        <div className={styles.customerPhone}>
                                            <PhoneInput
                                                defaultCountry="eg"
                                                placeholder="Phone Number"
                                                value={phone}
                                                onChange={setPhone}
                                                className={styles.phoneInput}
                                                inputClassName={styles.phoneInputField}
                                                countrySelectorStyleProps={{
                                                    buttonClassName: styles.countryButton,
                                                }}
                                                disableDialCodeAndPrefix
                                            />
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
                                            <DropdownButton text="STATUS">
                                                {status.map((statu) => (
                                                    <DropDownItems key={statu}>{statu}</DropDownItems>
                                                ))}
                                            </DropdownButton>

                                            <input
                                                className={styles.date}
                                                type="date"
                                                name="date"
                                                id="date"
                                            />
                                        </div>

                                        <DropdownButton text="Courier">
                                            {couriers.map((courier) => (
                                                <DropDownItems key={courier}>{courier}</DropDownItems>
                                            ))}
                                        </DropdownButton>
                                    </div>
                                </div>
                                <div className={styles.rightSection}>
                                    <div className={styles.info}>
                                        <h3>info</h3>
                                        <div className={styles.info}>
                                            <div className={styles.paymentSourceContainer}>
                                                <DropdownButton text="Payment">
                                                    <DropDownItems>Cash on Delivery</DropDownItems>
                                                    <DropDownItems>Pre Paid</DropDownItems>
                                                </DropdownButton>
                                                <DropdownButton text="Source">
                                                    <DropDownItems>Facebook</DropDownItems>
                                                    <DropDownItems>Instagram</DropDownItems>
                                                    <DropDownItems>TikTok</DropDownItems>
                                                    <DropDownItems>WhatsApp</DropDownItems>
                                                    <DropDownItems>Website</DropDownItems>
                                                    <DropDownItems>Physical Store</DropDownItems>
                                                    <DropDownItems>Marketplace</DropDownItems>
                                                    <DropDownItems>Other</DropDownItems>
                                                </DropdownButton>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={styles.itmes}>
                                        <div className={styles.itemHeader}>
                                            <h3>Items</h3>
                                            <button onClick={() => setShowItemModal(true)} className={styles.itemButton}>
                                                {plusIcon} Add Items
                                            </button>

                                        </div>
                                        <div className={styles.itemBody}>
                                            {showItemsModal && (
                                                <div className={styles.itemsModal}>
                                                    <div className={styles.itemsLabels}>
                                                        <ul>
                                                            <li className={styles.idContiner}>
                                                                <input type="checkbox" className={styles.checkbox} />
                                                                ID
                                                            </li>
                                                            <li>Product</li>
                                                            <li>Item</li>
                                                            <li>Bought Price</li>
                                                            <li>Selling Price</li>
                                                            <li>Stock</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            )}
                                        </div>
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