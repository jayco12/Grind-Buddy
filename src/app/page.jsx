"use client";

import Search from "./search/Search";
import styles from "./page.module.css";
const Home=({session}) => {
  return (
    <main className={styles.main}>
      {session?.user ? (
          <>
      <div className={styles.description}>
      Welcome 👋, yay you have literally signed in
    
      </div>
      </>
      ):(
        <div className={styles.description}>
           Welcome 👋, lets help you find that Grind buddy 😉
       
           
       </div>
       

      )}
      <Search/>
    </main>
  );
}
export default Home;