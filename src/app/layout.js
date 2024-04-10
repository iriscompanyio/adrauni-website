import { Inter } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adrauni UNI",
  description:
    "Agrupación por la Defensa y Respeto hacia los Animales de la UNI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
