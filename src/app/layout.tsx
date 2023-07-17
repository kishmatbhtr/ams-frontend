import type { Metadata } from 'next'
// import { Poppins } from 'next/font/google'
import './globals.css'

// const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AMS',
  description: 'Attendence Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={poppins.className}> */}
      <body>
        {children}
      </body>
    </html>
  )
}
