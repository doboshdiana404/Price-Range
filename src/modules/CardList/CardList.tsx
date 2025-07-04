import { useState } from "react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import type { SortOption } from "../../components/SortButtons/types";
import SortButtons from "../../components/SortButtons/SortButtons";
import type { CardType } from "./types";

const CardList = ({ cards }: { cards: CardType[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(10);
  const [sortOption, setSortOption] = useState<SortOption>("Lowest price");
  const sortedCards = [...cards].sort((a, b) => {
    switch (sortOption) {
      case "Lowest price":
        return a.price - b.price;
      case "Newest Listings":
        return b.year - a.year;
      case "Closest":
        if (a.city === "Kyiv" && b.city !== "Kyiv") return -1;
        if (a.city !== "Kyiv" && b.city === "Kyiv") return 1;
        return 0;
      case "Specification":
        return a.description.localeCompare(b.description);
      case "Retailer":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedCards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = sortedCards.slice(startIndex, startIndex + cardsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div style={{ paddingTop: "24px" }}>
      <h2 style={{ fontSize: "27px", marginBottom: "30px" }}>
        {sortedCards.length} bikes found
      </h2>
      <SortButtons
        sortOption={sortOption}
        onChange={(option) => {
          setSortOption(option);
          setCurrentPage(1);
        }}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {currentCards.map(
        (card: {
          id: number;
          title: string;
          description: string;
          price: number;
          city: string;
        }) => (
          <Card key={card.id} {...card} />
        )
      )}
    </div>
  );
};

export default CardList;
