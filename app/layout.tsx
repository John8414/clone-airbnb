import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Air BnB",
  description: "Air BnB Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
