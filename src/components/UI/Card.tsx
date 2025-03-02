"use client";

import { useState } from "react";
import styles from "@/styles/main.module.scss";
import Modal from "@/components/UI/Modal";
import { useUserStore } from "@/store/useUserStore";

interface CryptoCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  marketCap: number;
  volume: number;
  symbol: string;
  clickEnable: boolean;
  onAddFavorite: () => void;
  onClick: () => void;
}

const currencySymbols: Record<string, string> = {
  usd: "$",
  eur: "€",
  inr: "₹",
  gbp: "£",
  chf: "CHF",
};

const Card: React.FC<CryptoCardProps> = ({
  name,
  image,
  price,
  marketCap,
  volume,
  symbol,
  onAddFavorite,
  onClick,
  clickEnable,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedCurrency } = useUserStore();
  const currencySymbol = currencySymbols[selectedCurrency] || "";

  return (
    <div
      className={styles.card}
      onClick={() => {
        setIsModalOpen(true);
        onClick();
      }}
    >
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>
        {name} ({symbol.toUpperCase()})
      </h3>
      <p className={styles.price}>
        {currencySymbol}
        {price.toLocaleString()}
      </p>

      {isModalOpen && clickEnable && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onAddFavorite={onAddFavorite}
        >
          <p>
            <strong>Market Cap:</strong> {currencySymbol}
            {marketCap.toLocaleString()}
          </p>
          <p>
            <strong>24h Volume:</strong> {currencySymbol}
            {volume.toLocaleString()}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Card;
