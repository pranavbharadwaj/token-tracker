"use client";

import { useUserStore } from "@/store/useUserStore";
import styles from "@/styles/header.module.scss";

const CURRENCIES = ["usd", "eur", "inr", "gbp", "chf"];

const CurrencySelect: React.FC = () => {
  const { selectedCurrency, setSelectedCurrency } = useUserStore();

  return (
    <div className={styles.currencySelector}>
      <label htmlFor="currency">Select Currency:&nbsp;</label>
      <select
        id="currency"
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        {CURRENCIES.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
