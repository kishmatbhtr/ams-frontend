import MainNav from '@/components/HomePage/main-nav'
import Navbar from '@/components/HomePage/vertical-nav'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page of next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

            <body className={poppins.className}>
                <div className="flex h-screen">
                    <Navbar />
                    <div className="w-full flex flex-col h-screen">
                        <MainNav />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
