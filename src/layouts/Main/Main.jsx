import styles from "./Main.module.css";
import { Icon } from "@iconify/react";
import Revenue from "../../components/cards/Revenue/Revenue";
import ProfitMargin from "../../components/cards/ProfitMargin/ProfitMargin";
import OrderNumber from "../../components/cards/OrderNumber/OrderNumber";
import Customers from "../../components/cards/Customers/Customers";
import CustomerReports from "../../components/cards/CustomerReports/CustomerReports";
import Shipment from "../../components/cards/Shipment/Shipment";
import BestSellerCards from "../../components/cards/BestSellerCards/BestSellerCards";
import { useEffect, useRef, useState } from "react";

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


let SearchIcon = <Icon icon="lucide:search" width={24} height={24} />;
let sortIcon = <Icon icon="lucide:list-filter" width={16} height={16} />;
let ellipsis = <Icon icon="lucide:ellipsis" width={24} height={24} />;




const rawOrders = [
  { id: "7f3a9c21-6d84-4b17-9e52-1a6c8d4f2037", orderNumber: "ORD-1", customer: "محمود السيد", number: "01012458391", status: "Completed", shippingMethod: "Bosta", date: "Aug 02, 2026", total: 240, numberOfItems: 2 },
  { id: "c82e4f16-9a37-45d2-b681-3f0c7e2a9154", orderNumber: "ORD-2", customer: "سارة محمد", number: "01128574632", status: "Pending", shippingMethod: "Mylerz", date: "Aug 18, 2026", total: 105, numberOfItems: 1 },
  { id: "15b7d9e3-4c62-48af-92e1-7a3f0d8c5619", orderNumber: "ORD-3", customer: "عمر حسن", number: "10936218477", status: "Cancelled", shippingMethod: "Aramex", date: "Aug 05, 2026", total: 85, numberOfItems: 1 },
  { id: "e4a8216c-3f95-4d27-b108-6c7e2a9f4351", orderNumber: "ORD-4", customer: "منة محمود", number: "01275834196", status: "Completed", shippingMethod: "Bosta", date: "Aug 23, 2026", total: 115, numberOfItems: 1 },
  { id: "9d3c7f42-1a68-4e95-b207-5f8c3d6a1294", orderNumber: "ORD-5", customer: "كريم احمد", number: "01057382914", status: "Pending", shippingMethod: "R2S", date: "Aug 11, 2026", total: 330, numberOfItems: 3 },
  { id: "b6e2a914-7c35-4f81-93d0-2a5e8c716439", orderNumber: "ORD-6", customer: "نورهان علي", number: "01149376258", status: "Completed", shippingMethod: "Mylerz", date: "Aug 28, 2026", total: 140, numberOfItems: 1 },
  { id: "4a8d1f63-c925-47e0-b316-9c572e8a1046", orderNumber: "ORD-7", customer: "يوسف سامح", number: "01081736425", status: "Completed", shippingMethod: "Bosta", date: "Aug 07, 2026", total: 120, numberOfItems: 1 },
  { id: "f1c7a329-5e84-42d6-9b10-7a3c8f261594", orderNumber: "ORD-8", customer: "اميرة خالد", number: "01206491837", status: "Cancelled", shippingMethod: "Aramex", date: "Aug 15, 2026", total: 120, numberOfItems: 1 },
  { id: "68e3b917-2c54-4a81-bf06-1d7c9e352648", orderNumber: "ORD-9", customer: "حسن ابراهيم", number: "01173642985", status: "Pending", shippingMethod: "R2S", date: "Aug 03, 2026", total: 100, numberOfItems: 1 },
  { id: "d5a9f214-8c37-46e1-a052-7b3d9f618425", orderNumber: "ORD-10", customer: "ملك احمد", number: "01048275163", status: "Completed", shippingMethod: "Bosta", date: "Aug 22, 2026", total: 165, numberOfItems: 2 },
  { id: "3c7e1a96-f245-4b80-9d13-6a8f2c571904", orderNumber: "ORD-11", customer: "اسلام محمود", number: "01195837264", status: "Pending", shippingMethod: "Mylerz", date: "Aug 14, 2026", total: 130, numberOfItems: 1 },
  { id: "a2f6d813-9b47-45c1-be20-7e3a8d561924", orderNumber: "ORD-12", customer: "ريم محمد", number: "01273649185", status: "Completed", shippingMethod: "Bosta", date: "Aug 09, 2026", total: 130, numberOfItems: 1 },
  { id: "7e4b9c25-1d63-48f0-a712-5c8e3f296104", orderNumber: "ORD-13", customer: "طارق حسين", number: "01062947318", status: "Cancelled", shippingMethod: "Aramex", date: "Aug 26, 2026", total: 130, numberOfItems: 1 },
  { id: "c1d8a537-6f24-4be9-9013-7a5e2c864190", orderNumber: "ORD-14", customer: "مي احمد", number: "01138472695", status: "Completed", shippingMethod: "Mylerz", date: "Aug 17, 2026", total: 140, numberOfItems: 1 },
  { id: "5f9a2c71-e438-46d0-b815-3e7c1a924658", orderNumber: "ORD-15", customer: "عبدالله رجب", number: "01095163827", status: "Pending", shippingMethod: "Bosta", date: "Aug 04, 2026", total: 145, numberOfItems: 1 },
 
];



