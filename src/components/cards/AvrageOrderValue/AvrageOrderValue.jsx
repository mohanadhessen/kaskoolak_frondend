import styles from "./AvrageOrderValue.module.css";
import DashboardCard from "../../DashboardCard/DashboardCard";



function AvrageOrderValue() {
        return (
        <DashboardCard
            className={styles.orders}
            title="Avrage Order Value"
            value={200}
            previousValue={150}
        >
        </DashboardCard>
    );
}

export default AvrageOrderValue;