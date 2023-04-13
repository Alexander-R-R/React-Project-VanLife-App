import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./components/HostLayout";

export default function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />} />
              <Route path="/vans/:id" element={<VanDetails />} />

              <Route path="host" element={<HostLayout />} >
                 <Route index element={<Dashboard />} />
                 <Route path="income" element={<Income />} />
                 <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}
