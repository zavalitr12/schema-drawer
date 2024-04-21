import { Drawer } from "features/drawer/view/pages/drawer/drawerHoc";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Drawer />,
  },
]);

function App() {
  useEffect(() => {}, []);

  return <RouterProvider router={router} />;
}

export default App;
