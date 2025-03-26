import { Inter,Lato } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${lato.className} `}>{children}</body>
    </html>
  );
}
