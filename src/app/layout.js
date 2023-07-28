import { Providers } from "../store/provider";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Scart from "@/components/ShowCart/Scart";
import { Suspense } from "react";
import loading from "./loading";
export const metadata = {
  // title: "Gourmet Chef Cuisine",
  // description: "we serve up delicious gourmet foods for all occasions",
  referrer: "origin-when-cross-origin",
  themeColor: "white",
  category: "e-commerce",
  applicationName: "Gourmet Chef Cuisine",
  authors: [
    { name: "Standard Success Edu-Tech Hub" },
    { name: "Standard Success Edu-Tech Hub", url: "https://ssetechub.com" },
  ],
  generator: "Gourmet Chef Cuisine",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google",
    yahoo: "yahoo",
  },
  keywords: [
    "Food",
    "Food delivery in Lagos and Nigeria",
    "Food website",
    "Food delivery",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Gourmet Chef Cuisine",
    description: "we serve up delicious gourmet foods for all occasions",
    url: "https://gcc-ssetechub.vercel.app/",
    siteName: "Gourmet Chef Cuisine",
    images: [
      {
        url: "https://gcc-ssetechub.vercel.app/images/gcc_og_logo.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://gcc-ssetechub.vercel.app/images/gcc_og_logo.jpg",
        width: 300,
        height: 300,
      },
      {
        url: "https://gcc-ssetechub.vercel.app/images/gcc_og_logo.jpg",
        width: 1800,
        height: 1600,
        alt: "Gourmet Chef Cuisine Image",
      },
    ],
    email: "gourmetchefcuisine@gmail.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/images/gcc_og_logo.jpg"
        />
        <link
          rel="icon"
          type="image/jpeg"
          sizes="512x512"
          href="/images/gcc_og_logo.jpg"
        />
        <link
          rel="icon"
          type="image/jpeg"
          sizes="192x192"
          href="/images/gcc_og_logo.jpg"
        />
        <link
          rel="icon"
          type="image/jpeg"
          sizes="32x32"
          href="/images/gcc_og_logo.jpg"
        />
        <link
          rel="icon"
          type="image/jpeg"
          sizes="16x16"
          href="/images/gcc_og_logo.jpg"
        />
        <link
          rel="shortcut icon"
          type="image/jpeg"
          href="/images/gcc_og_logo.jpg"
        />
      </head>
      <body>
        <Providers>
          <Suspense fallback={<loading />}>
            <Header />
            <Scart />
            {children}
            <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
