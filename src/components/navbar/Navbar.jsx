import Link from "next/link"
import Image from "next/image";
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";
import logo from "../../../public/favicon.png"

const Navbar = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}> <Image src={logo} height={40} width={40} alt=""/> </Link>
      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar
