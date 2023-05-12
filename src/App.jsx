import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as loaderVans } from "./pages/Vans/Vans";
import VanDetails, {
  loader as loaderVanDetails,
} from "./pages/Vans/VanDetails";
import Dashboard, { loader as loaderDashboard} from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as loaderHostVans } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as loaderHostVanDetail,
} from "./pages/Host/HostVanDetail";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanInfo from "./pages/Host/HostVanInfo";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, {
  loader as loaderLogin,
  action as actionLogin,
} from "./pages/Login";
import { requireAuth } from "./utils";
import "./server"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loaderLogin}
        action={actionLogin}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={loaderVans}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        errorElement={<Error />}
        loader={loaderVanDetails}
      />

      <Route path="host" element={<HostLayout />} >
        <Route
          index
          element={<Dashboard />}
          errorElement={<Error />}
          loader={loaderDashboard}
        />
        <Route
          path="income"
          element={<Income />}
          errorElement={<Error />}
          loader={async ({ request }) => {
            await requireAuth(request)
            return null
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          errorElement={<Error />}
          loader={async ({ request }) => {
            await requireAuth(request)
            return null
          }}
        />
        <Route path="vans" element={<HostVans />} errorElement={<Error />} loader={loaderHostVans} />

        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          errorElement={<Error />}
          loader={loaderHostVanDetail}
        >
          <Route 
            index 
            element={<HostVanInfo />}
            loader={async ({ request }) => {
              await requireAuth(request)
              return null
            }}
          />
          <Route
              path="pricing" 
              element={<HostVanPricing />} 
              loader={async ({ request }) => {
                await requireAuth(request)
                return null
              }}
          />
          <Route
             path="photos" 
             element={<HostVanPhotos />}
             loader={async ({ request }) => {
            return await requireAuth(request) || null
            }}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return (
  <RouterProvider router={router} />
  );
}

{
  /* <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="vans" element={<Vans />} />
              <Route path="vans/:id" element={<VanDetails />} />

              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVans />} />

                <Route path="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<HostVanInfo />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode> */
}
