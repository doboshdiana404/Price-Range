import type { CardProps } from "../components/Card/types";
import type { Histogram } from "./types";

export function generatePriceHistogram(
  cards: CardProps[],
  binSize: number = 50
): Histogram[] {
  const prices = cards.map((card) => card.price);
  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));

  const bins: Histogram[] = [];

  for (let start = minPrice; start <= maxPrice; start += binSize) {
    const end = start + binSize - 1;
    const count = cards.filter(
      (card) => card.price >= start && card.price <= end
    ).length;

    bins.push({
      range: `$${start}–${end}`,
      count,
    });
  }

  return bins;
}
