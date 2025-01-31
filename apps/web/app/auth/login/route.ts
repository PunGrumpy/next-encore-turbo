import getRequestClient from '@/lib/get-request-client'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const formData = await request.formData()

  const email = formData.get('email') || 'incognito'
  const password = formData.get('password') || 'anonymous'

  //   if (!email || !password) {
  //     return new Response('Email and password are required', { status: 400 })
  //   }

  try {
    const client = await getRequestClient()
    const { token } = await client.auth.login({
      email: email.toString(),
      password: password.toString()
    })

    const cookieStore = await cookies()
    cookieStore.set('auth-token', token)
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred'

    return new Response(errorMessage, { status: 500 })
  }

  return redirect('/')
}
