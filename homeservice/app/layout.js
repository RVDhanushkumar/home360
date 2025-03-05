import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home Services - Plumbing & Cleaning Solutions",
  description: "Reliable and professional plumbing and cleaning services for your home. Ensuring safety and quality in every job.",
  keywords: "plumbing, cleaning, home services, plumbing services, cleaning services, home maintenance, reliable plumbers, professional cleaners",
  author: "Your Company Name",
  openGraph: {
    title: "Home Services - Plumbing & Cleaning Solutions",
    description: "Reliable and professional plumbing and cleaning services for your home. Ensuring safety and quality in every job.",
    url: "https://www.yourwebsite.com",
    site_name: "Home Services",
    images: [
      {
        url: "https://www.yourwebsite.com/image.jpg",
        width: 800,
        height: 600,
        alt: "Home Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Home Services - Plumbing & Cleaning Solutions",
    description: "Reliable and professional plumbing and cleaning services for your home. Ensuring safety and quality in every job.",
    image: "https://www.yourwebsite.com/image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.yourwebsite.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}