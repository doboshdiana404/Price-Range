type Card = {
  id: number;
  title: string;
  description: string;
  price: number;
  city: string;
};
const cities = ["Salisbury", "Berlin", "Kyiv", "London"];
export const cards: Card[] = Array.from({ length: 1000 }, (_, i) => {
  const basePrice = 100;
  const randomExtra = Math.random() * 1000;
  const price = Number((basePrice + randomExtra).toFixed(2));
  const city = cities[Math.floor(Math.random() * cities.length)];
  return {
    id: i + 1,
    title: `Colnago Carbitubo 1991 Carbon Classic with Full Dura Ace ${i + 1}`,
    description: "Road / Racing",
    price: price,
    city: city,
  };
});
