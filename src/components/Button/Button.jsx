
import styles from "./Button.module.css";

function Button(props) {
  

  return (
    <button className={styles.primaryButton}>{props.icon}</button>
  )
}

export default Button


