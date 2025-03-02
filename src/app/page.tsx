"use client";
import styles from "@/styles/page.module.scss";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());
  const taglineRef1 = useRef(null);
  const taglineRef2 = useRef(null);
  const taglineRef3 = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.to(taglineRef1.current, { autoAlpha: 1, duration: 1, delay: 1 });
    gsap.to(taglineRef2.current, { autoAlpha: 1, duration: 1 }, ">");
    gsap.to(taglineRef3.current, { autoAlpha: 1, duration: 1 }, ">");
    gsap.to(
      taglineRef1.current,
      { autoAlpha: 0, duration: 0.33, delay: 2 },
      ">"
    );
    gsap.to(taglineRef2.current, { autoAlpha: 0, duration: 0.33 }, ">");
    gsap.to(taglineRef3.current, { autoAlpha: 0, duration: 0.33 }, ">");
    gsap.to(sectionRef.current, { autoAlpha: 0, duration: 1 }, ">");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.page}>
        <Header />
        <Main />
        <div className={styles.intro} ref={sectionRef}>
          <p className={styles.introTag1} ref={taglineRef1}>
            Effortlessly track the
          </p>
          <p className={styles.introTag2} ref={taglineRef2}>
            top 50 cryptocurrencies with
          </p>
          <p className={styles.introTag3} ref={taglineRef3}>
            live updates and insights.
          </p>
        </div>
      </div>
    </QueryClientProvider>
  );
}
