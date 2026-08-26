import { Pie, PieChart, Cell } from "recharts";
import DashboardCard from "../../DashboardCard/DashboardCard";
import styles from "./Shipment.module.css";
const data = [
  { name: "Returned", value: 120, color: "var(--color-returned)" },
  { name: "Shipped Successfully", value: 680, color: "var(--color-shipped)" },
  { name: "In Transit", value: 200, color: "var(--color-transit)" },
];

export default function Shipment() {
  return (
    <DashboardCard
            className={styles.Shipment}
            title="Shipment Distribution"
            value={14.085}
            change="10%"
            previousValue= {15.650}
            previousText="last month"
        >
        <PieChart
            style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
            }}
            responsive
        >
            <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
            >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            </Pie>
        </PieChart>
    </DashboardCard>
  );
}