import LayoutStyle from "../styles/layouts/LayoutStyle";
import ElementStyle from "../styles/elements/ElementsStyle";
import ComponentStyles from "../styles/components/ComponentSlyles";

export const Footer = () => {
  return (
    <footer className={ComponentStyles.footer}>
      <div className={LayoutStyle.container}>
        <p className={ElementStyle.footerPara}>© {new Date().getFullYear()} devMovies. All rights reserved.</p>  
      </div>             
    </footer>
  )
}
