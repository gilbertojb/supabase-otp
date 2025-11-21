import { Zap } from 'lucide-react'

import { ProfileButton } from './profile-button'
import { ThemeSwitcher } from './theme/theme-switcher'

export async function Header() {
  return (
    <header className="mx-auto flex max-w-[1200px] items-center justify-between border-b border-border px-2 pb-4">
      <div className="flex items-center gap-3">
        <Zap className="size-6" />
      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <ProfileButton />
      </div>
    </header>
  )
}
