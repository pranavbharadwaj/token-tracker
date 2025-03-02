"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styles from "@/styles/main.module.scss";
import { useUserStore } from "@/store/useUserStore";
import { Crypto } from "@/types/Crypto";
import Card from "./UI/Card";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1";

const fetchCryptoList = async (): Promise<Crypto[]> => {
  const response = await axios.get(API_URL);

  return response.data.map((crypto: any) => ({
    id: crypto.id,
    symbol: crypto.symbol.toUpperCase(),
    name: crypto.name,
    price: crypto.current_price,
    marketCap: crypto.market_cap,
    volume: crypto.total_volume,
    image: crypto.image,
  }));
};
const SearchCrypto: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { addRecentView } = useUserStore();

  const {
    data: cryptos,
    isLoading,
    error,
  } = useQuery<Crypto[]>({
    queryKey: ["cryptoData"],
    queryFn: fetchCryptoList,
    staleTime: 60000,
  });

  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  const filteredCryptos =
    cryptos?.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(debouncedQuery.toLowerCase())
    ) || [];

  return (
    <div className={styles.searchContainer}>
      <div className={styles.BorderTopSection1}>&nbsp;</div>
      <div className={styles.searchBody}>
        <input
          type="text"
          placeholder="SEARCH CRYPTOCURRENCY"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchBar}
        />
        {isLoading && <p className={styles.loading}>LOADING...</p>}
        {error && <p>Error fetching data</p>}
        <div className={styles.searchResult}>
          {filteredCryptos.slice(0, 10).map((crypto) => (
            <Card
              key={crypto.id}
              id={crypto.id}
              name={crypto.name}
              image={crypto.image}
              symbol={crypto.symbol}
              price={crypto.price}
              marketCap={crypto.marketCap}
              volume={crypto.volume}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchCrypto;
