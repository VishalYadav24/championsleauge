import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import NotFound from "./components/404/notfound.component";
import Dashboard from "./components/Home/dashboard.component";
import Layout from "./components/Layout/layout.component";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<NotFound/>}>
   <Route index element={<Dashboard/>}></Route>
  </Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
