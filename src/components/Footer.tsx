import LayoutStyle from "../styles/layouts/LayoutStyle";
import ElementStyle from "../styles/elements/ElementsStyle";

export const Footer = () => {
  return (
    <footer className='bg-green-400 py-9'>
      <div className={LayoutStyle.container}>
        <p className={ElementStyle.footerPara}>© {new Date().getFullYear()} devMovies. All rights reserved.</p>  
      </div>             
    </footer>
  )
}
