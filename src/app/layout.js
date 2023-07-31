import Footer from '@/components/footer/page'
import '../style/footer.css'
import '../style/globals.css'

import { Cinzel_Decorative } from 'next/font/google'
import { Lato } from 'next/font/google'
const cinzer=Cinzel_Decorative 
  ({
weight:"700",
subsets:['latin'],
variable:"--cinzel"
  }
)

const lato=Lato(
  {
    weight:'400',
    subsets:['latin'],
  }
)
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${cinzer.variable} `}>
      <body className={` ${lato.className}`}>{children}
      <Footer/></body>
    </html>
  )
}
