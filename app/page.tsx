import Image from "next/image";
import styles from "./page.module.css";
import TopNav from "./components/TopNav";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main> 
      
    <TopNav />
    < ProductCard/>
    </main>
      )
}
