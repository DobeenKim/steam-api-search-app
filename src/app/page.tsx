import Image from "next/image";
import styles from "./page.module.css";
import TopGames from "../../components/TopGames"
import SearchBar from "../../components/SearchBar"

export default function Home() {
  return (
    <div className={styles.page}>
      <SearchBar />
      <TopGames />
    </div>
  );
}
