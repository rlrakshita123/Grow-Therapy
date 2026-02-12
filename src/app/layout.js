import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Dr. Maya Reynolds | Santa Monica Therapist",
  description: "Therapy for anxiety, trauma & burnout in Santa Monica, CA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-[#F3EFEA] text-[#1F2F3A]">
        {children}
      </body>
    </html>
  );
}
