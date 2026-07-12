import type { Metadata } from "next";
import { Inter, Work_Sans, Poppins } from "next/font/google";
import "./globals.css";

// Inter — primary typeface (ExtraBold headlines → Regular body).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Work Sans — small caption/label text (e.g. folder labels).
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

// Poppins Bold — case-study section titles (Base-pill headers, Figma 576:21195).
const poppins = Poppins({
  variable: "--font-poppins",
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

// TODO(content): replace with Sallee's real title/description + OG image before launch.
export const metadata: Metadata = {
  title: "Sallee — Product Designer & Builder",
  description:
    "Portfolio of Sallee, a Toronto-based product designer who codes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${workSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
