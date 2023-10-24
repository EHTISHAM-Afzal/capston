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
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import About from "./components/pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
        <ThemeProvider defaultTheme="system" storageKey="littlelemon-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
    </Suspense>
  );
}

export default App;
