import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import "../styles/main.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Developer Portfolio - Emmanuel Irabor",
  description: "My personal portfolio showcasing my skills and projects.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Developer Portfolio - Emmanuel Irabor",
    description: "My personal portfolio showcasing my skills and projects.",
    images: ["/images/cube.gif"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio - Emmanuel Irabor",
    description: "My personal portfolio showcasing my skills and projects.",
    images: ["/images/cube.gif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
