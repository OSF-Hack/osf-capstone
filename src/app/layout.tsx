import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CivicRoute NG — Verified driver's licence guidance",
  description: "Verified tracking and escalation guidance for Nigeria driver's licence applicants.",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/civicroute-mark.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0b5d4b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
