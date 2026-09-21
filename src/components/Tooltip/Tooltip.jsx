import styles from "./Tooltip.module.css";

function Tooltip({ children, text }) {
    return (
        <div className={styles.tooltipContainer}>
            <div className={styles.tooltipChildren}>
                {children}
                <div className={styles.tooltip}>
                    <span >
                        {text}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Tooltip;
