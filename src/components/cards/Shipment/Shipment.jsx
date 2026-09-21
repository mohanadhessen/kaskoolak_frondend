import styles from "./Shipment.module.css";
import ReactECharts from "echarts-for-react";


const data = [
    {
        value: 680,
        name: "Delivered",
        itemStyle: { color: "#2E8B57" },
    },
    {
        value: 200,
        name: "In Transit",
        itemStyle: { color: "#F4B942" },
    },
    {
        value: 80,
        name: "Exception",
        itemStyle: { color: "#B85C38" },
    },
    {
        value: 120,
        name: "Returned",
        itemStyle: { color: "#D64545" },
    },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

const option = {
    title: {
        text: 'Shipment',
        subtext: `toal ${total}`,
        left: 'center',
        padding: 0,
        top: 0,
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        bottom: 0,
        left: 'center',
        padding: 0,
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 8,
                borderColor: '#fff',
                borderWidth: 4
            },
            label: {
                show: false,
                position: 'center'
            },

            labelLine: {
                show: false
            },
            data: data
        }
    ]
};

export default function Shipment() {
    return (
        <div className={styles.Shipment}>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    );
}