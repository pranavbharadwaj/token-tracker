"use client";
import styles from "@/styles/main.module.scss";

const Favorites: React.FC = () => {
  return (
    <div>
      <div className={styles.BorderTopSection2}>&nbsp;</div>
      <div className={styles.sectionTitle}>
        FAVORITES
        <span className={styles.titletagline}>&nbsp;- NEVER MISS A BEAT</span>
      </div>
      <div className={styles.favoritesBody}></div>
    </div>
  );
};

export default Favorites;
