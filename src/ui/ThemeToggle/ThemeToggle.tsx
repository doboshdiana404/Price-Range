import styles from "./ThemeToggle.module.css";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className={styles.switchWrapper}>
      <span className={styles.label}>Dark mode</span>
      <div className={styles.switch}>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className={styles.slider} />
      </div>
    </label>
  );
};

export default ThemeToggle;
