import { useState } from "react";
import Card from "../../components/Card/Card";
import { cards } from "../../data";
import Pagination from "../../components/Pagination/Pagination";
const CardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(10);
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div>
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
