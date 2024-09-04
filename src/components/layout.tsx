import { ReactNode } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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