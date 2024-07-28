"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import company from "../../../../public/assets/company.png";
import search from "../../../../public/assets/bullet_icon.png";
import home from "../../../../public/assets/home.svg";

const links = [
  {
    title: <Image src={home} height={25} width={25} alt=""/>,
    path: "/",
  },
  {
    title:  <Image src={company} height={25} width={25} alt=""/>,
    path: "/about",
  },
 
 
  

];

const Links = ({session}) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
      {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
       
        {session?.user ? (
          <>
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <div className={styles.box}>
          <NavLink item={{ title: "Try It", path: "/search" }} />
       </div>
        )}
      </div>
     
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}

        </div>
      )}
     
    </div>
  );
};

export default Links;