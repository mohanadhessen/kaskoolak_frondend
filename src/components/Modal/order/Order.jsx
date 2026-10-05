import styles from "./Order.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";

import blusherImg from "../../../assets/blusher.webp";
import mascaraImg from "../../../assets/mascara.webp";
import eyebrowGelImg from "../../../assets/eyebrow-gel.webp";
import eyelinerImg from "../../../assets/eyeliner.webp";


// { id: 1, name: "Blusher", image: blusherImg, price: "E£ 120", sold: 320, stock: 48 }, { id: 2, name: "Mascara", image: mascaraImg, price: "E£ 180", sold: 280, stock: 8 }, { id: 3, name: "Eyebrow Gel", image: eyebrowGelImg, price: "E£ 95", sold: 240, stock: 65 }, { id: 4, name: "Eyeliner", image: eyelinerImg, price: "E£ 150", sold: 195, stock: 18 }, { id: 5, name: "Lip Gloss", image: "", price: "E£ 110", sold: 180, stock: 32 }, { id: 6, name: "Foundation", image: "", price: "E£ 250", sold: 165, stock: 24 }, { id: 7, name: "Concealer", image: "", price: "E£ 175", sold: 150, stock: 41 }, { id: 8, name: "Highlighter", image: "", price: "E£ 135", sold: 125, stock: 27 }, { id: 9, name: "Lipstick", image: "", price: "E£ 145", sold: 110, stock: 19 }, { id: 10, name: "Setting Powder", image: "", price: "E£ 160", sold: 95, stock: 36 }

const products = [];




const clipboardIcon = <Icon icon="lucide:clipboard" height="2em" />;



{/* <div className={styles.searchContainer}>
    {search}
    <input type="text" placeholder="Search for products" />
</div> */}


const search = <Icon icon="lucide:search" height="1.2rem" />
function Order() {
    const [currentItems, setCurrentItems] = useState([
        {
            id: 1,
            name: "Test Product",
            price: 250,
            quantity: 24
        },
        {
            id: 2,
            name: "Another Product",
            price: 150,
            quantity: 10
        }
    ]);



    return (

        <div className={styles.order}>
            {products.length == 0 && (
                <div className={styles.productsEmptyState}>
                    <div className={`${styles.emptyStateContent} ${currentItems.length > 0 ? styles.emptyStateHidden : ""}`}>

                        {clipboardIcon}

                        <div className={styles.EmptyStateTextContainer}>
                            <h3>No products in inventory</h3>
                            <p>Add items manually or<button className={styles.uploadBtn} >Upload products</button></p>

                        </div>

                    </div>
                    <div className={styles.productFields}>
                        <input type="text" placeholder="Product Name" />

                        <div className={styles.productInfo}>
                            <input type="number" placeholder="price (E£)" />
                            <input type="number" placeholder="Qty" />
                        </div>
                        <div className={styles.save}>
                            <input type="checkbox" id="saveInventory" defaultChecked />
                            <label htmlFor="saveInventory">Save to inventory</label>
                        </div>
                        <button className={styles.addItemsBtn} disabled >Add to order</button>
                    </div>
                    <div className={styles.products}>

                        {currentItems.map((item) => {
                            return (
                                <div className={styles.productCard}>
                                    <div className={styles.productCardInfoSection}>
                                        <div className={styles.image}>
                                            {item.name[0]}
                                        </div>
                                        <div className={styles.namePriceContainer}>
                                            <p>{item.name}</p>
                                            <p className={styles.productPrice}>E£ {item.price}</p>
                                        </div>


                                    </div>
                                    <div className={styles.productCardActionSection}>
                                        <button type="button" onClick={() => setCurrentItems(prev => prev.map(e => e.id === item.id ? { ...e, quantity: Math.max(1, e.quantity - 1) } : e))}>
                                            −
                                        </button>
                                        <input type="number" min="1" defaultValue={item.quantity} value={item.quantity} />

                                        <button type="button" onClick={() => setCurrentItems(prev => prev.map(e => e.id === item.id ? { ...e, quantity: e.quantity + 1 } : e))}>
                                            +
                                        </button>

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className={styles.selectedItems}>
                        {currentItems.length == 0 && (
                            <p className={styles.selectedItemsEmptyState}>No items selected yet</p>
                        )}
                        {currentItems.length > 0 && (
                            <div className={styles.selectedItemsContent}>
                                <p>{currentItems.reduce((total, item) => total + item.quantity, 0)} Total Items</p>
                                <p>E£ {currentItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Order;