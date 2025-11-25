import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import V0Remover from "./removeV0.tsx"

const poppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "🙏 phani-back-end developer",
  description: "Phanidhar Reddy - Backend Developer & Systems Engineer Portfolio",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='15' fill='%23FF6B35' stroke='%23FF4500' strokeWidth='1'/><rect x='14' y='6' width='4' height='14' fill='white' rx='2'/><rect x='13' y='22' width='6' height='2' fill='white' rx='1'/><circle cx='16' cy='26' r='1.5' fill='white'/></svg>",
        type: "image/svg+xml",
      },
    ],
    shortcut: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='15' fill='%23FF6B35' stroke='%23FF4500' strokeWidth='1'/><rect x='14' y='6' width='4' height='14' fill='white' rx='2'/><rect x='13' y='22' width='6' height='2' fill='white' rx='1'/><circle cx='16' cy='26' r='1.5' fill='white'/></svg>",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='15' fill='%23FF6B35' stroke='%23FF4500' strokeWidth='1'/><rect x='14' y='6' width='4' height='14' fill='white' rx='2'/><rect x='13' y='22' width='6' height='2' fill='white' rx='1'/><circle cx='16' cy='26' r='1.5' fill='white'/></svg>",
        type: "image/svg+xml",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="generator" content="" />
        <style>{`
html {
  font-family: ${poppinsFont.style.fontFamily};
  --font-sans: ${poppinsFont.variable};
}
        `}</style>
      </head>
      <body>
        <V0Remover />
        {children}
      </body>
    </html>
  )
}
