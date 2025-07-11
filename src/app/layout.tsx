import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Dwello',
    description: 'Next.js ile geliştirilmiş emlak ilan sitesi',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr">
        <body className={inter.className}>{children}</body>
        </html>
    )
}