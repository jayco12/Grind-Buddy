import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Search from "./search/Search";
import Navbar from "@/components/navbar/Navbar";
// import Navbar from "@/components/navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grind Buddy",
  description: "Get connected to that study buddy in your school.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
       {/* <Navbar/> */}
       <Navbar/>

        {children}
        </body>
    </html>
  );
}
