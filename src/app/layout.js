import { Montserrat, Lalezar } from 'next/font/google'
import './globals.css'
import { Footer, Nav } from '@/components/index';
import { ThemeProvider } from '@/context/ThemeContext';

const bodyFont = Montserrat({ subsets: ['latin'], weight: ["400", "700", "900"] });
const lalezar = Lalezar({ subsets: ['arabic'], weight: ["400"] });


export const metadata = {
  title: 'Online Shop - Home',
  description: 'buy online anywhere',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
          <div className='container'>
            <Nav />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
