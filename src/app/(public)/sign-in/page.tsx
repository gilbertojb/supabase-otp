import { Zap } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { SignInForm } from './sign-in-form'

export default function SignInPage() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-8 w-full max-w-md mx-4">
        <Zap className="size-12" />

        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Enter your email address</CardTitle>
            <CardDescription>
              You will receive an email with a verification code
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignInForm />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
