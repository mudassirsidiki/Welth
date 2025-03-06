import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


// idher humne kehdya k pori body mein font-family inter-latin use kro
const inter = Inter({ subsets: ["latin"] });



// idher humne project ka nam welth rakha hai aur description mein likha hai k ye ek financial solution hai
export const metadata = {
  title: "Welth",
  description: "One Stop Financial Solution",
};



export default function RootLayout({ children }) {
  return (
    //USER AUTHENTICATION K LIYE HUMNE CLERK KA USE KIA HAI AUR CLERK KA USE KARNE K LIYE HUMNE CLERKPROVIDER KO WRAP KAR DIYA HAI
    // AUR CLERKPROVIDER KO WRAP KARNE K BAAD HUMNE APNE SARE PAGES KO PROTECT KAR DIYA HAI
    // AUR PROTECT KARNE K LIYE HUMNE MIDDLEWARE.JS FILE BANAI HAI
    // AUR HAMESHA CLERKPROVIDER KO AISY HI WRAP KRNA HOTA HAI MTLB HTML TAGS KA CLERKPROVIDER K ANDAR HONA ZARURI HAI
    <ClerkProvider>


    <html lang="en">
    <body className={`${inter.className}`}>
     

    {/* Header Section */}
    <Header/>




    {/* Main Section */}
      <main className="min-h-screen">{children}</main>
      



    {/* Footer Section */}
      <footer className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Made with 💗 by Mudassir Ahmed Siddiqui</p>
        </div>
      </footer>




    </body>
  </html>




  </ClerkProvider>
  //USER AUTHENTICATION K LIYE HUMNE CLERK KA USE KIA HAI AUR CLERK KA USE KARNE K LIYE HUMNE CLERKPROVIDER KO WRAP KAR DIYA HAI
  // AUR CLERKPROVIDER KO WRAP KARNE K BAAD HUMNE APNE SARE PAGES KO PROTECT KAR DIYA HAI
  // AUR PROTECT KARNE K LIYE HUMNE MIDDLEWARE.JS FILE BANAI HAI
  // AUR HAMESHA CLERKPROVIDER KO AISY HI WRAP KRNA HOTA HAI MTLB HTML TAGS KA CLERKPROVIDER K ANDAR HONA ZARURI HAI
  );
}
