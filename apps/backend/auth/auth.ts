import { APIError, Gateway, Header, api } from 'encore.dev/api'
import { authHandler } from 'encore.dev/auth'

interface LoginProps {
  email: string
  password: string
}

export const login = api(
  { expose: true, auth: false, method: 'GET', path: '/login' },
  async (params: LoginProps): Promise<{ token: string }> => {
    return { token: 'dummy-token' }
  }
)

interface AuthProps {
  authorization: Header<'Authorization'>
}

export const dummyAuthHandler = authHandler(
  async (params: AuthProps): Promise<{ userID: string }> => {
    if (!params.authorization)
      throw APIError.unauthenticated('Missing Authorization header')

    if (params.authorization !== 'dummy-token')
      throw APIError.unauthenticated('Invalid token')

    return { userID: 'dummy-user-id' }
  }
)

export const gateway = new Gateway({ authHandler: dummyAuthHandler })
