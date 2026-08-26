import styles from "./DashboardCard.module.css";

let trendingUp = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>
let trendingDown = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-down-icon lucide-trending-down"><path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/></svg>


function DashboardCard({
    title,
    value,
    previousValue,
    previousText,
    children,
    className
}) {
    const change = ((value - previousValue) / previousValue) * 100;
    const isPositive = change > 0;

    return (
        <div className={`${styles.card} ${className}`}>
            <h2 className={styles.title}>{title}</h2>

            <p className={styles.value}>
                {value}

                <span
                    className={`${styles.change} ${
                        isPositive
                            ? styles.changePositive
                            : styles.changeNegative
                    }`}
                >
                    {isPositive ? trendingUp : trendingDown}
                    {Math.abs(change).toFixed(1)}%
                </span>
            </p>

            <p className={styles.previousValue}>
                {`${previousValue} ${previousText}`}
            </p>

            <div className={styles.dashboard}>
                {children}
            </div>
        </div>
    );
}

export default DashboardCard;
