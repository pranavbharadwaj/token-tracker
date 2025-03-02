"use client";

import styles from "@/styles/main.module.scss";
import SearchCrypto from "@/components/SearchCrypto";
import Favorites from "@/components/Favorites";
import RecentViewed from "@/components/RecentViewed";

const Body: React.FC = ({ mainRef }) => {
  return (
    <div className={styles.mainContainer} ref={mainRef}>
      <div className={styles.searchSection}>
        <SearchCrypto />
      </div>
      <div className={styles.favoritesSection}>
        <Favorites />
      </div>
      <div className={styles.recentViewedSection}>
        <RecentViewed />
      </div>
    </div>
  );
};

export default Body;
