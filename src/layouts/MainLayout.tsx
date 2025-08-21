import { useRef } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import type  { LayoutProps } from "../types/LayoutPros";
import LayoutStyle from '../styles/layouts/LayoutStyle';

const MainLayout: React.FC<LayoutProps> = ({ children }) =>{
  const btnRef = useRef<HTMLElement>(null);
  const handleClick = () => {
    if (btnRef.current) btnRef.current.focus();
  }
 

  return  (
    <>
      <button className="focus:not-sr-only sr-only" onClick={handleClick}>Skip to main content</button>
      <Header />
      <main ref={btnRef}  tabIndex={-1} aria-labelledby="pageHeading">
        <div className={LayoutStyle.container}>
          {children}
        </div>        
      </main>
      <Footer />
    </>
  );
}  

export default MainLayout;