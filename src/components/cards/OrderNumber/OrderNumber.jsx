import styles from "./OrderNumber.module.css";
import DashboardCard from "../../DashboardCard/DashboardCard";

function OrderNumber() {
    return (
        <DashboardCard
            className={styles.orders}
            title="Order Number"
            value={1520}
            previousValue={1340}
        >
        </DashboardCard>
    );
}

export default OrderNumber;
