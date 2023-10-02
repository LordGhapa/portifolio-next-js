import "./globals.css";
import type { Metadata } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Inter, Lato } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Lacerda Portfolio",
  description: "Desenvolvedor Front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
