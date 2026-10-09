import styles from "./Table.module.css";
import TableHeader from "./TableHeader/TableHeader";
import TableContent from "./TableContent/TableContent";

function Table() {
  return (
    <div className={styles.ordersMain}>
      <div className={styles.ordersContent}>
        <TableHeader />
        <TableContent />
      </div>
    </div>
  );
}

export default Table;