import { Drawer } from "features/drawer/view/pages/drawer/drawerHoc";
import { SchemaProvider } from "features/drawer/view/providers/schemaProvider";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SchemaProvider>
        <Drawer />
      </SchemaProvider>
    ),
  },
]);

function App() {
  useEffect(() => {}, []);

  return <RouterProvider router={router} />;
}

export default App;
