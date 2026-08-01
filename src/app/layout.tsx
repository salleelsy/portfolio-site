import type { Metadata } from "next";
import { Work_Sans, Poppins, Outfit, Geist } from "next/font/google";
import "./globals.css";

// Work Sans — small caption/label text (e.g. folder labels).
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

// Poppins — primary typeface across the site (ExtraBold headlines → Regular
// body), plus section titles and banner chips. Loaded from Google Fonts —
// the same OFL family as the uploaded TTFs, subsetted to woff2 automatically.
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

// Outfit ExtraBold — case-study banner headline (Figma 576:25865).
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

// Geist — case-study banner subtitle and meta (Figma 576:25865).
const geist = Geist({
  variable: "--font-geist",
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
      className={`${workSans.variable} ${poppins.variable} ${outfit.variable} ${geist.variable} h-full antialiased`}
    >
      {/* overflow-x-clip guards against decorative full-bleed elements (the hero
          window-wall, the brand marquee) ever creating horizontal page scroll.
          `clip` (not `hidden`) keeps sticky descendants like the case-study
          stepper working. */}
      <body className="flex min-h-full flex-col overflow-x-clip">{children}</body>
    </html>
  );
}
