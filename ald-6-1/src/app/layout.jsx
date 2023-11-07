import {Providers} from "./providers";
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aprendendo a Lidar com Dinheiro',
  description: 'Site 1 do sexto ano da série Aprendendo a Lidar com Dinheiro',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <Providers>
         {children}
        </Providers>
        
      </body>
    </html>
  )
}
