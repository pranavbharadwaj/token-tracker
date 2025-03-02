"use client";
import styles from "@/styles/page.module.scss";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.page}>
        <Header />
        <Main />
      </div>
    </QueryClientProvider>
  );
}
