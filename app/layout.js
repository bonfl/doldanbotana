import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import SplashWrapper from "./SplashWrapper";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Doldan Botana",
  description: "Estudio Jurídico y Notarial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="bg-[#0F2A20]">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-[#0F2A20] min-h-screen`}
      >
        <SplashWrapper>{children}</SplashWrapper>
      </body>
    </html>
  );
}