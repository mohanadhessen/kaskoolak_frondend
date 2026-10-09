import styles from "./Main.module.css";
import CardSection from "../CardSection/CardSection";
import Shipment from "../../components/cards/Shipment/Shipment";
import BestSellerCards from "../../components/cards/BestSellerCards/BestSellerCards";
import Table from "../../components/Table/Table";

function Main() {
  return (
    <main className={styles.main}>
      <CardSection />
      <div className={styles.mainContiner}>
        <div className={styles.leftContiner}>
          <Table />
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
