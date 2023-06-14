/* eslint-disable react/prop-types */

import { BsArrowLeftCircle } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { sidebarMenus } from "../utils/content";
import { BiLogOutCircle } from "react-icons/bi";

const Sidebar = ({ open, setOpen, mobileMenu }) => {
  return (
    <>
      <div
        className={`${open ? "w-60" : "w-20"} duration-500 ${
          mobileMenu ? "w-60 flex flex-col" : "hidden"
        } sm:flex flex-col h-screen bg-sidebar-gradient p-5 sticky top-0 right-0 z-50`}
      >
        <BsArrowLeftCircle
          className={`${
            open ? "rotate-0" : "rotate-180"
          } hidden sm:block absolute -right-4 text-3xl fill-white cursor-pointer transition-all duration-500 ease-in-out`}
          onClick={() => setOpen((prevState) => !prevState)}
        />

        <Link to="/admin">
          <div
            className={`flex items-center ${(open || mobileMenu) && "gap-x-4"}`}
          >
            <RiAdminFill className="text-3xl fill-white " />
            <span className="text-2xl text-white duration-300 font-bold">
              {(open || mobileMenu) && "EShop"}
            </span>
          </div>
        </Link>

        {/* Menus  */}
        <ul className="pt-10 flex flex-col gap-6">
          {sidebarMenus.map((menu, index) => (
            <li
              key={index}
              className={`flex items-center ${
                (open || mobileMenu) && "gap-x-4 font-sans"
              } cursor-pointer`}
            >
              <span
                className="text-2xl text-slate-400"
                title={!open ? menu.title : undefined}
              >
                {" "}
                <menu.src />{" "}
              </span>
              <span className={`text-xl text-slate-400`}>
                {(open || mobileMenu) && menu.title}
              </span>
            </li>
          ))}
        </ul>

        <div className="grow flex flex-col justify-end">
          <Link to="/admin/logout">
            <div
              className={`flex cursor-pointer items-center ${
                (open || mobileMenu) && "gap-x-4"
              }`}
            >
              <BiLogOutCircle
                title={!open || mobileMenu ? "Logout" : undefined}
                className="text-2xl text-slate-400 "
              />
              <span className="text-xl text-slate-400 ">
                {(open || mobileMenu) && "Logout"}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
