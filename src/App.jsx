import Main from "./components/Main"
import Layout from "../Layout"
import { createBrowserRouter , createRoutesFromElements , RouterProvider , Route } from "react-router-dom"
import NotFound from "./components/NotFound"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Main/>} />
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App