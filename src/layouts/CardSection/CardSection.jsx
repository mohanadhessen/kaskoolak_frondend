import styles from "./CardSection.module.css";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

const CARD_DATA = [
    {
        id: "revenue",
        title: "Total Revenue",
        value: 14.085,
        previousValue: 10.650,
    },
    {
        id: "profit-margin",
        title: "Profit Margin",
        value: 28,
        previousValue: 24,
    },
    {
        id: "order-number",
        title: "Order Number",
        value: 1520,
        previousValue: 1340,
    },
    {
        id: "customers",
        title: "Total Customers",
        value: 3420,
        previousValue: 3150,
    },
    {
        id: "customer-reports",
        title: "Total Customer Reports",
        value: 85,
        previousValue: 92,
    },
];

function CardSection({ cards = CARD_DATA }) {
    return (
        <section className={styles.cardSection} aria-label="Dashboard Metrics">
            {cards.map((card) => (
                <DashboardCard
                    key={card.id || card.title}
                    title={card.title}
                    value={card.value}
                    previousValue={card.previousValue}
                />
            ))}
        </section>
    );
}

export default CardSection;
