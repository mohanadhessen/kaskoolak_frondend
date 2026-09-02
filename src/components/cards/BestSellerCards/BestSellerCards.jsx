import styles from "./BestSellerCards.module.css";

const blusherIcon = "https://instagram.fcai21-2.fna.fbcdn.net/v/t51.82787-15/670273333_18101513326772507_7119783223893580522_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzQxMDc2OTczMDE5OTcyMjYyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=y_BUakElAhwQ7kNvwG0vhII&_nc_oc=Adrrq5NlnuAHrIvLCn5xz_vjTzX9Bv8Ln6-ytWSKnIPQOS7B4d7OD_WM8Dg8J57147g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-2.fna&_nc_gid=jEuS4D8NJPIswP8MbFwtbw&_nc_ss=7a22e&oh=00_AQJgDQwb9w3wkxWD_xuQvdttEiAuFZwmowuG85DYpv2skQ&oe=6A9C3D6F";
const mascara = "https://instagram.fcai21-4.fna.fbcdn.net/v/t51.82787-15/669431267_18084837962368966_7220420265225508949_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzQxMDc3NDQzMzMyMzIxMTc4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTAwMC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=vFQfvmvFsaUQ7kNvwHslp-S&_nc_oc=AdqA6p67L6xLQulTETsIHi2Q2VTHr3S5_3mB3XOu1t4MMyURWBYmxmeA81rPj6AjZFU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-4.fna&_nc_gid=jEuS4D8NJPIswP8MbFwtbw&_nc_ss=7a22e&oh=00_AQLK08kTq_bDwn1wEwa86j3Zjz-gkd7YdHmq-Y8pshBoRQ&oe=6A9C4592";
const eyeborow = "https://instagram.fcai21-4.fna.fbcdn.net/v/t51.82787-15/619289056_17955585537027324_8517337258317221769_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzQxMDc3NzUyMDI1NTQzNjAzMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=dmObVDILXH4Q7kNvwFaZrGv&_nc_oc=AdpwcJSeNHIVJ_Vr-vZomkANjMwVcdDUnqfgyACbGyQ2--FO99N5u94LV6-JZ8l6pjc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-4.fna&_nc_gid=jEuS4D8NJPIswP8MbFwtbw&_nc_ss=7a22e&oh=00_AQK2fyowzkIw8ksrdw2JGGIyzHwvDHfNVeTdcoY6BNQIIw&oe=6A9C47A0";
const eyeliner = "https://instagram.fcai21-4.fna.fbcdn.net/v/t51.82787-15/655460171_18100672138738414_7167696632644173212_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzQxMDc3MTkwMDI0ODczODkxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=bIAvpByUBosQ7kNvwF3Ai6m&_nc_oc=AdqhzHvM-mJzOs92kNpntNzNeMVz4bWndL6f9_r521_j513sVijUhFAlI7UXhkbKNGo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-4.fna&_nc_gid=jEuS4D8NJPIswP8MbFwtbw&_nc_ss=7a22e&oh=00_AQINmM3NWlrUwSGKYI5G0SW0JxC6P4nmchqIHs0yNiCqLA&oe=6A9C38FB";
const note = "https://instagram.fcai21-2.fna.fbcdn.net/v/t51.82787-15/651321711_18001091909907236_5820775473434594164_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzQxMDc4MDQ4OTg4OTY4NDUyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=-i4vgwe3llEQ7kNvwGvb6b_&_nc_oc=Adoq0vKmFYzIcf4hoOSj_wNiYdirIgKCg18qZuPHhqLopmLEFL-2UQPKl-Y5zUneadM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-2.fna&_nc_gid=jEuS4D8NJPIswP8MbFwtbw&_nc_ss=7a22e&oh=00_AQKUnbdb8GSVs7vXu4YD-q2msC9dPE7gW7EdD6YsXMSANA&oe=6A9C5A42";
const GucciWallet = "https://instagram.fcai21-2.fna.fbcdn.net/v/t51.82787-15/669864140_18399109891151033_3751402467566967761_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzIxNzk5MTI3MzA1NDE5Mjg3MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=C8KlUrps-cMQ7kNvwGCShJ0&_nc_oc=AdqBqTPfTCHVRiSfjr5FcmJPpy5BtSLuH2vK_o-aYGvMPA1MPTJhCGyA7jenpaqF9ko&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai21-2.fna&_nc_gid=Ehu4Iq1Mh-5J6MIpRbbBBw&_nc_ss=7a22e&oh=00_AQLH8kvqg2SBaA_UrFxtyQlNcY30pXxSOMi90CpoZEPnHg&oe=6A9C5A78";

