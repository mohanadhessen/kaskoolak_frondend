import { useEffect, useRef, useState } from "react";
import styles from "./Tooltip.module.css";

const OFFSET = 20;
const SHOW_DELAY = 1000;
const HIDE_DELAY = 100;

function Tooltip({ children, text }) {
    const containerRef = useRef(null);
    const tipRef = useRef(null);
    const showTimer = useRef(null);
    const hideTimer = useRef(null);

    const [visible, setVisible] = useState(false);
    const [glide, setGlide] = useState(false);

    useEffect(() => {
        return () => {
            clearTimeout(showTimer.current);
            clearTimeout(hideTimer.current);
        };
    }, []);

    const updatePos = (e) => {
        if (!tipRef.current) return;

        const { offsetWidth: w, offsetHeight: h } = tipRef.current;

        let x = e.clientX + OFFSET;
        let y = e.clientY + OFFSET;

        if (x + w > window.innerWidth) {
            x = e.clientX - w - OFFSET;
        }

        if (y + h > window.innerHeight) {
            y = e.clientY - h - OFFSET;
        }

        tipRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleEnter = (e) => {
        clearTimeout(hideTimer.current);

        updatePos(e);

        setGlide(false);

        clearTimeout(showTimer.current);

        showTimer.current = setTimeout(() => {
            setVisible(true);
            setGlide(true);
        }, SHOW_DELAY);
    };

    const handleLeave = () => {
        clearTimeout(showTimer.current);

        hideTimer.current = setTimeout(() => {
            setVisible(false);
        }, HIDE_DELAY);
    };

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const handleMouseMove = (e) => {
            updatePos(e);
        };

        container.addEventListener("mousemove", handleMouseMove);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={styles.tooltipContainer}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <div className={styles.tooltipChildren}>
                {children}

                <div
                    ref={tipRef}
                    className={styles.tooltip}
                    style={{
                        opacity: visible ? 1 : 0,
                        visibility: visible ? "visible" : "hidden",
                        transition: glide
                            ? "opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1), visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
                            : "opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1), visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                >
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
}

export default Tooltip;
