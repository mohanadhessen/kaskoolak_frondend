import styles from "./Header.module.css";

function Header() {
    let notificationIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail-icon lucide-mail"
        >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
    );

    let plusIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>

    return (
        <header className={styles.header}>
            <div className={styles.notificationContainer}>
                <button
                    className={styles.icon}
                    id="notificationIcon"
                    aria-label="Notifications"
                >
                    {notificationIcon}
                </button>
                <button className={styles.orderCreationBtn}>
                    {plusIcon}  Create Order
                </button>
            </div>
        </header>
    );
}

export default Header;
