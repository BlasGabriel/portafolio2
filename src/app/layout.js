import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ico from '../assets/note.svg';  // Cambia 'a' por 'ico' para mayor claridad

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portafolio",
  description: "Portafolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href={ico.src} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
