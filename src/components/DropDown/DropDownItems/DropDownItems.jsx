import styles from "./DropDownItems.module.css";

export default function DropDownItems({ children, onClick, toggle }) {
    return (
        <div
            className={styles.dropDownItems}
            onClick={() => {
                onClick?.();
                toggle();
            }}
        >
            {children}
        </div>
    );
}