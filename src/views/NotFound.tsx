import useChangeTitle from "../customHooks/useChangeTitle";
import MainLayout from "../layouts/MainLayout"

export const NotFound = () => {
  useChangeTitle("404 Not Found");
  return (
    <MainLayout>
      <div>NotFound</div>
    </MainLayout>
  )
}
