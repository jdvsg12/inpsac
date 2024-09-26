import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import { Nav } from "@/components/main/nav";
import Footer from "@/components/main/footer";
import { Toaster } from "@/components/ui/toaster";


const montserrat = Montserrat({
  weight: ['300', '500', '600'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
})



export const metadata: Metadata = {
  title: "Psicología y Cultura",
  description: "Estamos comprometidos en promover una cultura de la escucha para que ninguna forma de sufrimiento sea considerada insignificante.",
  keywords: 'Psicologia, Pscoterapia, Psicoanalisis, Salud Mental, Atención Psicológica, Supervisión , Cultura',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
