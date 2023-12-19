 import Head from '@/components/Head'
import './globals.css'
import { Inter } from 'next/font/google'
  import Providers from '@/app/Providers'
import Nav from '@/components/Nav'
import Search from '@/components/Search'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'imDB Clone',
  description: 'this a try to learn nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
<Providers>

<Head/>
<Nav/>
<Search/>
        {children}  
        <footer>@unaicc &copy all rights reserver</footer>

</Providers>



        </body>
    </html>
  )
}
