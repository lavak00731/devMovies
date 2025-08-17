import useChangeTitle from "../customHooks/useChangeTitle";
import MainLayout from "../layouts/MainLayout"

export const MoviePage = () => {
  useChangeTitle("Movie Page");
  return (
    <MainLayout>
      <div>MoviePage</div>
    </MainLayout>    
  )
}
