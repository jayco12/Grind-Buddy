"use client";


import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Testimonials from "@/components/Testimonials/Testimonials";

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
      <Testimonials/>
      <Contact/>
    </main>
  );
}
export default Home;