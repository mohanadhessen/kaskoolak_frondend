import styles from "./Header.module.css";
import React, { useState } from "react"


function Header() {

    const [showModal, setShowModal] = useState(false)

    let notificationIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg>
    let activeNotificationIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-dot-icon lucide-bell-dot"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348" /><circle cx="18" cy="5" r="3" /></svg>
    let plusIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>

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
                                <h3>Create Order</h3>
                            </div>
                            <div className={styles.createOrderBody}>

                                <div className={styles.customerInfo}>
                                    <input
                                        className={styles.customerName}
                                        type="text"
                                        placeholder="Customer name"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Address"
                                />

                                <input
                                    type="text"
                                    placeholder="City / Governorate"
                                />

                                <select id="status" name="status" defaultValue="pending">
                                    <option value="pending">Pending</option>
                                    <option value="processing">Completed</option>
                                    <option value="shipped">Cancelled</option>
                                </select>
                                <input
                                    type="date"
                                    name="date"
                                    defaultValue={new Date().toISOString().split("T")[0]}
                                />
                                <div className={styles.courierGroup}>
                                    <div className={styles.courierField}>
                                        
                                        <select id="courier" name="courier">
                                            <option value="">Select courier</option>
                                            <option value="bosta">Bosta</option>
                                            <option value="mylerz">Mylerz</option>
                                            <option value="aramex">Aramex</option>
                                            <option value="jt">J&T Express</option>
                                            <option value="egypt-post">Egypt Post</option>
                                            <option value="dhl">DHL</option>
                                            <option value="fedex">FedEx</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className={styles.courierField}>
                                        <select id="paymentMethod" name="paymentMethod" defaultValue="cod">
                                            <option value="cod">Cash on Delivery</option>
                                            <option value="prepaid">Prepaid</option>
                                        </select>
                                    </div>

                                    <div className={styles.courierField}>
                                        <select id="source" name="source" defaultValue="manual">
                                            <option value="manual">Manual</option>
                                            <option value="whatsapp">WhatsApp</option>
                                            <option value="instagram">Instagram</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.customerInfo}>
                                    <input
                                        type="number"
                                        placeholder="Shipping cost"
                                        min="0"
                                        step="0.01"
                                    />

                                    <input
                                        type="number"
                                        placeholder="Total price"
                                        min="0"
                                        step="0.01"
                                    />
                                </div>

                                <input type="text" placeholder="Order Note" />
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