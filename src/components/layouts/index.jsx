

import {   Poppins } from "next/font/google";
import Navber from "./navber";

const poppins = Poppins({ weight:[ "100", "200","300","400","500", "600" ,"700","800","900",], subsets: ["latin"] });

export const LayoutPageWrapper = ({ children }) => {
    return (
        <section className={`flex flex-col min-h-screen ${poppins.className}`}>
            <Navber/>
            <main className="flex-grow">{children}</main>
            {/* <Footer/> */}
        </section>
    )
}