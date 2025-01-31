import { LoginForm } from '@/components/login-form'
import { Button } from '@workspace/ui/components/button'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const isLoggedIn = cookieStore.has('auth-token')

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        {isLoggedIn ? (
          <form action="/auth/logout" method="post">
            <Button type="submit" className="w-full">
              Logout
            </Button>
          </form>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  )
}
