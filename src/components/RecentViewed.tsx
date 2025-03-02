"use client";
import styles from "@/styles/main.module.scss";

const RecentViewed: React.FC = () => {
  return (
    <div>
      <div className={styles.BorderTopSection3}>&nbsp;</div>
      <div className={styles.sectionTitle}>
        RECENT
        <span className={styles.titletagline}>&nbsp;- GET ALL INSIGHTS</span>
      </div>
      <div className={styles.favoritesBody}></div>
    </div>
  );
};

export default RecentViewed;
