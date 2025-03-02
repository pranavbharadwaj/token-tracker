"use client";
import UserLogin from "@/components/UserLogin";
import styles from "@/styles/header.module.scss";
import CurrencySelect from "./CurrencySelect";

const Header: React.FC = ({ logoRef }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo} ref={logoRef}>
        <span className={styles.logothinFont}>TOKEN</span>
        <span className={styles.logothickFont}>TRACK</span>
      </div>
      <CurrencySelect />
      <UserLogin />
    </header>
  );
};

export default Header;
