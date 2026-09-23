import { Children, cloneElement } from "react";
import styles from "./DropDownMenu.module.css";

export default function DropDownMenu({ children, open, toggle }) {
    return (
        <div
            className={`${styles.DropDownMenu} ${open ? styles.open : ""}`}
        >
            {Children.map(children, child =>
                cloneElement(child, {
                    toggle
                })
            )}
        </div>
    );
}