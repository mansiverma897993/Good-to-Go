import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/context/auth-context"
import "./globals.css"
import { seedDatabase } from "@/lib/db"

const inter = Inter({ subsets: ["latin"] })

seedDatabase()

export const metadata: Metadata = {
  title: "gtg - Good To Go",
  description: "Your one-stop destination for open source projects, opportunities, and learning resources",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
