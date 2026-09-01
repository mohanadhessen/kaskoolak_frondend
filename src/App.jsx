
import Navbar from "./layouts/Navbar/Navbar";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.appContainer}>
      <Navbar />
      <div className={styles.contentArea}>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
