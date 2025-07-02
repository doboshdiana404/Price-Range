import React from "react";
import type { CardProps } from "./types.ts";
import styles from "./Card.module.css";
const Card: React.FC<CardProps> = ({ title, description, price, city }) => {
  return (
    <div className={styles.itemCard}>
      <div>
        <p className={styles.cardDescription}>{description}</p>
        <h3 className={styles.nameProduct}>{title}</h3>
        <p className={styles.cardDescription}>{city}</p>
      </div>
      <p className={styles.priceProduct}>${price}</p>
    </div>
  );
};

export default Card;
