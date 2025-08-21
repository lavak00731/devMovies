import { type ReactNode } from 'react';
import { useRef } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) =>{
  const btnRef = useRef<HTMLElement>(null);
  const handleClick = () => {
    if (btnRef.current) btnRef.current.focus();
  }
 

  return  (
    <>
      <button className="focus:not-sr-only sr-only" onClick={handleClick}>Skip to main content</button>
      <Header />
      <main ref={btnRef}  tabIndex={-1} aria-labelledby="pageHeading">
        {children}
      </main>
      <Footer />
    </>
  );
}  

export default MainLayout;