// Helper to generate random integers between min and max inclusive
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Dynamic mock products using the provided images with randomized sold count and stock
const MOCK_BEST_SELLERS = [
  {
    id: 1,
    name: "Blusher",
    image: blusherIcon,
    price: "120 EG",
    sold: getRandomInt(100, 350),
    stock: getRandomInt(5, 80),
  },
  {
    id: 2,
    name: "Mascara",
    image: mascara,
    price: "180 EG",
    sold: getRandomInt(100, 350),
    stock: getRandomInt(5, 80),
  },
  {
    id: 3,
    name: "Eyebrow Gel",
    image: eyeborow,
    price: "95 EG",
    sold: getRandomInt(100, 350),
    stock: getRandomInt(5, 80),
  },
  {
    id: 4,
    name: "Eyeliner",
    image: eyeliner,
    price: "150 EG",
    sold: getRandomInt(100, 350),
    stock: getRandomInt(5, 80),
  },
  {
    id: 5,
    name: "Note Lipstick",
    image: note,
    price: "210 EG",
    sold: getRandomInt(100, 350),
    stock: getRandomInt(5, 80),
  },
  {
    id: 6,
    name: "Gucci Wallet",
    image: GucciWallet,
    price: "110 EG",
    sold: getRandomInt(100, 350),
    stock: getRandomInt(5, 80),
  }
];

export function BestSellerCard({
  image = blusherIcon,
  name = "Blusher",
  price = "120 EG",
  sold,
  stock,
  stockStatus,
  stockType,
  showDivider = true,
}) {
  // Generate dynamic sold count if not provided
  const displaySold = sold !== undefined ? sold : getRandomInt(80, 300);

  // Generate dynamic stock if not provided, and compute status/badge style
  const currentStock = stock !== undefined ? stock : getRandomInt(5, 60);
  const isLow = typeof currentStock === "number" ? currentStock < 25 : false;

  const displayStockStatus =
    stockStatus ?? (isLow ? "Low Stock" : "In Stock");

  const displayStockType =
    stockType ?? (isLow ? "low" : "normal");

  const formattedPrice =
    typeof price === "number" ? `${price} EG` : price;

  return (
    <>
      {showDivider && <div className={styles.divider}></div>}

      <div className={styles.card}>
        <div className={styles.product}>
          <img src={image} alt={name} />
          <span title={name}>{name}</span>
        </div>

        <ul>
          <li className={styles.price}>{formattedPrice}</li>
          <li className={styles.sold}>{displaySold}</li>
          <li
            className={`${styles.stock} ${
              styles[displayStockType] || styles.low
            }`}
          >
            {displayStockStatus}
          </li>
        </ul>
      </div>
    </>
  );
}

export default function BestSellerCards({
  title = "Best Selling Products",
  viewAllLink = "#",
  products = MOCK_BEST_SELLERS,
}) {
  return (
    <div className={styles.bestSellers}>
      <div className={styles.bestSellersHeader}>
        <h3>{title}</h3>
        <a href={viewAllLink}>View all</a>
      </div>
      <div className={styles.bestSellersBody}>
        <div className={styles.labels}>
          <span>PRODUCT</span>
          <ul>
            <li>PRICE</li>
            <li>SOLD</li>
            <li>STOCK</li>
          </ul>
        </div>
        {products.map((product) => (
          <BestSellerCard key={product.id || product.name} {...product} />
        ))}
      </div>
    </div>
  );
}
