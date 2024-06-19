"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const links = [

 
];

const Links = ({session}) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
       
        {session?.user ? (
          <>
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <div className={styles.box}>
          <NavLink item={{ title: "Login", path: "/login" }} />
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