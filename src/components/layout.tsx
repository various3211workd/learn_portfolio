import { ReactNode } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    
    {children}

    <Footer />
  </>
)

export default Layout