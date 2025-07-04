import CardsPage from "./components/CardsPage/CardsPage";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.appWrap}>
      <div className={`container ${styles.appWindow}`}>
        <CardsPage />
      </div>
    </div>
  );
}

export default App;
