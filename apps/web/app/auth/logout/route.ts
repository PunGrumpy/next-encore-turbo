import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = await cookies()
  cookieStore.delete('auth-token')

  return redirect('/')
}
