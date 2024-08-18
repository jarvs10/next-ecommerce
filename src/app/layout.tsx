import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";

const poppins = Poppins(
  { subsets: ["latin"], weight: ['400', '700'] }
);

export const metadata: Metadata = {
  title: "Jarvs Blog Application",
  description: "A complete Blog application with Next.js and kinde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <main className="container mx-auto min-h-screen">
          
            <Navbar />
          
            {children}

            <Footer />
          </main>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
