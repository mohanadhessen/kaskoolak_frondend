import styles from "./Customer.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";




const customers = [
    { id: 1, name: "عبد الرحمن كمال", phone: "01012345678" },
    { id: 2, name: "محمد فاروق", phone: "01123456789" },
    { id: 6, name: "حلا احمد", phone: "01298765432" },
    { id: 7, name: "بهنس", phone: "01056789123" },
    { id: 8, name: "أحمد", phone: "01156789123" }
];



const usersIcon = <Icon icon="lucide:users" height="2em" />;
const search = <Icon icon="lucide:search" height="1.2rem" />

function Customer() {
    const [currentCustomer, setCurrentCustomer] = useState([]);
    const [draft, setDraft] = useState({
        name: "",
        phone: "",

    });



    return (
        <div className={styles.customer}>
            {customers.length == 0 && (
                <div className={styles.customersEmptyState}>
                    <div className={`${styles.emptyStateContent} ${currentCustomer.length > 0 ? styles.emptyStateHidden : ""}`}>

                        {usersIcon}

                        <div className={styles.emptyStateTextContainer}>
                            <h3>No customers yet</h3>
                            <p>Add customers manually or<button className={styles.uploadCustomersBtn} >Upload customers</button></p>

                        </div>

                    </div>
                    <div className={styles.customerFields}>
                        <input type="text" placeholder="Customer Name" onChange={(e) => setDraft(prev => ({ ...prev, name: e.target.value }))} value={draft.name} />
                        <input type="text" placeholder="Phone Number" onChange={(e) => setDraft(prev => ({ ...prev, phone: e.target.value }))} value={draft.phone} />


                        <div className={styles.saveCustomer}>
                            <input type="checkbox" id="saveInventory" defaultChecked />
                            <label htmlFor="saveInventory">Save</label>
                        </div>
                        <button className={styles.addCustomersBtn} disabled={!draft.name || !draft.phone} onClick={() => {
                            setCurrentCustomer(prev => [...prev, draft]);
                            setDraft({ name: "", phone: "" });
                        }}>Add customer</button>
                    </div>



                    <div className={styles.customers}>
                        {currentCustomer.map((item, index) => {
                            return (
                                <div className={styles.customerCard} key={index}>
                                    <div className={styles.customerCardInfoSection}>

                                        <div className={styles.customerImage}>
                                            {item.name[0]}
                                        </div>
                                        <div className={styles.customerDetails}>
                                            <p>{item.name}</p>
                                            <p className={styles.customerPrice}> {item.phone}</p>
                                        </div>


                                    </div>
                                    <div className={styles.customerCardActions}>
                                        <input type="radio" name="selectedCustomer" value={index} />
                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>
            )}
            {customers.length > 0 && (
                <div className={styles.normalState}>
                    <div className={styles.searchbar}>
                        {search}
                        <input type="text" placeholder="search by phone or name"
                        />
                    </div>
                    <h4>Customers</h4>

                    <div className={styles.customers}>
                        {customers.map((customer, index) => (
                            <label className={styles.customerCard} key={customer.id} htmlFor={`customer-${customer.id}`}>
                                <div className={styles.customerCardInfoSection}>
                                    <div className={styles.customerImage}>
                                        {customer.name[0]}
                                    </div>

                                    <div className={styles.customerDetails}>
                                        <p>{customer.name}</p>
                                        <p className={styles.customerPrice}>
                                            {customer.phone}
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.customerCardActions}>
                                    <input id={`customer-${customer.id}`} type="radio" name="selectedCustomer" value={index} />
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Customer;
