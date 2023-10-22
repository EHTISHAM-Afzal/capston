import Layout from "../Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Suspense } from "react";
import Main from "./components/Main/Main";
import NotFound from "./components/pages/NotFound";
NotFound

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main/>} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
        <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
