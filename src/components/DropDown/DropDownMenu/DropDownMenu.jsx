import styles from "./DropDownMenu.module.css";

export default function DropDownMenu({ children, open }) {
    return (
        <div className={`${styles.DropDownMenu} ${open ? styles.open : ""}`}>
            {children}
        </div>
    );
}