import MainLayout from "../layouts/MainLayout";
import useChangeTitle from "../customHooks/useChangeTitle";

export const Home = () => {
  useChangeTitle("Home");
  return (
    <MainLayout>
      <div>Home</div>
    </MainLayout>
    
  )
}
