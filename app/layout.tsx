import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/Toggle";
import favicon from "../public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React UI Loader",
  description:
    "Site showcasing a comprehensive demo and documentation for our npm package, designed to effortlessly integrate customizable shimmers and loaders into your web projects. Enhance user experience with sleek loading elements, backed by clear instructions and examples. Elevate your UI seamlessly using our versatile and developer-friendly solution.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-amber-50 dark:bg-gray-800 ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
