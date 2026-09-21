import styles from "./Popover.module.css";
import React, { useState } from "react";


export default function Popover({ trigger, children }) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className={styles.wrapper}>
            <div onClick={() => setIsOpen(!isOpen)}>
                {trigger}
            </div>

            {isOpen && (
                <div className={styles.popover}>
                    {children}
                </div>
            )}
        </div>
    );
}

