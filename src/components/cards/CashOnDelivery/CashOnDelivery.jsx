import styles from "./CashOnDelivery.module.css";
import DashboardCard from "../../DashboardCard/DashboardCard";



function CashOnDelivery() {
        return (
        <DashboardCard
            className={styles.orders}
            title="Total COD"
            value={2000}
            previousValue={3150}
        >
        </DashboardCard>
    );
}

export default CashOnDelivery;