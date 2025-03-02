import styles from "@/styles/page.module.scss";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Main />
    </div>
  );
}
