import { useState } from "react";
import { cards } from "../../data";
import CardList from "../../modules/CardList/CardList";
import PriceFilter from "../PriceFilter/PriceFilter";

const CardsPage = () => {
  const prices = cards.map((card) => card.price);
  const min = Math.floor(Math.min(...prices));
  const max = Math.ceil(Math.max(...prices));

  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);
  const [showFilters, setShowFilters] = useState(true);

  const filteredCards = cards.filter(
    (card) => card.price >= minPrice && card.price <= maxPrice
  );

  return (
    <div>
      {showFilters ? (
        <PriceFilter
          cards={cards}
          min={min}
          max={max}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          onClose={() => setShowFilters(false)}
        />
      ) : (
        <div
          style={{ paddingBottom: "34px", borderBottom: "2px solid #d1d5db" }}
        >
          <button
            onClick={() => setShowFilters(true)}
            style={{
              display: "block",
              padding: "10px 10px",
              fontWeight: "600",
              fontSize: "26px",
              backgroundColor: "transparent",
              color: "#000",
              border: "none",
              cursor: "pointer",
            }}
          >
            Filters
            <svg
              width={15}
              height={15}
              style={{ fill: "rgba(0, 0, 0, 0.6)", marginLeft: "6px" }}
            >
              <use href="/sprite.svg#icon-decrease"></use>
            </svg>
          </button>
        </div>
      )}
      <CardList cards={filteredCards} />
    </div>
  );
};

export default CardsPage;
