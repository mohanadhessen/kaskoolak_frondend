import styles from "./CustomerReports.module.css";
import DashboardCard from "../../DashboardCard/DashboardCard";

function CustomerReports() {
    return (
        <DashboardCard
            className={styles.orders}
            title="Total Customer Reports"
            value={85}
            previousValue={92}
        >
        </DashboardCard>
    );
}

export default CustomerReports;
