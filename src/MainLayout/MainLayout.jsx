import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Spinner from "../Shared/Spinner";

const MainLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    },150); // simulate loading
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div>
      {loading && <Spinner></Spinner>}
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-60px)] w-[97%] md:w-[95%] lg:w-[90%] 2xl:w-[70%] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
