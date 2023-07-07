import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HPCstone',
  description: 'Hard Precious Colorful Stone',
}

export default function RootLayout({ children }) {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
        </>
  )
}
