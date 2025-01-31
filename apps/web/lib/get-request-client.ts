import { cookies } from 'next/headers'
import Client, { Environment } from '@/lib/client'

const getRequestClient = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth-token')?.value || ''
  const env =
    process.env.NODE_ENV === 'development'
      ? 'http://127.0.0.1:4000'
      : Environment('staging')

  return new Client(env, {
    auth: { authorization: token }
  })
}

export default getRequestClient
