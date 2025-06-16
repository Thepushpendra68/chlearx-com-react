import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CHLEARX - Performance-Driven E-commerce Marketing Agency",
  description: "Accelerate your e-commerce growth with data-driven marketing strategies. Specializing in conversion optimization, PPC advertising, and revenue growth for online businesses.",
  keywords: "e-commerce marketing, conversion optimization, PPC advertising, digital marketing agency, online marketing, revenue growth",
  authors: [{ name: "CHLEARX Team" }],
  creator: "CHLEARX",
  publisher: "CHLEARX",
  robots: "index, follow",
  openGraph: {
    title: "CHLEARX - Performance-Driven E-commerce Marketing Agency",
    description: "Accelerate your e-commerce growth with data-driven marketing strategies.",
    url: "https://chlearx.com",
    siteName: "CHLEARX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHLEARX - Performance-Driven E-commerce Marketing Agency",
    description: "Accelerate your e-commerce growth with data-driven marketing strategies.",
    creator: "@chlearx",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} theme-light bg-white text-gray-900`}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#ffffff',
              color: '#171717',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
            },
          }}
        />
      </body>
    </html>
  );
}
