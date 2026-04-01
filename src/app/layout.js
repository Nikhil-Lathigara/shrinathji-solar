import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export const metadata = {
  title: "Shrinathji Solar Enterprise - Power Your World With The Sun",
  description: "India's Trusted Solar Brand - Premium solar solutions for homes, businesses, and industry since 2005.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">
        <Loader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
