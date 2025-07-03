import type { CardProps } from "../Card/types";

export type Props = {
  cards: CardProps[];
  min: number;
  max: number;
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  onClose: () => void;
};
