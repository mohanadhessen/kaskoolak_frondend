import { useState } from "react";
import { Icon } from "@iconify/react";
import IntlTelInput from "@intl-tel-input/react";
import "intl-tel-input/styles";
import styles from "./CreateOrderModal.module.css";
import Order from "./order/Order";

const steps = ["customer", "order", "delivery"];




function CreateOrderModal({ onClose }) {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <div className={styles.stepsContainer}>
                        {steps.map((step, index) => {
                            return (
                                <button onClick={() => setCurrentStep(index)} className={currentStep == index ? styles.active : ""}>{step}</button>
                            )
                        })}
                    </div>
                    <h2>Create Order</h2>
                </div>

                <div className={styles.modalBody}>
                {currentStep == 1 &&<Order/>}
                </div>

                <div className={styles.modalFooter}>
                    <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
                    <div className={styles.navigationBtnContainer}>
                        <button className={`${styles.backBtn} ${currentStep === 0 ? styles.hide : ""}`} onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
                        <button className={styles.nextBtn} onClick={() => setCurrentStep(currentStep + 1)}>Next : {steps[currentStep]}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateOrderModal;
