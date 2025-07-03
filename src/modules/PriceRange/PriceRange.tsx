import { cards } from "../../data";
import { generatePriceHistogram } from "../../utils/generatePriceHistogram";

const PriceRange = () => {
  const bins = generatePriceHistogram(cards, 50);
  return (
    <div>
      <ul>
        {bins.map((bin, index) => (
          <li key={index}>
            {bin.range}: {bin.count} items
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceRange;
