import { useRef, useEffect } from "react";
import * as echarts from "echarts";
import styles from "./Shipment.module.css";

const data = [
    {
        name: "Delivered",
        value: 680,
        itemStyle: { color: "var(--color-shipped)" }
    },
    {
        name: "In Transit",
        value: 200,
        itemStyle: { color: "var(--color-transit)" }
    },
    {
        name: "Exception",
        value: 80,
        itemStyle: { color: "var(--color-exception)" }
    },
    {
        name: "Returned",
        value: 120,
        itemStyle: { color: "var(--color-returned)" }
    }
];

function resolveColor(cssVar) {
    const temp = document.createElement("div");
    temp.style.color = cssVar;
    document.body.appendChild(temp);
    const resolved = getComputedStyle(temp).color;
    document.body.removeChild(temp);
    return resolved;
}

function getResolvedData() {
    return data.map((d) => ({
        ...d,
        itemStyle: { color: resolveColor(d.itemStyle.color) }
    }));
}

export default function Shipment() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const chart = echarts.init(chartRef.current);
        chartInstance.current = chart;

        const resolvedData = getResolvedData();

        const option = {
            tooltip: {
                trigger: "item",
                appendTo: () => document.body,
                extraCssText: "z-index: 9999;"
            },
            legend: {
                orient: "horizontal",
                bottom: 0,
                left: "center",
                textStyle: {
                    fontSize: 11
                },
                itemWidth: 14,
                itemHeight: 10,
                itemGap: 8
            },
            series: [
                {
                    type: "pie",
                    radius: ["40%", "65%"],
                    center: ["50%", "45%"],
                    padAngle: 5,
                    itemStyle: {
                        borderRadius: 10
                    },
                    label: {
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 14,
                            fontWeight: "bold",
                            formatter: "{b}\n{d}%"
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.2)"
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: resolvedData
                }
            ]
        };

        chart.setOption(option);

        const ro = new ResizeObserver(() => {
            chart.resize();
        });
        ro.observe(chartRef.current);

        return () => {
            ro.disconnect();
            chart.dispose();
        };
    }, []);

    return (
        <div className={styles.Shipment}>
            <div className={styles.chartContainer} ref={chartRef} />
        </div>
    );
}