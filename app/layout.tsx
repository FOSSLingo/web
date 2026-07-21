import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FOSSLingo",
  description: "A free, open source alternative to Language Learning apps",
};

function wipPopup() { //? dont know why this is HERE, but i'll leave it i guess
  alert("The FOSSLingo Bluesky account and website are a work in progress. Stay tuned!")
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <NextTopLoader 
          color="#FFFFFF"
          showSpinner={false}
          shadow="0 0 10px #00d5be,0 0 5px #00d5be"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

