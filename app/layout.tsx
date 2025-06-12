import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Christinah Mmabotse Mosima | Software Engineer & AI Enthusiast",
  description:
    "Software Engineer with a strong foundation in IT, now exploring and building expertise in AI and machine learning.",
  keywords: "software engineer, AI enthusiast, web developer, machine learning, Cape Town",
  authors: [{ name: "Christinah Mmabotse Mosima" }],
  openGraph: {
    title: "Christinah Mmabotse Mosima | Software Engineer & AI Enthusiast",
    description:
      "Software Engineer with a strong foundation in IT, now exploring and building expertise in AI and machine learning.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
