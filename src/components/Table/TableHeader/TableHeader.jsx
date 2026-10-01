import styles from "./TableHeader.module.css";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Tooltip from "../../Tooltip/Tooltip";

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
  const [filters, setFilters] = useState([
    "Status",
    "Amount",
    "Date",

  ]);


  const cancel = <Icon icon="lucide:x" height="1.2rem" />;

  return <div className={styles.TableHeader}>
    <div className={styles.leftGroup}>
      <h1>Orders</h1>
      <div className={styles.filterCardsContainer}>
        {filters.length <= 3
          ? filters.map((e) => (
            <div key={e} className={styles.filterCard}>
              {e} <button onClick={() => setFilters(filters.filter(item => item !== e))}>{cancel}</button>
            </div>
          ))
          : (
            <>
              {filters.slice(0, 3).map((e) => (
                <div key={e} className={styles.filterCard}>
                  {e} <button onClick={() => setFilters(filters.filter(item => item !== e))}>{cancel}</button>
                </div>
              ))}

              <button type="button" className={styles.moreFilters}>
                +{filters.length - 3}
              </button>
            </>
          )}
      </div>

    </div>
    <div className={styles.orderActionSection}>
      <div className={styles.searchBar}><Icon icon="lucide:search" height="1.2rem" /><SearchInput /></div>
      <div className={styles.filterWrapper}>
        <Tooltip text={"Filters"}><button className={styles.filterBtn} onClick={() => setOpen(!open)}><Icon icon="lucide:filter" height="1.5rem" /></button></Tooltip>
        {open && (
          <div className={styles.filterPopoverContainer}>
            test
          </div>
        )}
      </div>
    </div>
  </div>;
}

export default TableHeader;
