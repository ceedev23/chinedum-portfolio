import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chinedum Akpala - Portfolio',
  description: 'Web Developer and Data Analyst Portfolio',
  metadataBase: new URL('https://akpal.github.io/cee-portfolio'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen relative`}>
        {children}
      </body>
    </html>
  )
}