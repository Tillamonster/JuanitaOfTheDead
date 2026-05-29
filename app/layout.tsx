import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juanita of the Dead",
  description: "The Bells of Pajaro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}