import styles from "./Main.module.css";
import Customers from "../../components/cards/Customers/Customers";
import Shipment from "../../components/cards/Shipment/Shipment";
import Revenue from "../../components/cards/Revenue/Revenue";
import CashOnDelivery from "../../components/cards/CashOnDelivery/CashOnDelivery";
import BestSellerCards from "../../components/cards/BestSellerCards/BestSellerCards";

let SearchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
let filterIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-funnel-icon lucide-funnel"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" /></svg>
let sortIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-filter-icon lucide-list-filter"><path d="M2 5h20" /><path d="M6 12h12" /><path d="M9 19h6" /></svg>
let ellipsis = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>



const rawOrders = [
  { id: "7f3a9c21-6d84-4b17-9e52-1a6c8d4f2037", orderNumber: "ORD-1", customer: "محمود السيد", number: "01012458391", status: "—", shippingMethod: "—", date: null, total: 240, numberOfItems: 2 },
  { id: "c82e4f16-9a37-45d2-b681-3f0c7e2a9154", orderNumber: "ORD-2", customer: "سارة محمد", number: "01128574632", status: "—", shippingMethod: "—", date: null, total: 105, numberOfItems: 1 },
  { id: "15b7d9e3-4c62-48af-92e1-7a3f0d8c5619", orderNumber: "ORD-3", customer: "عمر حسن", number: "10936218477", status: "—", shippingMethod: "—", date: null, total: 85, numberOfItems: 1 },
  { id: "e4a8216c-3f95-4d27-b108-6c7e2a9f4351", orderNumber: "ORD-4", customer: "منة محمود", number: "01275834196", status: "—", shippingMethod: "—", date: null, total: 115, numberOfItems: 1 },
  { id: "9d3c7f42-1a68-4e95-b207-5f8c3d6a1294", orderNumber: "ORD-5", customer: "كريم احمد", number: "01057382914", status: "—", shippingMethod: "—", date: null, total: 330, numberOfItems: 3 },
  { id: "b6e2a914-7c35-4f81-93d0-2a5e8c716439", orderNumber: "ORD-6", customer: "نورهان علي", number: "01149376258", status: "—", shippingMethod: "—", date: null, total: 140, numberOfItems: 1 },
  { id: "4a8d1f63-c925-47e0-b316-9c572e8a1046", orderNumber: "ORD-7", customer: "يوسف سامح", number: "01081736425", status: "—", shippingMethod: "—", date: null, total: 120, numberOfItems: 1 },
  { id: "f1c7a329-5e84-42d6-9b10-7a3c8f261594", orderNumber: "ORD-8", customer: "اميرة خالد", number: "01206491837", status: "—", shippingMethod: "—", date: null, total: 120, numberOfItems: 1 },
  { id: "68e3b917-2c54-4a81-bf06-1d7c9e352648", orderNumber: "ORD-9", customer: "حسن ابراهيم", number: "01173642985", status: "—", shippingMethod: "—", date: null, total: 100, numberOfItems: 1 },
  { id: "d5a9f214-8c37-46e1-a052-7b3d9f618425", orderNumber: "ORD-10", customer: "ملك احمد", number: "01048275163", status: "—", shippingMethod: "—", date: null, total: 165, numberOfItems: 2 },
  { id: "3c7e1a96-f245-4b80-9d13-6a8f2c571904", orderNumber: "ORD-11", customer: "اسلام محمود", number: "01195837264", status: "—", shippingMethod: "—", date: null, total: 130, numberOfItems: 1 },
  { id: "a2f6d813-9b47-45c1-be20-7e3a8d561924", orderNumber: "ORD-12", customer: "ريم محمد", number: "01273649185", status: "—", shippingMethod: "—", date: null, total: 130, numberOfItems: 1 },
  { id: "7e4b9c25-1d63-48f0-a712-5c8e3f296104", orderNumber: "ORD-13", customer: "طارق حسين", number: "01062947318", status: "—", shippingMethod: "—", date: null, total: 130, numberOfItems: 1 },
  { id: "c1d8a537-6f24-4be9-9013-7a5e2c864190", orderNumber: "ORD-14", customer: "مي احمد", number: "01138472695", status: "—", shippingMethod: "—", date: null, total: 140, numberOfItems: 1 },
  { id: "5f9a2c71-e438-46d0-b815-3e7c1a924658", orderNumber: "ORD-15", customer: "عبدالله رجب", number: "01095163827", status: "—", shippingMethod: "—", date: null, total: 145, numberOfItems: 1 },
  { id: "e7c3b916-2a54-4d81-9f06-5b8e1c374620", orderNumber: "ORD-16", customer: "جنى خالد", number: "01214863975", status: "—", shippingMethod: "—", date: null, total: 85, numberOfItems: 1 },
  { id: "1a6f8d32-c947-45e0-b713-9c5e2a864109", orderNumber: "ORD-17", customer: "دينا محمود", number: "01157284630", status: "—", shippingMethod: "—", date: null, total: 115, numberOfItems: 1 },



];


let right = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
let left = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>


function OrdersCard({
  orderNumber,
  customer,
  number,
  status,
  date,
  total,
  numberOfItems,
  shippingMethod,
}) {
  return (
    <div className={styles.ordersCard}>
      <ul>
        <li className={styles.idContiner}>
          <input type="checkbox" />
          <span>{orderNumber || "—"}</span>
        </li>

        <li>{customer || "—"}</li>
        <li>{number || "—"}</li>
        <li>{status || "—"}</li>
        <li>{date || "—"}</li>
        <li className={styles.total}>{total != null ? `${total} EG` : "—"}</li>
        <li>{numberOfItems ?? "—"}</li>
        <li>{shippingMethod || "—"}</li>

        <li className={styles.actions}>
          <button type="button">
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
        <Customers />
        <CashOnDelivery />
        <CashOnDelivery />
        <CashOnDelivery />
      </div>
      <div className={styles.mainContiner}>
        <div className={styles.leftContiner}>
          <div className={styles.orderSection}>
            <div className={styles.ordersHeader}>
              <h2>Orders</h2>
              
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