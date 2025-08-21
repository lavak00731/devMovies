import LayoutStyle from '../styles/layouts/LayoutStyle';
import type { LayoutProps } from "../types/LayoutPros";
export const ViewLayout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className={LayoutStyle.viewContainer}>
        {children}
    </div>
  )
}
