import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thankfulness Turkey",
  description: "For what are you thankful today?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
