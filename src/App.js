import { ThemeProvider } from "@mui/material";
import { useState } from "react";
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
import WatchList from "./components/Watchlist/watchlist.component";
import { HerosProvider } from "./context/heroscontext";
import theme from "./theme/theme";
import { getListOfChampions } from "./utils/api";
import './App.css'
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />} errorElement={<NotFound />}>
//       <Route index element={<Dashboard />} loader={getListOfChampions}></Route>
//       <Route path="favorites" element={<WatchList />}></Route>
//     </Route>
//   )
// );

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<NotFound />}>
        <Route
          index
          element={
            <Dashboard
            />
          }
          loader={getListOfChampions}
        ></Route>
        <Route path="favorite" element={<WatchList />}></Route>
      </Route>
    )
  );
  return (
    <ThemeProvider theme={theme}>
      <HerosProvider>
        <RouterProvider router={router} />
      </HerosProvider>
    </ThemeProvider>
  );
}

export default App;
