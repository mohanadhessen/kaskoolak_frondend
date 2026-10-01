import styles from "./TableFooter.module.css";
import { Icon } from "@iconify/react";

function TableFooter() {
  const ellipsis = <Icon icon="lucide:ellipsis" height="1.5rem" />;
  const right = <Icon icon="lucide:chevron-right" height="1.5rem" />;
  const left = <Icon icon="lucide:chevron-left" height="1.5rem" />;

  return <div className={styles.ordersFooter}>
    <button className={`${styles.footerButton} ${styles.left}`}>{left}</button>
    <ul><li><button className={`${styles.footerButton} ${styles.selected}`}>1</button></li><li><button className={styles.footerButton}>2</button></li><li><button className={styles.footerButton}>3</button></li><li><button className={styles.footerButton}>{ellipsis}</button></li><li><button className={styles.footerButton}>7</button></li></ul>
    <button className={`${styles.footerButton} ${styles.right}`}>{right}</button>
  </div>;
}

export default TableFooter;
