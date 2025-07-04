export type SortOption =
  | "Lowest price"
  | "Closest"
  | "Newest Listings"
  | "Specification"
  | "Retailer";

export interface Props {
  sortOption: SortOption;
  onChange: (option: SortOption) => void;
}
