import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded, Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logan N.R. — Full Stack Developer & Marketing",
  description:
    "Full Stack Developer especializado en Next.js, Laravel y e-commerce. Transformo ideas en productos digitales que venden y escalan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} ${montserrat.variable} ${bebasNeue.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
