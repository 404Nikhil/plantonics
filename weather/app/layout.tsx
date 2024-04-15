import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import { NextThemesProvider } from "@/components/providers/NextThemesProvider"
import { CodeIcon, HeartIcon } from "@radix-ui/react-icons"
import Navigation from "@/components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const dynamic = "force-dynamic"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}, container mx-auto flex min-h-screen flex-col px-[1rem] antialiased selection:bg-black selection:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black md:px-[2rem]`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="flex-grow">{children}</main>
          <footer className="py-4">
            <div
              className="group flex items-center justify-center gap-1 text-neutral-400 dark:text-neutral-600"
              aria-hidden={true}
            >
              <CodeIcon className="h-5 w-5" />
              <span>with</span>
              <HeartIcon className="h-4 w-4 group-hover:text-red-500" />
              <span>in Denmark</span>
            </div>
          </footer>
        </NextThemesProvider>
        <Script
          strategy={"beforeInteractive"}
          src={`https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=782675d5e2ff4b479891f1c9365844c0
          &libraries=places&callback=Function.prototype`}
        />
        <Analytics />
      </body>
    </html>
  )
}
