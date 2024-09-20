import { ReactNode } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="bg-gray-200 dark:bg-gray-900 text-slate-800 dark:text-slate-200">
    <section id="top"></section>
    <Header />

    {children}

    <Footer />
  </div>
);

export default Layout;
