import useChangeTitle from "../customHooks/useChangeTitle";
import MainLayout from "../layouts/MainLayout"
export const Favourites = () => {
  useChangeTitle("Favourites");
  return (
    <MainLayout>
      <div>Favourites</div>
    </MainLayout>    
  )
}
