"use client";

import Search from "./search/Search";
import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import About from "@/components/About/About";

const Home=({session}) => {
  
  return (
    <main className={styles.main}>
      {session?.user ? (
          <>
      <div className={styles.description}>
       yay you have literally signed in. Lets help you find that Grind buddy 😉
    
      </div>
      </>
      ):(
        <div className={styles.description}>
           {/* Welcome 👋, lets help you find that Grind buddy 😉 */}
       
           
       </div>
       
      )}
      <Hero/>
      <About/>
      <Search/>
    </main>
  );
}
export default Home;