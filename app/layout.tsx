import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css';
import type { Metadata } from 'next'
import { Inter, Josefin_Sans } from 'next/font/google'
import NavBar from './NavBar'
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  variable: "--font-josefin-sans"
})

export const metadata: Metadata = {
  title: 'Best Book Marketing & Publishing Company USA | Amazon Book Publications',
  description: 'Take control of your publishing & marketing journey with Amazon Book Publications. Get your book in front of millions of readers worldwide. Start now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefin_sans.className}>
        <Theme>
          <NavBar />
          <main>
            {children}
          </main>
        </Theme>
      </body>
    </html>
  )
}
