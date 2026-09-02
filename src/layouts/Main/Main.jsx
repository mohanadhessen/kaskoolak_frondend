import styles from "./Main.module.css";
import Customers from "../../components/cards/Customers/Customers";
import Shipment from "../../components/cards/Shipment/Shipment";
import Revenue from "../../components/cards/Revenue/Revenue";
import CashOnDelivery from "../../components/cards/CashOnDelivery/CashOnDelivery";
import BestSellerCards from "../../components/cards/BestSellerCards/BestSellerCards";

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.dashboardsContainer}>
        <Revenue />
        <Customers />
        <CashOnDelivery />
        <CashOnDelivery />
        <CashOnDelivery />
      </div>
      <div className={styles.mainContiner}>
        <div className={styles.leftContiner}>
          <div className={styles.orderActions}>
          
          </div>
          
          <div className={styles.orderSection}>
            <ul>
              <li>Order ID</li>
              <li>Customer </li>
              <li>Number </li>
              <li>Status</li>
              <li>Shipping Method</li>
              <li>Date</li>
              <li>Total</li>
              <li>Number of Items</li>
            </ul>
            <div className={styles.divider}></div>
          </div>

        </div>
        <div className={styles.rightContiner}>
          <Shipment />
          <BestSellerCards />
        </div>
      </div>
    </main>
  );
}

export default Main;
