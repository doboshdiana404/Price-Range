export interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  setCurrentPage: (page: number) => void;
}
