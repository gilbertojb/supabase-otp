'use client'

import { AlertTriangle, CheckCircle, Loader2, MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

import { useFormState } from '@/hooks/use-form-state'
import { resendVerificationEmail } from './actions'

interface ResendEmailFormProps {
  email: string
}

export function ResendEmailForm({ email }: ResendEmailFormProps) {
  const router = useRouter()

  const [{ message, success }, handleSubmit, isPending] = useFormState(
    resendVerificationEmail,
    () => {},
  )

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>There was an error</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert>
          <CheckCircle className="size-4" />
          <AlertTitle>Email sent!</AlertTitle>
          <AlertDescription>
            <p>Verification email sent! Check your inbox.</p>
          </AlertDescription>
        </Alert>
      )}

      <input type="hidden" name="email" value={email} />

      <Button className="w-full" type="submit" disabled={isPending}>
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Resend verification email'
        )}
      </Button>

      <Button
        className="w-full"
        variant="outline"
        type="button"
        onClick={() => router.replace('/sign-in')}
      >
        <MoveLeft className="size-4" />
        Back to sign in
      </Button>
    </form>
  )
}
