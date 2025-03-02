"use client";

import { useState } from "react";
import styles from "@/styles/main.module.scss";
import Modal from "@/components/UI/Modal";

interface CryptoCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  marketCap: number;
  volume: number;
  symbol: string;
}

const Card: React.FC<CryptoCardProps> = ({
  name,
  image,
  price,
  marketCap,
  volume,
  symbol,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.card} onClick={() => setIsModalOpen(true)}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>
        {name} ({symbol.toUpperCase()})
      </h3>
      <p className={styles.price}>${price.toLocaleString()}</p>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <p>
            <strong>Market Cap:</strong> ${marketCap.toLocaleString()}
          </p>
          <p>
            <strong>24h Volume:</strong> ${volume.toLocaleString()}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Card;
