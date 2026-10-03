import styles from "./TableHeader.module.css";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Tooltip from "../../Tooltip/Tooltip";

const searchOptions = ["number", "name", "id"];
const couriers = ["Aramex", "Bosta", "R2S", "Mylerz", "Albarq", "In Store", "Manual"];



function SearchInput() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = searchOptions[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text.length === current.length) setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length === 0) { setIsDeleting(false); setIndex((prev) => (prev + 1) % searchOptions.length); }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [text, index, isDeleting]);

  return <input type="search" name="search" id="search" placeholder={`Search by ${text}`} />;
}



function TableHeader() {
  const [open, SetOpen] = useState(false)
  const [amountRange, setAmountRange] = useState([0, 100000]);
  const emptyFilters = { couriers: [], date: null, amount: { min: 0, max: 100000 } };

  const [filters, setFilters] = useState([emptyFilters]);
  const [draft, setDraft] = useState([emptyFilters])


  const cancel = <Icon icon="lucide:x" height="1.2rem" />;

  return <div className={styles.TableHeader}>
    <div className={styles.leftGroup}>
      <h1>Orders</h1>
      <div className={styles.filterCardsContainer}>

      </div>

    </div>
    <div className={styles.orderActionSection}>
      <div className={styles.searchBar}><Icon icon="lucide:search" height="1.2rem" /><SearchInput /></div>
      <div className={styles.filterWrapper}>
        <Tooltip text={"Filters"}><button className={styles.filterBtn} onClick={() => SetOpen(!open)}><Icon icon="lucide:filter" height="1.5rem" /></button></Tooltip>
        {open && (
          <div className={styles.filterPopoverContainer}>

            <div className={styles.filterBody}>
              <div className={styles.filterSection}>
                <h4>Status</h4>
                <div className={styles.StatusOptions}>
                  <button className={styles.StatusCard} style={{ color: "var(--color-shipped)" }}><span className={styles.suqre} style={{ backgroundColor: "var(--color-shipped)" }} />Completed</button>
                  <button className={styles.StatusCard} style={{ color: "var(--color-returned)" }}><span className={styles.suqre} style={{ backgroundColor: "var(--color-returned)" }} />Cancelled</button>
                  <button className={styles.StatusCard} style={{ color: "var(--color-transit)" }}><span className={styles.suqre} style={{ backgroundColor: "var(--color-transit)" }} />Pending</button>
                </div>
              </div>

              <div className={styles.filterSection}>
                <h4>Courier</h4>
                <div className={styles.courierOptions}>
                  {couriers.map((courier) => (
                    <button key={courier} className={styles.filterCard}>
                      {courier}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.filterSection}>
                <h4>Date</h4>

                <div className={styles.dateOptions}>
                  {["Today", "This Week", "This Month", "This Year"].map((date) => (
                    <label key={date}>
                      <div className={styles.dateCard}>
                        <input
                          type="radio"
                          name="date"
                          value={date}
                        />
                        {date}
                      </div>
                    </label>
                  ))}
                </div>


              </div>

              <div className={styles.filterSection}>
                <h4>Amount</h4>
                <div className={styles.amountOptions}>
                  <input type="number" placeholder="Min" />
                  <input type="number" placeholder="Max" />
                </div>

              </div>
            </div>
            <div className={styles.filterFooter}>
              <button className={styles.clearBtn} onClick={() => setFilters([])}>Clear ALL</button>
              <button className={styles.applyBtn}>Apply Filters</button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>;
}

export default TableHeader;
