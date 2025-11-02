import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Bug Bounty Hunter - IDOR & Auth Bypass Detection",
  description: "AI-powered vulnerability discovery system for IDOR and Authentication Bypass detection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
