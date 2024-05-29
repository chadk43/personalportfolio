import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="retro">
      <body className={inter.className}>
        <Navbar />
        <div className="mb-60 sm:mb-0">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
