import styles from "./Customers.module.css";

import DashboardCard from "../../DashboardCard/DashboardCard";

import React, { useEffect, useState } from "react";

const data = [
    {
        users: "Users",
        new_users: 5240,
        returning_users: 3850
    }
];

function Customers() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let start;
        const duration = 1000;

        const animate = (timestamp) => {
            if (!start) start = timestamp;

            const elapsed = timestamp - start;
            const value = Math.min(elapsed / duration, 1);

            // ease-out
            const eased = 1 - Math.pow(1 - value, 3);

            setProgress(eased);

            if (value < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    const newUsers = data[0].new_users;
    const returningUsers = data[0].returning_users;

    const total = newUsers + returningUsers;

    const newPercentage = newUsers / total;
    const returningPercentage = returningUsers / total;

    const width = 400;
    const height = 120;
    const radius = 8;
    const gap = 6;

    const finalReturningWidth = width * returningPercentage - gap / 2;
    const finalNewWidth = width * newPercentage - gap / 2;

    const returningWidth = finalReturningWidth * progress;
    const newWidth = finalNewWidth * progress;

    const returningTextX = (returningWidth - finalReturningWidth) + 12;
    const newTextX = width - newWidth + 12;

    return (
        <DashboardCard
            className={styles.customers}
            title="Total Customers"
            value={1200}
            change="79%"
            previousValue={683}
            previousText="last month"
        >
            <div className={styles.timeline}>
                <svg
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    style={{ overflow: "hidden" }}
                >
                    <defs>
                        {/* Clip path matching the returning users bar */}
                        <clipPath id="clip-returning">
                            <rect
                                x={0}
                                y={0}
                                width={Math.max(returningWidth, 0)}
                                height={height}
                            />
                        </clipPath>
                        {/* Clip path matching the new users bar */}
                        <clipPath id="clip-new">
                            <rect
                                x={width - Math.max(newWidth, 0)}
                                y={0}
                                width={Math.max(newWidth, 0)}
                                height={height}
                            />
                        </clipPath>
                    </defs>

                    {/* Returning users - BLUE - LEFT */}
                    <rect
                        x={0}
                        y={0}
                        width={Math.max(returningWidth, 0)}
                        height={height}
                        rx={radius}
                        fill="#3F72AF"
                    />

                    {/* Square inner edge */}
                    <rect
                        x={Math.max(returningWidth - radius, 0)}
                        y={0}
                        width={radius}
                        height={height}
                        fill="#3F72AF"
                    />

                    {/* Returning users number - slides from left with blue bar */}
                    <text
                        x={returningTextX}
                        y={height - 12}
                        textAnchor="start"
                        dominantBaseline="auto"
                        fill="#FFFFFF"
                        fontSize="24"
                        fontWeight="600"
                        clipPath="url(#clip-returning)"
                    >
                        {returningUsers.toLocaleString()}
                    </text>

                    {/* New users - GRAY - RIGHT */}
                    <rect
                        x={width - Math.max(newWidth, 0)}
                        y={0}
                        width={Math.max(newWidth, 0)}
                        height={height}
                        rx={radius}
                        fill="#DBE2EF"
                    />

                    {/* Square inner edge */}
                    <rect
                        x={width - Math.max(newWidth, 0)}
                        y={0}
                        width={radius}
                        height={height}
                        fill="#DBE2EF"
                    />

                    {/* New users number - slides from right with gray bar */}
                    <text
                        x={newTextX}
                        y={height - 12}
                        textAnchor="start"
                        dominantBaseline="auto"
                        fill="#3F72AF"
                        fontSize="24"
                        fontWeight="600"
                        clipPath="url(#clip-new)"
                    >
                        {newUsers.toLocaleString()}
                    </text>
                </svg>
                <div className={styles.labels}>
                    <div className={styles.label}>
                        <span
                            className={styles.dot}
                            style={{ backgroundColor: "#3F72AF" }}
                        />
                        <span>Returning users</span>
                    </div>

                    <div className={styles.label}>
                        <span
                            className={styles.dot}
                            style={{ backgroundColor: "#DBE2EF" }}
                        />
                        <span>New users</span>
                    </div>
                </div>
            </div>
        </DashboardCard>
    );
}

export default Customers;