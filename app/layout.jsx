import { Lato } from 'next/font/google'
import './globals.css'

const font = Lato({
  subsets: ['latin'],
  weight: '700',
})

export const metadata = {
  title: 'Richard Carvalho',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`w-full h-full ${font.className}`}
    >
      <body className='w-full h-full from-red-600 to-green-500'>
        {children}
      </body>
    </html>
  )
}
