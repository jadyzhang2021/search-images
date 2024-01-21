import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./components/ErrorPage";
import { PictureContext } from "./store/PictureContext";
import PictureContextProvide from "./store/PictureContext";
import Items from "./components/Items";
import Search from "./components/Search";
import { useContext } from "react";

function App() {
  const ctx = useContext(PictureContext);
  const title = ctx.title;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,

      children: [
        // { path: "/", element: <Navigate to="/mountains" replace /> },
        { path: "/mountains", element: <Items /> },
        { path: "/beach", element: <Items /> },
        { path: "/bird", element: <Items /> },
        { path: "/food", element: <Items /> },
        { path: `/search/${title}`, element: <Items /> },
        { path: "/search/:picture", element: <Search /> },
      ],
    },
  ]);
  return (
    <PictureContextProvide>
      <RouterProvider router={router} />
    </PictureContextProvide>
  );
}

export default App;
