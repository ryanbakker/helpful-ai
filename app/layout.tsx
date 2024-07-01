import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "helpful",
  description: "Create and customize AI chatbot agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
