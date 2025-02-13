

import {   Poppins } from "next/font/google";
import Navber from "./navber";
import Footer from "./footer";
import { useRouter } from "next/router";

const poppins = Poppins({ weight:[ "100", "200","300","400","500", "600" ,"700","800","900",], subsets: ["latin"] });

export const LayoutPageWrapper = ({ children }) => {
  const router = useRouter();
  console.log(router , "my router my rules");
    return (
        <section className={`flex flex-col min-h-screen ${poppins.className}`}>
          { router?.pathname =="/iptv" ?"" :<Navber/>}
            <main className="flex-grow">{children}</main>
            <Footer/>
        </section>
    )
}