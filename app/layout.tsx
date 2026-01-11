import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steven Lee - Portfolio",
  description: "Full Stack Developer & Computer Science Graduate",
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
