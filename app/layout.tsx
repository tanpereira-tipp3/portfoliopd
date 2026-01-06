import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tania Pereira - UX Portfolio",
  description: "Product Designer specializing in complex systems and AI-assisted workflows",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}






