import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import styles from "./PriceFilter.module.css";
import { generatePriceHistogram } from "../../utils/generatePriceHistogram";
import type { Props } from "./types";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";

const PriceFilter = ({
  cards,
  min,
  max,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  onClose,
}: Props) => {
  const binSize = 20;
  const histogram = generatePriceHistogram(cards, binSize);
  const maxCount = Math.max(...histogram.map((bin) => bin.count));

  const handleChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setMinPrice(value[0]);
      setMaxPrice(value[1]);
    }
  };

  const handleBarClick = (index: number) => {
    const start = min + binSize * index;
    const end = start + binSize - 1;
    setMinPrice(start);
    setMaxPrice(end);
  };

  return (
    <div className={styles.priceFilter}>
      <div className={styles.titleAndCloseWrap}>
        <h2 className={styles.filtersTitle}>Filters</h2>
        <button onClick={onClose} className={styles.closeBtn}>
          <svg width={20} height={20}>
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>
      </div>
      <div className={styles.priceHeader}>
        <div className={styles.priceRangeInfo}>
          <span className={styles.label}>Price Range</span>
          <span className={styles.average}>
            The average nightly price is $
            {Math.round((minPrice + maxPrice) / 2)}
          </span>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <div className={styles.histogramOverlay}>
          {histogram.map((bin, idx) => (
            <div
              key={idx}
              className={styles.histBar}
              title={bin.range}
              style={{
                height: `${(bin.count / maxCount) * 100}px`,
              }}
              onClick={() => handleBarClick(idx)}
            />
          ))}
        </div>

        <Slider
          range
          min={min}
          max={max}
          value={[minPrice, maxPrice]}
          onChange={handleChange}
          className={styles.customSlider}
        />
        <div className={styles.customLine}></div>
      </div>
      <div className={styles.priceInputs}>
        <div>
          <p>Min price</p>
          <p className={styles.value}>${minPrice}</p>
        </div>
        <div>
          <p>Max price</p>
          <p className={styles.value}>${maxPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
