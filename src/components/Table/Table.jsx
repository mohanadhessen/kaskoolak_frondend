import styles from "./Table.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";

const ellipsis = <Icon icon="lucide:ellipsis" height="1.5em" />;
const filter = <Icon icon="fluent:filter-12-filled" height="1.25em" />;

const orders = [
  { order: "#ORD15", customer: "عبد الرحمن كمال", amount: 160, courier: "Bosta", status: "Completed", date: "12 SEP 2026" },
  { order: "#ORD14", customer: "محمد فاروق", amount: 140, courier: "Aramex", status: "Cancelled", date: "25 AUG 2026" },
  { order: "#ORD13", customer: "محمد فاروق", amount: 130, courier: "R2S", status: "Pending", date: "16 JUL 2026" },
  { order: "#ORD12", customer: "محمد فاروق", amount: 130, courier: "Mylerz", status: "Completed", date: "8 JUN 2026" },
  { order: "#ORD11", customer: "محمد فاروق", amount: 130, courier: "Bosta", status: "Completed", date: "21 MAY 2026" },
  { order: "#ORD10", customer: "حلا احمد", amount: 180, courier: "Aramex", status: "Pending", date: "7 APR 2026" },
  { order: "#ORD9", customer: "بهنس", amount: 100, courier: "R2S", status: "Cancelled", date: "30 MAR 2026" },

];






function Table() {

  const [isCheckedAll, setIsCheckedAll] = useState(false);

  return (
    <div className={styles.tableContainer}>
      <div className={styles.labels}>
        <ul >
          <li className={styles.orderId}>
            <input type="checkbox" checked={isCheckedAll} onChange={(e) => setIsCheckedAll(e.target.checked)} />
            <span>Order</span>
          </li>
          <li>Customer <button type="button">{filter}</button></li>
          <li>Amount <button type="button">{filter}</button></li>
          <li>Courier <button type="button">{filter}</button></li>
          <li>Status <button type="button">{filter}</button></li>
          <li>Date <button type="button">{filter}</button></li>
          <li>Actions </li>
        </ul>
      </div>
      <div className={styles.orderTable}>
        {orders.map((order) => {

          const [isChecked, setIsChecked] = useState(false);
          return (
            <ul className={isChecked ? styles.selected : ""}>
              <li className={styles.orderId}>
                <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                <span className={styles.orderIdText}>{order.order}</span>
              </li>
              <li className={styles.customer}>{order.customer}</li>
              <li className={styles.amount}>E£ {order.amount}</li>
              <li className={styles.courier}>{order.courier}</li>
              <li className={styles.status}
                style={{
                  color:
                    order.status === "Completed"
                      ? "var(--color-shipped)"
                      : order.status === "Pending"
                        ? "var(--color-transit)"
                        : "var(--color-returned)"
                }}
              >
                <span
                  className={styles.suqre}
                  style={{
                    backgroundColor:
                      order.status === "Completed"
                        ? "var(--color-shipped)"
                        : order.status === "Pending"
                          ? "var(--color-transit)"
                          : "var(--color-returned)"
                  }}
                />
                {order.status}
              </li>
              <li className={styles.date}>{order.date}</li>
              <li className={styles.Action}><button type="button">{ellipsis}</button></li>
            </ul>
          )
        })}
      </div>
    </div>
  );
}

export default Table;