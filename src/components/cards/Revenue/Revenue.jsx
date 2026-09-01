import styles from "./Revenue.module.css";
import DashboardCard from "../../DashboardCard/DashboardCard";



function Revenue() {
    return (
        <DashboardCard
            className={styles.orders}
            title="Total Revenue"
            value={14.085}
            change="10%"
            previousValue={10.650}
            previousText="last month"
        >
        </DashboardCard>
    );
}

export default Revenue;