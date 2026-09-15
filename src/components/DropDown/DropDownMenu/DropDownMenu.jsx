import { useState } from "react";
import styles from "./DropDownMenu.module.css";
import { Icon } from "@iconify/react";



export default function DropDownMenu({children , open}) {


    return (
        <div className={`${styles.DropDownMenu} ${open ? styles.open : ""}`}>
            {children}
        </div>
    );
}