import styles from "./DropDownItems.module.css";

export default function DropDownItems({children}) {
    return (
        <div className={styles.dropDownItems}>
            {children}
        </div>
    );
}