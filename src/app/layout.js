import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import { cx } from '@/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], display: "swap", variable: "font-mr"})
const manrope = Manrope({ subsets: ['latin'] , display: "swap", variable: "font-mr" })

export const metadata = {
  title: 'EKO SKILLS GHANA',
  description: 'Built with Nextjs',
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={cx(
        inter.variable, 
        manrope.variable, 
        "font-mr bg-light"
        )}>
            <Header />
            {children}
            <Footer />
      </body>
    </html>
  )
}
