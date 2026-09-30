import { useState } from "react";
import styles from "./Tooltip.module.css";





function Tooltip({ children, text }) {
    const [clicked, setClicked] = useState(false);

    const handleMouseEnter = () => {
        setClicked(false);
    };

    const handleClick = () => {
        setClicked(true);
    };

    const handleMouseLeave = () => {
        setClicked(false);
    };

    return (
        <div
            className={styles.tooltipContainer}
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
        >
            {children}

            {!clicked && (
                <div className={styles.tooltip}>
                    {text}
                </div>
            )}
        </div>
    );
}

export default Tooltip;
