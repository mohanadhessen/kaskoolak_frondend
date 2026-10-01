import styles from "./Main.module.css";
import CardSection from "../CardSection/CardSection";
import Shipment from "../../components/cards/Shipment/Shipment";
import BestSellerCards from "../../components/cards/BestSellerCards/BestSellerCards";
import TableHeader from "../../components/Table/TableHeader/TableHeader";
import TableContent from "../../components/Table/TableContent/TableContent";
import TableFooter from "../../components/Table/TableFooter/TableFooter";

function Main() {
  return (
    <main className={styles.main}>
      <CardSection />
      <div className={styles.mainContiner}>
        <div className={styles.leftContiner}>
          <div className={styles.ordersMain}>
            <div className={styles.ordersContent}>
              <TableHeader />
              <TableContent />
            </div>
            <TableFooter />
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
