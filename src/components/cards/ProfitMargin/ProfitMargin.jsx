import styles from "./ProfitMargin.module.css";
import DashboardCard from "../../DashboardCard/DashboardCard";

function ProfitMargin() {
    return (
        <DashboardCard
            className={styles.orders}
            title="Profit Margin"
            value={28}
            previousValue={24}
        >
        </DashboardCard>
    );
}

export default ProfitMargin;
