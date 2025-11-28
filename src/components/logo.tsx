import { Zap } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Zap className="size-6" />
      <span className="text-xl font-bold">Supabase OTP</span>
    </div>
  )
}