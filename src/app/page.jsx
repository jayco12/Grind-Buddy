"use client";

import styles from "./page.module.css";
const Home=({session}) => {
  return (
    <main className={styles.main}>
      {session?.user ? (
          <>
      <div className={styles.description}>
       Welcome 👋, try to sign in 
      </div>
      </>
      ):(
        <div className={styles.description}>
        Welcome 👋, yay you have literally signedin 
       </div>

      )}
    </main>
  );
}
export default Home;