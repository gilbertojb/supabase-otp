'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useFormState } from '@/hooks/use-form-state'
import { signInWithEmail } from './actions'

export function SignInForm() {
  const router = useRouter()

  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    signInWithEmail,
    () => {
      router.push(`/verify-token?email=${email}`)
    },
  )

  const [email, setEmail] = useState('')

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

      <div>
        <Input
          name="email"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors?.email && (
          <p className="text-xs font-medium text-red-300 mt-2">
            {errors.email[0]}
          </p>
        )}
      </div>

      <Button
        className="w-full"
        type="submit"
        disabled={isPending}
      >
        {isPending ? <Loader2 className="size-4 animate-spin" /> : 'Send code'}
      </Button>
    </form>
  )
}
