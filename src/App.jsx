import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./pages/Feed";
import Layout from "./pages/Layout";
import VideoDetail from "./pages/VideoDetail";

export default function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Feed /> },
          { path: "video/:id", element: <VideoDetail /> },
        ],
      },
    ],
    { basename: import.meta.env.BASE_URL }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
