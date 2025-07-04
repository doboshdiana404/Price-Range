type Card = {
  id: number;
  title: string;
  description: string;
  price: number;
  city: string;
  year: number;
};

const cities = ["Salisbury", "Berlin", "Kyiv", "London"];

const specifications = [
  "Road / Racing",
  "Mountain",
  "Hybrid",
  "Urban",
  "Gravel",
  "BMX",
  "Electric",
  "Touring",
];

const brands = [
  "Colnago",
  "Trek",
  "Specialized",
  "Giant",
  "Cannondale",
  "Bianchi",
];
const models = ["Carbitubo", "Domane", "Tarmac", "Fathom", "Synapse", "Aria"];
const materials = ["Carbon", "Aluminum", "Steel", "Titanium"];
const gearsets = [
  "Shimano Dura-Ace",
  "Shimano Ultegra",
  "SRAM Red",
  "SRAM Rival",
  "Campagnolo Chorus",
];
const years = Array.from({ length: 15 }, (_, i) => 2010 + i);

export const cards: Card[] = Array.from({ length: 1000 }, (_, i) => {
  const basePrice = 100;
  const randomExtra = Math.random() * 1000;
  const price = Number((basePrice + randomExtra).toFixed(2));

  const city = cities[Math.floor(Math.random() * cities.length)];
  const description =
    specifications[Math.floor(Math.random() * specifications.length)];

  const brand = brands[Math.floor(Math.random() * brands.length)];
  const model = models[Math.floor(Math.random() * models.length)];
  const material = materials[Math.floor(Math.random() * materials.length)];
  const gearset = gearsets[Math.floor(Math.random() * gearsets.length)];
  const year = years[Math.floor(Math.random() * years.length)];

  const title = `${brand} ${model} ${year} ${material} with ${gearset}`;

  return {
    id: i + 1,
    title,
    description,
    price,
    city,
    year,
  };
});
