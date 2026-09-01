import styles from "./DashboardCard.module.css";

const arrowUp = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
    </svg>
);

const arrowDown = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
    </svg>
);

function DashboardCard({ title, value, previousValue }) {
    const change =
        previousValue !== 0
            ? ((value - previousValue) / previousValue) * 100
            : 0;

    const isPositive = change >= 0;

    return (
        <div className={styles.DashboardCard}>

            <div className={styles.topRow}>
                <h3 className={styles.title}>{title}</h3>

                <div
                    className={`${styles.change} ${isPositive
                        ? styles.changePositive
                        : styles.changeNegative
                        }`}
                >
                    {isPositive ? "+" : "-"}
                    {Math.abs(change).toFixed(1)}%
                </div>
            </div>

            <div className={styles.middleRow}>
                <div className={styles.value}>
                    {value.toLocaleString()}
                </div>

                <div
                    className={`${styles.arrow} ${isPositive
                        ? styles.arrowPositive
                        : styles.arrowNegative
                        }`}
                >
                    {isPositive ? arrowUp : arrowDown}
                </div>
            </div>

            <div className={styles.bottomRow}>
                {isPositive ? "Up" : "Down"} {Math.abs(change).toFixed(1)}%
                this month
            </div>

        </div>
    );
}

export default DashboardCard;