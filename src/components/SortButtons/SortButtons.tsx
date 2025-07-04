import styles from "./SortButtons.module.css";
import type { Props, SortOption } from "./types";

const options: SortOption[] = [
  "Lowest price",
  "Closest",
  "Newest Listings",
  "Specification",
  "Retailer",
];

const SortButtons: React.FC<Props> = ({ sortOption, onChange }) => {
  return (
    <div className={styles.sortWrap}>
      <span className={styles.label}>Order by</span>

      <div className={styles.buttonsWrap}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`${styles.sortButton} ${
              sortOption === option ? styles.active : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className={styles.selectWrap}>
        <select
          className={styles.select}
          value={sortOption}
          onChange={(e) => onChange(e.target.value as SortOption)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortButtons;
