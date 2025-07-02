import type { Props } from "./types";
import styles from "./Pagination.module.css";
import CardsPerPageInput from "../../ui/CardsPerPageInput/CardsPerPageInput";
import { useState } from "react";
const Pagination: React.FC<Props> = ({
  totalPages,
  currentPage,
  setCurrentPage,
  onPageChange,
}) => {
  const [cardsPerPage, setCardsPerPage] = useState(10);
  const pageGroupSize = 10;
  const currentGroup = Math.floor((currentPage - 1) / pageGroupSize);
  const currentGroupStart = currentGroup * pageGroupSize + 1;
  const currentGroupEnd = Math.min(
    currentGroupStart + pageGroupSize - 1,
    totalPages
  );
  const pages = [];
  for (let index = currentGroupStart; index <= currentGroupEnd; index++) {
    pages.push(index);
  }

  return (
    <div className={styles.paginationSection}>
      <div className={styles.paginationWrap}>
        <div>
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className={styles.paginationBtns}
          >
            First
          </button>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.paginationBtns}
          >
            Prev
          </button>
        </div>
        <div className={styles.numberPageList}>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              style={{
                backgroundColor:
                  currentPage === page ? "#e5e7eb" : "transparent",
                border: currentPage == page ? "none" : "1px solid #c7c7c7",
              }}
              className={styles.numberPage}
            >
              {page}
            </button>
          ))}
        </div>
        <div>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.paginationBtns}
          >
            Next
          </button>
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className={styles.paginationBtns}
          >
            Last
          </button>
        </div>
      </div>
      <CardsPerPageInput
        value={cardsPerPage}
        onChange={(value) => {
          setCardsPerPage(value);
          setCurrentPage(1);
        }}
      />
    </div>
  );
};

export default Pagination;
