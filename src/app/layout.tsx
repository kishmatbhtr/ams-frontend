import type { Metadata } from 'next'
// import { Poppins } from 'next/font/google'
import Provider from '@/components/Provider'
import { Session, getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/option'
import './globals.css'

// const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AMS',
  description: 'Attendence Management System',
}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/* <body className={poppins.className}> */}
      <body>
        <Provider session={session as Session}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
