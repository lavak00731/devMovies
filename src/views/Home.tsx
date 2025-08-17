import MainLayout from "../layouts/MainLayout";
import useChangeTitle from "../customHooks/useChangeTitle";
import { MainHeading } from "../components/MainHeading";

export const Home = () => {
  useChangeTitle("Home");
  return (
    <MainLayout>
      <MainHeading text="Home"/>
    </MainLayout>
    
  )
}
