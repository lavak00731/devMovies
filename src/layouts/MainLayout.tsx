import React, { type ReactNode } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <>
    <a className="focus:not-sr-only sr-only" href="#main-content">Skip to main content</a>
    <Header />
    <main id="#main-content" aria-labelledby="pageHeading">
      {children}
    </main>
    <Footer />
  </>
);

export default MainLayout;