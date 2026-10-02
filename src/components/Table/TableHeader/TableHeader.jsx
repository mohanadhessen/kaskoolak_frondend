import styles from "./TableHeader.module.css";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Tooltip from "../../Tooltip/Tooltip";
import { Range } from 'react-range'

const searchOptions = ["number", "name", "id"];
const couriers = ["Aramex", "Bosta", "R2S", "Mylerz", "Albarq", "In Store", "Manual"];




export const RangeSliderLabelsExample = ({ value, onChange }) => {
  const min = 0
  const max = 100000

  return <Range
    values={value}
    step={1000}
    min={min}
    max={max}
    onChange={onChange}
    renderTrack={({ props, children }) => {
      const { key, ...trackProps } = props
      return <div key={key} className={styles.amountTrack} {...trackProps}>
        <div className={styles.amountTrackFill} style={{
          left: `${((value[0] - min) / (max - min)) * 100}%`,
          width: `${((value[1] - value[0]) / (max - min)) * 100}%`,
        }} />
        {children}
      </div>
    }}
    renderThumb={({ props, index }) => {
      const { key, ...thumbProps } = props
      return <div key={key} className={styles.amountThumb} {...thumbProps}>
        <span className={styles.amountThumbLabel}>{index === 0 ? 'Min' : 'Max'}</span>
        <span className={styles.amountThumbValue}>{value[index].toLocaleString()}</span>
      </div>
    }}
  />
}







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
  const [filters, setFilters] = useState([]);
  const [amountRange, setAmountRange] = useState([0, 100000]);


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
        <Tooltip text={"Filters"}><button className={styles.filterBtn} onClick={() => SetOpen(!open)}><Icon icon="lucide:filter" height="1.5rem" /></button></Tooltip>
        {open && (
          <div className={styles.filterPopoverContainer}>

            <div className={styles.filterBody}>
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

                <div className={styles.courierOptions}>
                  {["Today", "This Week", "This Month", "This Year"].map((date) => (
                    <button key={date} className={styles.filterCard}>
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.filterSection}>
                <h4>Amount</h4>
                <RangeSliderLabelsExample value={amountRange} onChange={setAmountRange} />
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
