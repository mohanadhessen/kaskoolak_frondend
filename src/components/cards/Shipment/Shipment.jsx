import ReactECharts from "echarts-for-react";
import { useMemo, useRef, useEffect } from "react";
import styles from "./Shipment.module.css";

function getCssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function MyChart() {
    const containerRef = useRef(null);
    const chartRef = useRef(null);

    // Keep the chart's internal size in sync with its actual container size,
    // since flex/grid layout changes don't fire a window "resize" event.
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new ResizeObserver(() => {
            chartRef.current?.getEchartsInstance().resize();
        });
        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    const data = useMemo(
        () => [
            { name: "Delivered", value: 680, itemStyle: { color: getCssVar("--color-shipped") } },
            { name: "In Transit", value: 200, itemStyle: { color: getCssVar("--color-transit") } },
            { name: "Exception", value: 80, itemStyle: { color: getCssVar("--color-exception") } },
            { name: "Returned", value: 120, itemStyle: { color: getCssVar("--color-returned") } },
        ],
        []
    );

    const option = {
        tooltip: {
            trigger: "item",
        },

        legend: {
            top: 0,
            left: "center",
            orient: "horizontal",
            width: "70%",       // narrower than the container -> forces wrap to 2 rows
            itemGap: 10,
            itemWidth: 12,
            itemHeight: 10,
            textStyle: { fontSize: 12 },
        },

        series: [
            {
                name: "Shipments",
                type: "pie",
                radius: ["40%", "70%"],
                center: ["50%", "60%"], // shifted down to sit under the 2-row legend
                avoidLabelOverlap: false,
                padAngle: 5,

                itemStyle: {
                    borderRadius: 10,
                },

                label: {
                    show: false,
                },

                emphasis: {
                    label: {
                        show: false,
                    },
                },

                labelLine: {
                    show: false,
                },

                data: data,
            },
        ],
    };

    return (
        <div className={styles.Shipment} ref={containerRef}>
            <div className={styles.chartContainer}>
                <ReactECharts
                    ref={chartRef}
                    option={option}
                    style={{ height: "100%", width: "100%" }}
                />
            </div>
        </div>
    );
}

export default MyChart;