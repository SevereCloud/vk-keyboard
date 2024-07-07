import type { Metadata } from "next";
import * as React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Генератор клавиатуры",
  description: "Генератор клавиатуры ботов для ВКонтакте",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="vkui">
      <body>{children}</body>
    </html>
  );
}
