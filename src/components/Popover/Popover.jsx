import styles from "./Popover.module.css";
import React, { useState, useEffect, useRef } from "react";


export default function Popover({ trigger, children }) {
    const [isOpen, setIsOpen] = useState(false);

    let popRef = useRef();

    useEffect(() => {

        let handler = (e) => {
            if (!popRef.current.contains(e.target)) { setIsOpen(false) }
        }

        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown",handler)
        }
    })


    return (
        <div className={styles.wrapper} ref={popRef}>
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

