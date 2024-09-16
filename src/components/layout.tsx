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
    <div className="bg-[#ECDFCC] dark:bg-[#1E201E]">
      <section id="top"></section>
      <Header />

      {children}

      <Footer />
    </div>
)

export default Layout