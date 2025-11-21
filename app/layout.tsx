import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agencia | Marketing Studio",
  description: "Landing page moderna para agencia de marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans text-gray-900 ">
        {children}
      </body>
    </html>
  );
}
