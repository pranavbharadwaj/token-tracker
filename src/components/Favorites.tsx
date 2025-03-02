"use client";

import { useUserStore } from "@/store/useUserStore";
import Card from "@/components/UI/Card";
import styles from "@/styles/main.module.scss";

const Favorites: React.FC = () => {
  const { users, currentUser } = useUserStore();
  const favorites = currentUser ? users[currentUser]?.favorites || [] : [];
  const { removeFavorite } = useUserStore();

  return (
    <div className={styles.favoritesContainer}>
      <div className={styles.BorderTopSection2}>&nbsp;</div>
      <div className={styles.sectionTitle}>
        FAVORITES
        <span className={styles.titletagline}>&nbsp;- NEVER MISS A BEAT</span>
      </div>
      {favorites.length === 0 ? (
        <p className={styles.favoritesMessage}>No favorites added yet.</p>
      ) : (
        <div className={styles.cryptoGrid}>
          {favorites.map((crypto) => (
            <Card
              key={crypto.id}
              id={crypto.id}
              name={crypto.name}
              image={crypto.image}
              price={crypto.price}
              marketCap={crypto.marketCap}
              volume={crypto.volume}
              symbol={crypto.symbol}
              onAddFavorite={() => removeFavorite(crypto.id)}
              onClick={() => {}}
              clickEnable={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
