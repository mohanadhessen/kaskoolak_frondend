import styles from "./Orders.module.css";
import DashboardCard from "../../DashboardCard/DashboardCard";
import React from "react";

import {
    LineChart,
    Line,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

const defaultData = [
    { day: 1, orders: 118 },
    { day: 2, orders: 132 },
    { day: 3, orders: 107 },
    { day: 4, orders: 141 },
    { day: 5, orders: 156 },
    { day: 6, orders: 149 },
    { day: 7, orders: 172 },
    { day: 8, orders: 138 },
    { day: 9, orders: 121 },
    { day: 10, orders: 96 },
    { day: 11, orders: 113 },
    { day: 12, orders: 127 },
    { day: 13, orders: 181 },
    { day: 14, orders: 169 },
    { day: 15, orders: 158 },
    { day: 16, orders: 145 },
    { day: 17, orders: 134 },


];
const now = new Date();

const month = now.toLocaleString("en-US", {
    month: "short"
});

const year = now.getFullYear();
const monthIndex = now.getMonth();
const lastDay = new Date(year, monthIndex + 1, 0).getDate();
const timelineLabels = [
    `1 ${month}`,
    `8 ${month}`,
    `15 ${month}`,
    `22 ${month}`,
    `${lastDay} ${month}`
];

const durations = ["1M", "6M", "1Y", "5Y"];

function CustomTooltip({ active, payload, label }) {
    if (!active || !payload || !payload.length) return null;

    return (
        <div className={styles.tooltip}>
            <div className={styles.tooltipLabel}>Day {label}</div>
            <div className={styles.tooltipValue}>{payload[0].value} orders</div>
        </div>
    );
}

function Orders({ data = defaultData }) {
    return (
        <DashboardCard
            className={styles.orders}
            title="Total orders"
            value={14.085}
            change="10%"
            previousValue= {15.650}
            previousText="last month"
        >
            <div className={styles.timelineActions}>
                {durations.map(e => <button key={e}>{e}</button>)}
            </div>
            
            <div className={styles.timeline}>
                {Array.from({ length: 6 }, (_, i) => (
                    <React.Fragment key={i}>
                        <div className={styles.solidLine}></div>

                        {i < 5 &&
                            Array.from({ length: 4 }, (_, j) => (
                                <div
                                    key={j}
                                    className={styles.dashLine}
                                ></div>
                            ))}
                    </React.Fragment>
                ))}

                <div className={styles.chartOverlay}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 8, right: 0, bottom: 8, left: 0 }}>
                            <XAxis
                                type="number"
                                dataKey="day"
                                domain={[1, lastDay]}
                                hide
                            />
                            <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                            <Tooltip
                                 content={<CustomTooltip />}
                                cursor={{
                                    stroke: "#fff",
                                    strokeWidth: 1,
                                    
                                }}
                            />
                            <Line
                                type="basis"
                                dataKey="orders"
                                stroke="var(--color-secondary)"
                                strokeWidth={2}
                                dot={false}
                                isAnimationActive={true}
                                animationDuration={1800}
                                animationEasing="ease-in-out"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className={styles.timelineLabels}>
                {timelineLabels.map((label, i) => (
                    <div key={i}>{label}</div>
                ))}
            </div>

        </DashboardCard>
    );
}

export default Orders;