import { Icon } from "@iconify/react";
import styles from "./DashboardCard.module.css";

const arrowUp = <Icon icon="lucide:arrow-up" width={16} height={16} />;
const arrowDown = <Icon icon="lucide:arrow-down" width={16} height={16} />;

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