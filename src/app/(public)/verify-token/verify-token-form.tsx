'use client'

import { AlertTriangle, Loader2, MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'

import { useFormState } from '@/hooks/use-form-state'
import { verifyCode } from './actions'

interface VerifyTokenFormProps {
  email: string
}

export function VerifyTokenForm({ email }: VerifyTokenFormProps) {
  const router = useRouter()

  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    verifyCode,
    () => {
      router.push('/')
    },
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

      <input type="hidden" name="email" value={email} />

      <div>
        <InputOTP maxLength={8} name="token" disabled={isPending}>
          <InputOTPGroup>
            <InputOTPSlot index={0} className="w-14 h-12 text-lg" />
            <InputOTPSlot index={1} className="w-14 h-12 text-lg" />
            <InputOTPSlot index={2} className="w-14 h-12 text-lg" />
            <InputOTPSlot index={3} className="w-14 h-12 text-lg" />
            <InputOTPSlot index={4} className="w-14 h-12 text-lg" />
            <InputOTPSlot index={5} className="w-14 h-12 text-lg" />
          </InputOTPGroup>
        </InputOTP>

        {errors?.token && (
          <p className="text-xs font-medium text-red-300 mt-2">
            {errors.token[0]}
          </p>
        )}
      </div>

      <Button className="w-full" type="submit" disabled={isPending}>
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Verify code'
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
