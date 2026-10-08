import styles from "./Delivery.module.css";
import { Icon } from "@iconify/react";
import aramexLogo from "../../../assets/curiorsLogo/Aramex_Logo.svg";
import bostaLogo from "../../../assets/curiorsLogo/Bosta_Logo.svg";
import egyptPostLogo from "../../../assets/curiorsLogo/EgyptPost_logo.svg";
import mylerzLogo from "../../../assets/curiorsLogo/Mylerz_logos.svg";
import shipbluLogo from "../../../assets/curiorsLogo/ShipBlu_logos.svg";
import DropdownButton from "../../DropDown/DropDownButton/DropDownButton";
import DropDownItems from "../../DropDown/DropDownItems/DropDownItems";

const Couriers = [
    {
        id: "bosta",
        name: "Bosta",
        image: bostaLogo,
        connected: true,
        estimatedDelivery: "2-3",
        price: 130,
    },
    {
        id: "aramex",
        name: "Aramex",
        image: aramexLogo,
        connected: true,
        estimatedDelivery: "1",
        price: 150,
    },
    {
        id: "mylerz",
        name: "Mylerz",
        image: mylerzLogo,
        connected: false,
        estimatedDelivery: null,
        price: null,
    },
    {
        id: "shipblu",
        name: "ShipBlu",
        image: shipbluLogo,
        connected: false,
        estimatedDelivery: null,
        price: null,
    },
    {
        id: "egypt-post",
        name: "Egypt Post",
        image: egyptPostLogo,
        connected: false,
        estimatedDelivery: null,
        price: null,
    },
    {
        id: "albarq",
        name: "Albarq",
        image: "",
        connected: false,
        estimatedDelivery: null,
        price: null,
    },
];



function Delivery() {
    return (

        <div className={styles.Delivery}>
            <h4>Delivery Address</h4>
            <div className={styles.inptFiled}>
                <input type="text" placeholder="Street , building , apartment" />
            </div>
            <div className={styles.cityAndGoverement}>

                <DropdownButton text={"City"}>
                    <DropDownItems>

                    </DropDownItems>
                </DropdownButton>
                <DropdownButton text={"Goverment"}>
                    <DropDownItems>

                    </DropDownItems>
                </DropdownButton>
            </div>

            <div className={styles.inptFiled}>
                <input type="text" placeholder="Order Note" />
            </div>
            <h4>Couriers</h4>
            <div className={styles.courier}>
                {Couriers.map((courier, index) => (
                    <label className={styles.courierCard} key={courier.id} htmlFor={`courier-${courier.id}`}>
                        <div className={styles.courierCardInfoSection}>
                            <div className={styles.courierImage}>
                                {courier.image ? <img src={courier.image} alt="" /> : courier.name[0]}
                            </div>

                            <div className={styles.courierDetails}>
                                <p>{courier.name}</p>
                                <p className={styles.courierPrice}>
                                    {courier.connected
                                        ? `${courier.estimatedDelivery} day${courier.estimatedDelivery === "1" ? "" : "s"} · ${courier.price} EGP`
                                        : "Not connected"}
                                </p>
                            </div>
                        </div>

                        <div className={styles.courierCardActions}>
                            <input id={`courier-${courier.id}`} type="radio" name="selectedcourier" value={index} />
                        </div>
                    </label>
                ))}
            </div>
        </div>

    )

}

export default Delivery;
