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
  description: "Descubre apoyo personalizado para tu bienestar mental en Psicolgía y cultura. Ofrecemos terapias efectivas y recursos especializados para ayudarte a vivir una vida equilibrada y feliz. Contáctanos para más información.",
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
