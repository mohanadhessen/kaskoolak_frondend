import styles from "./Main.module.css";
import { Icon } from "@iconify/react";
import CardSection from "../CardSection/CardSection";
import Shipment from "../../components/cards/Shipment/Shipment";
import BestSellerCards from "../../components/cards/BestSellerCards/BestSellerCards";
import { useEffect, useState } from "react";
import Table, { orders } from "../../components/Table/Table";
import Tooltip from "../../components/Tooltip/Tooltip";


const AMOUNT_LIMIT = 100000;

function AmountRange() {
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(AMOUNT_LIMIT);
  const minPercent = (minAmount / AMOUNT_LIMIT) * 100;
  const maxPercent = (maxAmount / AMOUNT_LIMIT) * 100;

  return (
    <div className={styles.amountFilterContainer}>
      <h3>Amount Range</h3>
      <div className={styles.amountOptions}>
        <input
          type="number"
          className={styles.amountInput}
          min="0"
          max={maxAmount}
          value={minAmount}
          onChange={(event) => setMinAmount(Math.min(Number(event.target.value), maxAmount))}
          onFocus={(event) => event.target.select()}
          
        />
        <div className={styles.amountSlider}>
          <div className={styles.amountTrack}></div>
          <div
            className={styles.amountFill}
            style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
          />
          <input
            type="range"
            aria-label="Minimum amount"
            className={`${styles.range} ${styles.rangeMin}`}
            min="0"
            max={AMOUNT_LIMIT}
            value={minAmount}
            onChange={(event) => setMinAmount(Math.min(Number(event.target.value), maxAmount))}
          />
          <input
            type="range"
            aria-label="Maximum amount"
            className={`${styles.range} ${styles.rangeMax}`}
            min="0"
            max={AMOUNT_LIMIT}
            value={maxAmount}
            onChange={(event) => setMaxAmount(Math.max(Number(event.target.value), minAmount))}
          />
        </div>
        <input
          type="number"
          className={styles.amountInput}
          min={minAmount}
          max={AMOUNT_LIMIT}
          value={maxAmount}
          onChange={(event) => setMaxAmount(Math.max(Number(event.target.value), minAmount))}
          onFocus={(event) => event.target.select()}
        />
      </div>
    </div>
  );
}

const searchOptions = ["number", "name", "id"];
const couriers = [...new Set(orders.map((order) => order.courier))];

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




function Main() {
  const SearchIcon = <Icon icon="lucide:search" height="1.5rem" />;
  const ellipsis = <Icon icon="lucide:ellipsis" height="1.5rem" />;
  const right = <Icon icon="lucide:chevron-right" height="1.5rem" />;
  const left = <Icon icon="lucide:chevron-left" height="1.5rem" />;
  const cancel = <Icon icon="lucide:x" height="1.5rem" />;
  const filter = <Icon icon="lucide:filter" height="1.5rem" />;
  const [filters, setFilters] = useState(["completed", "pending", "cancelled"])
  const [open, setOpen] = useState(false)

  return (
    <main className={styles.main}>
      <CardSection />

      <div className={styles.mainContiner}>
        <div className={styles.leftContiner}>
          <div className={styles.ordersMain}>
            <div className={styles.ordersContent}>
              <div className={styles.ordersHeader}>
                <div className={styles.titleAndFilters}>
                  <h2>Orders</h2>
                  <div className={styles.filterContainer}>

                    <div className={styles.filterContainer}>
                      {filters.slice(0, 3).map((filter) => (
                        <div className={styles.filterCard} key={filter}>
                          {filter}
                          <button
                            type="button"
                            onClick={() =>
                              setFilters(filters.filter((item) => item !== filter))
                            }
                          >
                            {cancel}
                          </button>
                        </div>
                      ))}

                      {filters.length > 3 && (
                        <button type="button" className={styles.filterNumber}>
                          +{filters.length - 3}
                        </button>
                      )}
                    </div>


                  </div>

                </div>

                <div className={styles.orderActionSection}>
                  <div className={styles.searchBar}>
                    {SearchIcon}
                    <SearchInput />
                  </div>

                  <div className={styles.filterWrapper}>
                    <Tooltip text={"filters"}>
                      <button
                        className={styles.filterBtn}
                        onClick={() => setOpen(!open)}
                      >
                        {filter}
                      </button>
                    </Tooltip>
                    {open && (
                      <div className={styles.filterPopover}>
                        <div className={styles.filterBody}>
                          <div className={styles.statusFilterContainer}>
                            <h3>status</h3>
                            <div className={styles.statusOptions}>
                              <button type="button" style={{ color: "var(--color-shipped)" }}><span style={{ display: "inline-block", width: "0.5rem", height: "0.5rem", background: "var(--color-shipped)" }} /> Completed</button>
                              <button type="button" style={{ color: "var(--color-transit)" }}><span style={{ display: "inline-block", width: "0.5rem", height: "0.5rem", background: "var(--color-transit)" }} /> Pending</button>
                              <button type="button" style={{ color: "var(--color-returned)" }}><span style={{ display: "inline-block", width: "0.5rem", height: "0.5rem", background: "var(--color-returned)" }} /> Cancelled</button>

                            </div>
                          </div>

                          <div className={styles.courierFilterContainer}>
                            <h3>Courier</h3>
                            <div className={styles.courierOptions}>
                              {couriers.map((courier) => (
                                <button type="button" key={courier}>{courier}</button>
                              ))}
                            </div>
                          </div>

                          <div className={styles.dateFilterContainer}>
                            <h3>Date</h3>
                            <div className={styles.dateOptions}>
                              <button type="button">Today</button>
                              <button type="button">This Week</button>
                              <button type="button">This Month</button>

                              <button type="button">This Year</button>
                            </div>

                          </div>

                          <AmountRange />

                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.filterPopoverFooter}>
                          <button className={styles.resetFiltersBtn}>Reset</button>
                          <button className={styles.filterSubmitBtn}>Apply</button>
                        </div>
                      </div>
                    )}
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
    </main >
  );
}

export default Main;
