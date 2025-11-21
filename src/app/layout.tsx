import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import type { ReactNode } from 'react'

import { Providers } from './providers'

const figtree = Figtree({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: 'Auth Password Less | %s',
    default: 'Auth Password Less',
  },
  description: '',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.className} antialiased`}>
      <Providers>{children}</Providers>
      </body>
    </html>
  )
}
