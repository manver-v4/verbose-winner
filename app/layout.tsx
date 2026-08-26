import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Verbose Winner - Premium Video Editing Agency',
  description: 'Professional video editing for creators, brands and businesses. From raw footage to content worth watching.',
  openGraph: {
    title: 'Verbose Winner - Premium Video Editing Agency',
    description: 'Professional video editing for creators, brands and businesses.',
    url: 'https://verbose-winner.com',
    siteName: 'Verbose Winner',
    images: [
      {
        url: 'https://verbose-winner.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
