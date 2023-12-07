import StarsCanvas from "@/components/page2/StarBackground";
import "./globals.css";
import type { Metadata } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Inter, Lato } from "next/font/google";
import Navbar from "@/components/page2/NavBar";
import Footer from "@/components/page2/Footer";
import { ContextProvider } from "./providers/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Lacerda Portfolio",
  description: "Felipe Lacerda Desenvolvedor Front-end Portfolio",
  keywords: [
    "felipe lacerda",
    "felipe lacerda portfolio",
    "felipe lacerda dev",
    "felipe lacerda dev frontend",
    "dev frontend",
    "desenvolvedor Front-end",
  ],
  authors: [
    {
      name: "Felipe Lacerda Oliveira",
      url: "https://www.linkedin.com/in/felipe-lacerda-oliveira/",
    },
  ],
  creator: "Felipe Lacerda oliveira",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}  overflow-x-hidden bg-[#030014]`}>
        <StarsCanvas />
        <ContextProvider>
          <Navbar />
          {children}
        </ContextProvider>
        <Footer />
      </body>
    </html>
  );
}
