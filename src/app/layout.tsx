import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Аудиторська компанія | Аудит, консалтинг, бухоблік",
  description:
    "Незалежна аудиторська компанія. Аудит, податковий консалтинг, бухгалтерський облік. Професійно та надійно.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
