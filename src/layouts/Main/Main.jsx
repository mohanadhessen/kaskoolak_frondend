import styles from "./Main.module.css";
import { Icon } from "@iconify/react";
import CardSection from "../CardSection/CardSection";
import Shipment from "../../components/cards/Shipment/Shipment";
import BestSellerCards from "../../components/cards/BestSellerCards/BestSellerCards";
import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";

const searchOptions = ["number", "name", "id"];

function SearchInput() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = searchOptions[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));

        if (text.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % searchOptions.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, index, isDeleting]);

  return (
    <input
      type="search"
      name="search"
      id="search"
      placeholder={`Search by ${text}`}
    />
  );
}

const SearchIcon = <Icon icon="lucide:search" width={24} height={24} />;
const ellipsis = <Icon icon="lucide:ellipsis" width={24} height={24} />;
const right = <Icon icon="lucide:chevron-right" width={24} height={24} />;
const left = <Icon icon="lucide:chevron-left" width={24} height={24} />;

function Main() {
  return (
    <main className={styles.main}>
      <CardSection />

      <div className={styles.mainContiner}>
        <div className={styles.leftContiner}>
          <div className={styles.ordersMain}>
            <div className={styles.ordersContent}>
              <div className={styles.ordersHeader}>
                <h2>Orders</h2>

                <div className={styles.orderActionSection}>
                  <div className={styles.searchBar}>
                    {SearchIcon}
                    <SearchInput />
                  </div>
                </div>
              </div>
              <Table></Table>
            </div>

            <div className={styles.ordersFooter}>
              <button className={`${styles.footerButton} ${styles.left}`}>
                {left}
              </button>

              <ul>
                <li>
                  <button className={`${styles.footerButton} ${styles.selected}`}>
                    1
                  </button>
                </li>
                <li>
                  <button className={styles.footerButton}>2</button>
                </li>
                <li>
                  <button className={styles.footerButton}>3</button>
                </li>
                <li>
                  <button className={styles.footerButton}>{ellipsis}</button>
                </li>
                <li>
                  <button className={styles.footerButton}>7</button>
                </li>
              </ul>

              <button className={`${styles.footerButton} ${styles.right}`}>
                {right}
              </button>
            </div>
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