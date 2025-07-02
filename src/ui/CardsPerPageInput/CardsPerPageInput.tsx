import type { Props } from "./types";
import styles from "./CardsPerPageInput.module.css";

const CardsPerPageInput: React.FC<Props> = ({
  value,
  onChange,
  min = 10,
  max = 90,
}) => {
  const increase = () => {
    if (value < max) {
      const nextValue = value + 10;
      onChange(nextValue > max ? max : nextValue);
    }
  };
  const decrease = () => {
    if (value > min) {
      const nextValue = value - 10;
      onChange(nextValue < min ? min : nextValue);
    }
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };
  return (
    <div className={styles.customInputWrap}>
      <label className={styles.labelInput}>Results per page</label>
      <div className={styles.inputCounter}>
        <input
          type="number"
          value={value}
          onChange={handleChangeInput}
          className={styles.customInput}
          min={min}
          max={max}
        />
        <div className={styles.volumeBtnsWrap}>
          <button onClick={increase} className={styles.volumeBtns}>
            <svg width={6} height={6} className={styles.volumeIcons}>
              <use href="/sprite.svg#icon-increase"></use>
            </svg>
          </button>{" "}
          <button onClick={decrease} className={styles.volumeBtns}>
            <svg width={6} height={6} className={styles.volumeIcons}>
              <use href="/sprite.svg#icon-decrease"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsPerPageInput;
