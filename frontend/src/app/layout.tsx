import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olimpo Gym",
  description: "Transformá tu cuerpo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}