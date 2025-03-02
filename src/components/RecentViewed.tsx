"use client";
import styles from "@/styles/main.module.scss";
import { useUserStore } from "@/store/useUserStore";
import Card from "@/components/UI/Card";

const RecentViewed: React.FC = () => {
  const { users, currentUser } = useUserStore();
  const recentViewed = currentUser
    ? users[currentUser]?.recentViewed || []
    : [];
  return (
    <div>
      <div className={styles.BorderTopSection3}>&nbsp;</div>
      <div className={styles.sectionTitle}>
        RECENT
        <span className={styles.titletagline}>&nbsp;- GET ALL INSIGHTS</span>
      </div>
      <div className={styles.favoritesBody}>
        {recentViewed.length === 0 ? (
          <p className={styles.favoritesMessage}>No recently viewed cryptos.</p>
        ) : (
          <div className={styles.cryptoGrid}>
            {recentViewed.map((crypto) => (
              <Card
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                image={crypto.image}
                price={crypto.price}
                marketCap={crypto.marketCap}
                volume={crypto.volume}
                symbol={crypto.symbol}
                onAddFavorite={() => {}}
                onClick={() => {}}
                clickEnable={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentViewed;
