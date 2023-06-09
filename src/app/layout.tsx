
import HeaderComponent from "@components/header/header.component";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TailorHub Challenge Front",
  description: "Restaurants application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className} suppressHydrationWarning={true}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
