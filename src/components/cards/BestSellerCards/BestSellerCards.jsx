import styles from "./BestSellerCards.module.css";
import blusherImg from "../../../assets/blusher.jpg";
import mascaraImg from "../../../assets/mascara.jpg";
import eyebrowGelImg from "../../../assets/eyebrow-gel.jpg";
import eyelinerImg from "../../../assets/eyeliner.jpg";
import noteLipstickImg from "../../../assets/note-lipstick.jpg";
import gucciWalletImg from "../../../assets/gucci-wallet.jpg";
import Tooltip from "../../Tooltip/Tooltip";


const MOCK_BEST_SELLERS = [
  {
    id: 1,
    name: "Blusher",
    image: blusherImg,
    price: "E£ 120",
    sold: 320,
    stock: 48,
  },
  {
    id: 2,
    name: "Mascara",
    image: mascaraImg,
    price: "E£ 180",
    sold: 280,
    stock: 12,
  },
  {
    id: 3,
    name: "Eyebrow Gel",
    image: eyebrowGelImg,
    price: "E£ 95",
    sold: 240,
    stock: 65,
  },
  {
    id: 4,
    name: "Eyeliner",
    image: eyelinerImg,
    price: "E£ 150",
    sold: 195,
    stock: 8,
  },

];


export default function BestSellerCards() {
  return (
    <div className={styles.bestSellers}>
      <div className={styles.bestSellersHeader}>
        <h3>Top Products</h3>
        <a href="/orders">View All</a>
      </div>
      <div className={styles.bestSellersBody}>
        {MOCK_BEST_SELLERS.map((item) => (
          <div className={styles.bestSellersCard} key={item.id}>
            <div className={styles.procutInfo}>
              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>
                <h4 className={styles.bestSellersPrice}>{item.price}</h4>
              </div>
            </div>

            <h4>{item.sold}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
