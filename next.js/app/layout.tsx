import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Home, Menu } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Appula One",
  description: "Appula One - Formula 1 analytics and insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const linkClassName =
    "text-muted-foreground transition-colors hover:text-foreground";

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen w-screen screen">
            <header className="flex h-16 items-center gap-4 border-b bg-background px-4 z-50">
              <nav className="hidden gap-6 text-md font-medium md:flex md:flex-row md:items-center">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                  <Home className="h-6 w-6" />
                  <span className="sr-only">Appula One</span>
                </Link>
                <Link href="/drivers" className={linkClassName}>
                  Drivers
                </Link>
                <Link href="/standings" className={linkClassName}>
                  Standings
                </Link>
                <Link href="/races" className={linkClassName}>
                  Races
                </Link>
              </nav>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-screen">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      href="/"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Home
                    </Link>
                    <Link
                      href="/drivers"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Drivers
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <div className="ml-auto">
                <ModeToggle />
              </div>
            </header>
            <main className="flex flex-col flex-1 overflow-y-scroll">
              {children}
            </main>
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
