import React, { type ReactNode } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default MainLayout;