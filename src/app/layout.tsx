import { Toaster } from "@/components/ui/toaster";
import Footer from "@/ui/organisms/Footer";
import Header from "@/ui/organisms/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: {
    default: "Harmonia consult",
    template: "%s - Harmonia consult",
  },
  description:
    "Profesjonalne doradztwo podatkowe dla Polaków w Holandii. Rozwiązujemy Twoje problemy podatkowe, pomagamy w zeznaniach i optymalizacji podatkowej. Skontaktuj się z nami już dziś, aby skorzystać z porady ekspertów z wieloletnim doświadczeniem w holenderskim systemie podatkowym.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster />
        <Footer />
        <GoogleTagManager gtmId={"GTM-5RXXLX2K"} />
      </body>
    </html>
  );
}
