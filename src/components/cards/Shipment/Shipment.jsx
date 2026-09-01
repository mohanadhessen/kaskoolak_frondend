import { useState } from "react";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";
import DashboardCard from "../../DashboardCard/DashboardCard";
import styles from "./Shipment.module.css";



const data = [
    {
        name: "Delivered",
        value: 680,
        color: "var(--color-shipped)"
    },
    {
        name: "In Transit",
        value: 200,
        color: "var(--color-transit)"
    },
    {
        name: "Exception",
        value: 80,
        color: "var(--color-exception)"
    },
    {
        name: "Returned",
        value: 120,
        color: "var(--color-returned)"
    }
];

export default function Shipment() {
    const [selectedDate, setSelectedDate] = useState("today");
    return (
        <div className={styles.Shipment}>
            <div className={styles.chartContainer}>
                <div className={styles.chartWrapper}>
                    <div className={styles.chartInner}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    innerRadius="70%"
                                    outerRadius="100%"
                                    startAngle={180}
                                    endAngle={0}
                                    cornerRadius={4}
                                    paddingAngle={3}
                                    dataKey="value"
                                    isAnimationActive={true}
                                    activeShape={false}
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.color}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className={styles.chartCenter}>
                        <div className={styles.total}>1080</div>
                        <div className={styles.totalLabel}>shipments</div>
                    </div>
                </div>
            </div>

            <div className={styles.labelsWrapper}>
                {data.map((e) => {
                    return (
                        <div className={styles.labelContiner} key={e.name}>
                            <div className={styles.label}>
                                <span
                                    className={styles.dot}
                                    style={{ backgroundColor: e.color }}
                                />
                                {e.name}
                            </div>

                            <div className={styles.value}>
                                {e.value}
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>

    );
}