import { useState } from "react";
import styles from "./DropDownButton.module.css";
import { Icon } from "@iconify/react";
import DropDownMenu from "../DropDownMenu/DropDownMenu.jsx";

let DownArrow = <Icon icon="lucide:chevron-down" height="1.5em" />;
let UpArrow = <Icon icon="lucide:chevron-up" height="1.5em" />;

export default function DropdownButton({ text, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.dropdownContainer}>
            <div className={styles.dropdownWrapper}>
                <button
                    onClick={() => setOpen(prev => !prev)}
                    className={`${styles.dropdownButton} ${open ? styles.open : ""}`}
                >
                    {text}

                    <span>
                        {open ? UpArrow : DownArrow}
                    </span>
                </button>

                <DropDownMenu open={open}>
                    {children}
                </DropDownMenu>
            </div>
        </div>
    );
}