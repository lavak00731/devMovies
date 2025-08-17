import useChangeTitle from "../customHooks/useChangeTitle";
import MainLayout from "../layouts/MainLayout";
import { MainHeading } from "../components/MainHeading";
export const Favourites = () => {
  useChangeTitle("Favourites");
  return (
    <MainLayout>
      <MainHeading text={"Favourites"} />
    </MainLayout>    
  )
}
