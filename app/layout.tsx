import type { Metadata } from "next";
import localFont from "next/font/local";
import LenisProvider from "./providers/smooth-scroll";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/navbar";

const dx = localFont({
  src: "./fonts/dxslight-mediumultra-free-personal-use.otf",
  variable: "--font-dx",
});

const fontSans = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Ackshita - BRAND STRATEGIST",
  description:
    "I AM A BRAND STRATEGIST WHO LEVERAGES HUMAN INSIGHTS TO HELP BRANDS FIND THEIR TRIBE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dx.variable} ${dx.variable} ${fontSans.variable} ${fontSans.className} antialiased scrollbar-hide`}>
      <body>
        <Navbar />
        <LenisProvider>{children}</LenisProvider>
        <Toaster
          toastOptions={{
            style: {},
            className:
              "rounded-sm text-base font-main border-primary bg-primary text-white font-dx",
          }}
        />
      </body>
    </html>
  );
}
