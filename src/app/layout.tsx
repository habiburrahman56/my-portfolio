import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Munna's Portfolio",
  description: "Powered By Munna",
  icons: {
    icon: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="geist-c531dabc-module_... variable_mono_60a01160-module_... variable_variabl..."
        cr-shortcut-listen="true" suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
