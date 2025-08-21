import LayoutStyle from '../styles/layouts/LayoutStyle';
import type { LayoutProps } from "../types/LayoutPros";
export const ViewLayout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="py-10 md:py-12 lg:py-16">
        {children}
    </div>
  )
}
