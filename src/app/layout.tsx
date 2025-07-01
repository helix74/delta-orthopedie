import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Delta Orthopédie",
  description: "Votre partenaire de confiance en orthopédie",
  openGraph: {
    title: 'Delta Orthopédie',
    description: 'Votre partenaire de confiance en orthopédie',
    url: 'https://deltaorthopedie.tn',
    siteName: 'Delta Orthopédie',
    images: [
      {
        url: '/images/logo/foxify_logo.svg',
        width: 1200,
        height: 630,
        alt: 'Delta Orthopédie',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delta Orthopédie',
    description: 'Votre partenaire de confiance en orthopédie',
    images: ['/images/logo/foxify_logo.svg'],
    site: '@deltaorthopedie',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
