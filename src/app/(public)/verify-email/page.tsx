'use client'

import { Zap } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Suspense } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { ResendEmailForm } from './resend-email-form'

function VerifyContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-8 w-full max-w-md mx-4">
        <Zap className="size-12" />

        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Verify your email to continue</CardTitle>
            <CardDescription>
              Please, check your email for a link to verify your email address.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ResendEmailForm email={email as string} />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default function VerifyPage() {
  return (
    <Suspense>
      <VerifyContent />
    </Suspense>
  )
}
