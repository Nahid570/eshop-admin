import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Header, Sidebar } from "./index";
import { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectCurrUser } from "../features/auth/authSlice";

const RequiredAuth = () => {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const location = useLocation();

 // const currUser = useSelector(selectCurrUser);
 const currUser = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      {currUser.token && currUser.role === "admin" ? (
        <div className="flex flex-auto relative">
          <div className="">
            <Sidebar open={open} setOpen={setOpen} mobileMenu={mobileMenu} />
          </div>
          <div className="grow">
            <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
            <div className="p-5 bg-gray-300 min-h-[calc(100vh-56px)] w-[100%]">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequiredAuth;
