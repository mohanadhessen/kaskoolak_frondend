import styles from "./Order.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import blusherImg from "../../../assets/blusher-resized-imageresizer.dev.webp";
import mascaraImg from "../../../assets/mascara-resized-imageresizer.dev.webp";
import eyebrowGelImg from "../../../assets/eyebrow-gel-resized-imageresizer.dev.webp";
import eyelinerImg from "../../../assets/eyeliner-resized-imageresizer.dev.webp";




const products = [
    { id: 1, name: "Blusher", image: blusherImg, price: 120, sold: 320, stock: 48 },
    { id: 2, name: "Mascara", image: mascaraImg, price: 180, sold: 280, stock: 8 },
    { id: 3, name: "Eyebrow Gel", image: eyebrowGelImg, price: 95, sold: 240, stock: 65 },
    { id: 4, name: "Eyeliner", image: eyelinerImg, price: 150, sold: 195, stock: 18 },
    { id: 5, name: "Lip Gloss", image: "", price: 110, sold: 180, stock: 32 },
    { id: 6, name: "Foundation", image: "", price: 250, sold: 165, stock: 24 },
    { id: 7, name: "Concealer", image: "", price: 175, sold: 150, stock: 41 },
    { id: 8, name: "Highlighter", image: "", price: 135, sold: 125, stock: 27 },
    { id: 9, name: "Lipstick", image: "", price: 145, sold: 110, stock: 19 },
    { id: 10, name: "Setting Powder", image: "", price: 160, sold: 95, stock: 36 }
];




const clipboardIcon = <Icon icon="lucide:clipboard" height="2em" />;
const search = <Icon icon="lucide:search" height="1.2rem" />


function Order() {
    const [currentItems, setCurrentItems] = useState([

    ]);

    const [draft, setDraft] = useState({
        name: "",
        price: "",
        quantity: ""
    });


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
                        <input type="text" placeholder="Product Name" onChange={(e) => setDraft(prev => ({ ...prev, name: e.target.value }))} value={draft.name} />

                        <div className={styles.productInfo}>
                            <input type="number" placeholder="price (E£)" onChange={(e) => setDraft(prev => ({ ...prev, price: e.target.value }))} value={draft.price} />
                            <input type="number" placeholder="Qty" min="1" onChange={(e) => setDraft(prev => ({ ...prev, quantity: e.target.value }))} value={draft.quantity} />
                        </div>
                        <div className={styles.save}>
                            <input type="checkbox" id="saveInventory" defaultChecked />
                            <label htmlFor="saveInventory">Save to inventory</label>
                        </div>
                        <button className={styles.addItemsBtn} disabled={!draft.name || !draft.price || !draft.quantity} onClick={() => {
                            setCurrentItems(prev => [...prev, draft]);
                            setDraft({ name: "", price: "", quantity: "" });
                        }}>Add to order</button>
                    </div>
                    <div className={styles.products}>

                        {currentItems.map((item, index) => {
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
                                        <button type="button" onClick={() => setCurrentItems(prev => prev.map((e, i) => i === index ? { ...e, quantity: Math.max(1, e.quantity - 1) } : e))}>−</button>
                                        <input type="number" min="1" value={item.quantity} onChange={(e) => setCurrentItems(prev => prev.map((i, itemIndex) => itemIndex === index ? { ...i, quantity: Math.max(1, Number(e.target.value)) } : i))} />
                                        <button type="button" onClick={() => setCurrentItems(prev => prev.map((e, i) => i === index ? { ...e, quantity: e.quantity + 1 } : e))}>+</button>

                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>
            )}
            {products.length > 0 && (
                <div className={styles.normalState}>
                    <div className={styles.searchbar}>
                        {search}
                        <input type="text" placeholder="search for products" />
                    </div>

                    <h4>Frequently ordered</h4>

                    <div className={styles.products}>
                        {products.map((product, index) => (
                            <div className={styles.productCard} key={product.id}>
                                <div className={styles.productCardInfoSection}>
                                    {product.image ? <img src={product.image} alt={product.name} className={styles.image} /> : <div className={styles.image}>
                                        {product.name[0]}
                                    </div>}
                                    <div className={styles.namePriceContainer}>

                                        <p>{product.name}</p>
                                        <p className={styles.productPrice}>E£ {product.price}</p>
                                    </div>
                                </div>
                                <div className={styles.productCardActionSection}>
                                    {currentItems.some(item => item.name === product.name) ? (
                                        (() => {
                                            const index = currentItems.findIndex(item => item.name === product.name);
                                            const item = currentItems[index];
                                            return (
                                                <>
                                                    <button type="button" onClick={() => setCurrentItems(prev => prev.map((e, i) => i === index ? { ...e, quantity: Math.max(1, e.quantity - 1) } : e))}>−</button>
                                                    <input type="number" min="1" value={item.quantity} onChange={e => setCurrentItems(prev => prev.map((i, itemIndex) => itemIndex === index ? { ...i, quantity: Math.max(1, Number(e.target.value)) } : i))} />
                                                    <button type="button" onClick={() => setCurrentItems(prev => prev.map((e, i) => i === index ? { ...e, quantity: e.quantity + 1 } : e))}>+</button>
                                                </>
                                            );
                                        })()
                                    ) : (
                                        <button className={styles.addBtn} onClick={() => setCurrentItems(prev => [...prev, { name: product.name, price: product.price, quantity: 1 }])}>Add</button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

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
    );
}

export default Order;






