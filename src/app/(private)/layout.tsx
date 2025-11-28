import type { ReactNode } from 'react'
import { Header } from '@/components/header'

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className="space-y-4 py-4">
      <Header />
      <main className="mx-auto w-full max-w-[1200px] space-y-4 p-4">
        {children}
      </main>
    </div>
  )
}
