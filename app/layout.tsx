import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tania Pereira - UX Portfolio",
  description: "Product Designer specializing in complex systems and AI-assisted workflows",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Tania Pereira - UX Portfolio",
    description: "Product Designer specializing in complex systems and AI-assisted workflows",
    url: "https://portfoliopd-ten.vercel.app",
    siteName: "Tania Pereira Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tania Pereira - Product Designer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tania Pereira - UX Portfolio",
    description: "Product Designer specializing in complex systems and AI-assisted workflows",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 p-0">{children}</body>
    </html>
  );
}






