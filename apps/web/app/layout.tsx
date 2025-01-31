import { Geist, Geist_Mono } from 'next/font/google'

import '@workspace/ui/globals.css'
import { Providers } from '@/components/providers'
import { cn } from '@workspace/ui/lib/utils'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          fontMono.variable,
          'font-sans antialiased'
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
