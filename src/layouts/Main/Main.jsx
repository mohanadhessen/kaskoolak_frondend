import styles from "./Main.module.css";
import Customers from "../../components/cards/Customers/Customers";
import Shipment from "../../components/cards/Shipment/Shipment";
import Revenue from "../../components/cards/Revenue/Revenue";
import CashOnDelivery from "../../components/cards/CashOnDelivery/CashOnDelivery";
import AvrageOrderValue from "../../components/cards/AvrageOrderValue/AvrageOrderValue";


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

        </div>
        <div className={styles.rightContiner}>

          <Shipment />
          <div className={styles.bestSellers}></div>
        </div>
      </div>

    </main>
  );
}

export default Main;
