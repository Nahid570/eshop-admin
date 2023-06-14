import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components/index";
import { useState } from "react";

const Layout = () => {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="flex flex-auto relative">
        <div className="">
          <Sidebar open={open} setOpen={setOpen} mobileMenu={mobileMenu} />
        </div>
        <div className="grow">
          <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          <div className="p-5 bg-gray-200 min-h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
