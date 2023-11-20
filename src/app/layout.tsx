import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Login from "@/components/Login";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookly",
  description: "Bookly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-kr">
      <body className={inter.className}>
        <Providers>
          <div className="bg-transparent flex flex-row justify-center w-full">
            <div className="overflow-x-hidden w-[1920px] h-[3868px] relative">
              <div className="absolute w-[1921px] h-[874px] top-0 left-0">
                <header className="absolute w-[1920px] h-[118px] top-0 left-0 bg-white [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-[#e9e9e9] opacity-95">
                  <Login />
                  <NavBar />
                </header>
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
