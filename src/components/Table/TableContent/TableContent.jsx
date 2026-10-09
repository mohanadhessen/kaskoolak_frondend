import styles from "./TableContent.module.css";
import { Icon } from "@iconify/react";
import { memo, useState } from "react";
import CreateOrderModal from "../../Modal/CreateOrderModal";


const ellipsis = <Icon icon="lucide:ellipsis" height="1.5em" />;
const sort = <Icon icon="lucide:arrow-down-up" height="1em" />;
const pageEllipsis = <Icon icon="lucide:ellipsis" height="1.5rem" />;
const right = <Icon icon="lucide:chevron-right" height="2rem" />;
const left = <Icon icon="lucide:chevron-left" height="2rem" />;
const receipt = <Icon icon="lucide:receipt-text" height="4rem" />;
const box = <svg height="4rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"></path><path d="M3 8l9 5 9-5"></path><path d="M12 13v8"></path></svg>
const plusIcon = <Icon icon="lucide:plus" height="1.5em" />;
const uploadIcon = <Icon icon="lucide:arrow-up-from-line" height="1.2em" />;



export const orders = [
  // { order: "#ORD15", customer: "عبد الرحمن كمال", amount: 160, courier: "Bosta", status: "Completed", date: "12 SEP 2026" },
  // { order: "#ORD14", customer: "محمد فاروق", amount: 140, courier: "Aramex", status: "Cancelled", date: "25 AUG 2026" },
  // { order: "#ORD13", customer: "محمد فاروق", amount: 130, courier: "R2S", status: "Pending", date: "16 JUL 2026" },
  // { order: "#ORD12", customer: "محمد فاروق", amount: 130, courier: "Mylerz", status: "Completed", date: "8 JUN 2026" },
  // { order: "#ORD11", customer: "محمد فاروق", amount: 130, courier: "Bosta", status: "Completed", date: "21 MAY 2026" },
  // { order: "#ORD10", customer: "حلا احمد", amount: 180, courier: "Aramex", status: "Pending", date: "7 APR 2026" },
  // { order: "#ORD9", customer: "بهنس", amount: 100, courier: "R2S", status: "Cancelled", date: "30 MAR 2026" },
  // { order: "#ORD8", customer: "أحمد", amount: 250, courier: "Albarq", status: "Pending", date: "31 MAR 2026" },

]

function OrderRow({ order }) {
  const [isChecked, setIsChecked] = useState(false);
 

  return (
    <ul className={`${styles.orderCard} ${isChecked ? styles.selected : ""}`}>
      <li className={styles.orderId}>
        <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
        <span className={styles.orderIdText}>{order.order}</span>
      </li>
      <li className={styles.customer}>{order.customer}</li>
      <li className={styles.amount}>E£ {order.amount}</li>
      <li className={styles.courier}>{order.courier}</li>
      <li className={styles.status} style={{ color: order.status === "Completed" ? "var(--color-shipped)" : order.status === "Pending" ? "var(--color-transit)" : "var(--color-returned)" }}>
        <span className={styles.suqre} style={{ backgroundColor: order.status === "Completed" ? "var(--color-shipped)" : order.status === "Pending" ? "var(--color-transit)" : "var(--color-returned)" }} />
        {order.status}
      </li>
      <li className={styles.date}>{order.date}</li>
      <li className={styles.Action}><button type="button">{ellipsis}</button></li>
    </ul>
  );
}

function TableContent() {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.tableContainer}>
      <div className={styles.labels}>
        <ul >
          <li className={styles.orderId}>
            <input type="checkbox" checked={isCheckedAll} onChange={(e) => setIsCheckedAll(e.target.checked)} />
            <span>Order</span>
          </li>
          <li>Customer <button type="button">{sort}</button></li>
          <li>Amount <button type="button">{sort}</button></li>
          <li>Courier <button type="button">{sort}</button></li>
          <li>Status <button type="button">{sort}</button></li>
          <li>Date <button type="button">{sort}</button></li>
          <li className={styles.Action}>Actions </li>
        </ul>
        <div className={styles.divider}></div>
      </div>
      {orders.length > 0 ? (
        
        <>
          <div className={styles.orderTable}> {orders.map((order) => (<OrderRow key={order.order} order={order} />))}</div>
          <div className={styles.ordersFooter}>
            <button className={`${styles.navigationBtn} ${styles.left}`}>
              {left}
            </button>

            <ul>
              <li><button className={`${styles.footerButton} ${styles.selected}`}>1</button></li>
              <li><button className={styles.footerButton}>2</button></li>
              <li><button className={styles.footerButton}>3</button></li>
              <li><button className={styles.footerButton}>{pageEllipsis}</button></li>
              <li><button className={styles.footerButton}>7</button></li>
            </ul>

            <button className={`${styles.navigationBtn} ${styles.right}`}>
              {right}
            </button>
          </div>
        </>
      ) : (
        <div className={styles.orderEmptyState}>
          <div className={styles.emptyStateIcon}>
            {box}
          </div>
          <div className={styles.emptyStateTest}>
            <h1>No orders yet</h1>
            <div className={styles.subText}>
              <h3>Orders you create or import will show up here, so </h3>
              <h3>you can follow every shipment in one place.</h3>
            </div>
          </div>
          <div className={styles.emptyStateActions}>
            <button className={styles.orderCreationBtn} onClick={() => setOpen(true)}>{plusIcon} Create Order</button>
            <button className={styles.OrderUploadBtn}>{uploadIcon}Upload orders</button>
          </div>
          {open && <CreateOrderModal onClose={() => setOpen(false)} />}
        </div>
      )}





    </div>
  );
}

export default memo(TableContent);