let right = <Icon icon="lucide:chevron-right" width={24} height={24} />;
let left = <Icon icon="lucide:chevron-left" width={24} height={24} />;



function Tooltip({ text, children, className = "", onlyIfTruncated = false }) {
  const [isTruncated, setIsTruncated] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!onlyIfTruncated) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const target =
      wrapper.querySelector(`.${styles.truncate}`) ||
      wrapper.firstElementChild ||
      wrapper;

    const check = () => {
      if (target) {
        setIsTruncated(target.scrollWidth > target.clientWidth);
      }
    };

    check();

    if (document.fonts?.ready) {
      document.fonts.ready.then(check);
    }

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(check);
      observer.observe(target);
      return () => observer.disconnect();
    } else {
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }
  }, [text, onlyIfTruncated]);

  const handleMouseEnter = () => {
    if (!onlyIfTruncated) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const target =
      wrapper.querySelector(`.${styles.truncate}`) ||
      wrapper.firstElementChild ||
      wrapper;
    if (target) {
      setIsTruncated(target.scrollWidth > target.clientWidth);
    }
  };

  if (!text) return children;

  const showTooltip = !onlyIfTruncated || isTruncated;

  return (
    <div
      ref={wrapperRef}
      className={`${styles.tooltipWrapper} ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {children}
      {showTooltip && (
        <span className={styles.floatingTooltip} role="tooltip">
          {text}
        </span>
      )}
    </div>
  );
}

function getStatusClass(status) {
  const s = status?.toLowerCase();
  if (s === "completed") return styles.statusDelivered;
  if (s === "pending") return styles.statusPending;
  if (s === "cancelled") return styles.statusCancelled;
  return "";
}

function OrdersCard({
  orderNumber,
  customer,

  status,
  date,
  total,
  numberOfItems,
  shippingMethod,
}) {
  const formattedTotal = total != null ? `${total} EG` : "—";

  return (
    <div className={styles.ordersCard}>
      <div className={styles.divider}></div>
      <ul>
        <li className={styles.idContiner}>
          <input type="checkbox" className={styles.checkbox} />
          <span className={styles.truncate}>{orderNumber || "—"}</span>
        </li>


        <li className={styles.customer}>
          <Tooltip text={customer} onlyIfTruncated>
            <span className={styles.truncate}>{customer || "—"}</span>
          </Tooltip>
        </li>

        <li>
          <div className={`${styles.statusItem} ${getStatusClass(status)}`}>
            <span className={styles.statusSquare} />
            <span className={styles.truncate}>{status || "—"}</span>
          </div>
        </li>

        <li className={styles.data}>
          <span className={styles.truncate}>{date || "—"}</span>
        </li>

        <li className={styles.total}>
          <span className={styles.truncate}>{formattedTotal}</span>
        </li>

        <li className={styles.items}>
          <span className={styles.truncate}>{numberOfItems ?? "—"}</span>
        </li>

        <li className={styles.shippingMethod}>
          <span className={styles.truncate}>{shippingMethod || "—"}</span>
        </li>

        <li className={styles.actions}>
          <button type="button" aria-label="Order actions">
            {ellipsis}
          </button>
        </li>
      </ul>
    </div>
  );
}


function Main() {
  return (
    <main className={styles.main}>

      <div className={styles.dashboardsContainer}>
        <Revenue />
        <ProfitMargin />
        <OrderNumber />
        <Customers />
        <CustomerReports />
      </div>

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

              <div className={styles.orderBody}>
                <div className={styles.orderLabels}>
                  <ul>
                    <li className={styles.idContiner}>
                      <input type="checkbox" className={styles.checkbox} />
                      ID
                      <button type="button" className={styles.actionBtn} aria-label="Sort">
                        {sortIcon}
                      </button>
                    </li>

                    <li>
                      CUSTOMER
                      <button type="button" className={styles.actionBtn} aria-label="Sort">
                        {sortIcon}
                      </button>
                    </li>
                    <li>
                      STATUS
                      <button type="button" className={styles.actionBtn} aria-label="Sort">
                        {sortIcon}
                      </button>
                    </li>
                    <li>
                      DATE
                      <button type="button" className={styles.actionBtn} aria-label="Sort">
                        {sortIcon}
                      </button>
                    </li>
                    <li>
                      TOTAL
                      <button type="button" className={styles.actionBtn} aria-label="Sort">
                        {sortIcon}
                      </button>
                    </li>
                    <li>
                      ITEMS
                      <button type="button" className={styles.actionBtn} aria-label="Sort">
                        {sortIcon}
                      </button>
                    </li>
                    <li>
                      COURIER
                      <button type="button" className={styles.actionBtn} aria-label="Sort">
                        {sortIcon}
                      </button>
                    </li>
                    <li></li>
                  </ul>
                  
                </div>
                <div className={styles.orderCardContiner}>
                  
                  {rawOrders.map((e)=>{
                  return(
                    <OrdersCard key={e.id} {...e} />
                  )
                  })}
                </div>
              </div>
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