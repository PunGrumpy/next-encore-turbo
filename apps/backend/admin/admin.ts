import { api } from 'encore.dev/api'
import { getAuthData } from '~encore/auth'

interface DashboardProps {
  value: string
}

export const getDashboard = api(
  {
    expose: true,
    auth: true,
    method: 'GET',
    path: '/admin'
  },
  async (): Promise<DashboardProps> => {
    const userId = getAuthData()?.userID

    return { value: `Hello, ${userId}` }
  }
)
