import { useState } from "react";
import { Icon } from "@iconify/react";
import IntlTelInput from "@intl-tel-input/react";
import "intl-tel-input/styles";
import styles from "./CreateOrderModal.module.css";
import Order from "./order/Order";

import Customer from "./Customer/Customer";

import Delivery from "./Delivery/Delivery";


const steps = ["customer", "order", "delivery"];

const laoding = <svg xmlns="http://www.w3.org/2000/svg"  height="1.2em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5" />
    <path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">
        <animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate" />
    </path>
</svg>




function CreateOrderModal({ onClose }) {
    const [currentStep, setCurrentStep] = useState(0);

    const [isLoading, setIsLoading] = useState(false);


    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <div className={styles.stepsContainer}>
                        {steps.map((step, index) => {
                            return (
                                <button key={step} onClick={() => setCurrentStep(index)} className={currentStep == index ? styles.active : ""}>{step}</button>
                            )
                        })}
                    </div>
                    <h2>Create Order</h2>
                </div>

                <div className={styles.modalBody}>
                    {currentStep == 0 && <Customer />}
                    {currentStep == 1 && <Order />}
                    {currentStep == 2 && <Delivery />}

                </div>

                <div className={styles.modalFooter}>
                    <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
                    <div className={styles.navigationBtnContainer}>
                        <button className={`${styles.backBtn} ${currentStep === 0 ? styles.hide : ""}`} onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
                        {currentStep < steps.length - 1 && (
                            <button className={styles.nextBtn} onClick={() => setCurrentStep(currentStep + 1)} >
                                Next: {steps[currentStep + 1]}
                            </button>
                        )}
                        {currentStep == 2 && (
                            <button className={styles.CreateOrderBtn} onClick={() => setIsLoading(true)} disabled={isLoading}>
                                {isLoading ? laoding : "Create Order"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateOrderModal;
