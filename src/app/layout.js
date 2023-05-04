 import Head from '@/components/Head'
import './globals.css'
import { Inter } from 'next/font/google'
  import Providers from '@/app/Providers'
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
        {children}  
        <footer></footer>

</Providers>



        </body>
    </html>
  )
}
