/* eslint-disable react/prop-types */
import { BsArrowLeftCircle } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { sidebarMenus } from "../utils/content";
import { BiLogOutCircle } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";

const Sidebar = ({ open, setOpen, mobileMenu }) => {
  const [active, setActive] = useState("dashboard");
  const [subMenu, setSubMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // When Menu Item will be change SUb menu active status will set to null
  useEffect(() => {
    setActiveSubMenu(null);
  }, [subMenu]);

  return (
    <>
      <div
        className={`${open ? "w-60" : "w-20"} duration-500 ${
          mobileMenu ? "w-60 flex flex-col" : "hidden"
        } sm:flex flex-col h-screen bg-sidebar-gradient p-5 sticky top-0 right-0 z-50 overflow-y-auto overflow-x-hidden no-scrollbar`}
      >
        <BsArrowLeftCircle
          className={`${
            open ? "rotate-0" : "rotate-180"
          } hidden sm:block absolute -right-0 top-14 text-3xl fill-white cursor-pointer transition-all duration-500 ease-in-out z-50`}
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
        <ul className="pt-10 flex flex-col">
          {sidebarMenus.map((menu, menuIndex) => (
            <>
              <Link to={menu.path} key={menuIndex}>
                <li
                  key={menuIndex}
                  className={`flex items-center ${
                    (open || mobileMenu) && "gap-x-4 font-sans"
                  } cursor-pointer ${menuIndex != 0 && "mt-5"}`}
                  onClick={() => {
                    setActive(menu.title.toLowerCase());
                    setSubMenu(subMenu === menuIndex ? null : menuIndex);
                  }}
                >
                  <span
                    className={`text-2xl text-slate-400 ${
                      active === menu.title.toLowerCase() &&
                      "text-white font-bold"
                    }`}
                    title={!open ? menu.title : undefined}
                  >
                    {" "}
                    <menu.src />{" "}
                  </span>
                  <span
                    className={`text-xl flex-1 text-slate-400 ${
                      active === menu.title.toLowerCase() &&
                      "text-white font-bold"
                    }`}
                  >
                    {(open || mobileMenu) && menu.title}
                  </span>
                  {((menu.isSubmenu && open) ||
                    (menu.isSubmenu && mobileMenu)) && (
                    <IoIosArrowDropdown
                      className={`text-slate-400 duration-300 text-xl ${
                        active == menu.title.toLowerCase() &&
                        "text-white font-bold"
                      } ${subMenu === menuIndex && "rotate-180"}`}
                    />
                  )}
                </li>
              </Link>
              {/* Sub-menus  */}
              {menu.isSubmenu && subMenu === menuIndex && open && (
                <ul className="mt-2 duration-1000">
                  {menu.subMenus.map((subItem, index) => (
                    <Link key={index} to={`/${subItem.path}`}>
                      <li
                      key={index}
                      className={`text-slate-400 px-4 py-1 flex items-center ${
                        subMenu === menuIndex && "gap-4"
                      } cursor-pointer`}
                      onClick={() => setActiveSubMenu(index)}
                    >
                      <AiOutlineArrowRight
                        className={`${index === activeSubMenu && "text-white"}`}
                      />
                      <span
                        className={`flex-1 text-lg ${
                          index === activeSubMenu && "text-white"
                        }`}
                      >
                        {subItem.title}
                      </span>
                    </li>
                    </Link>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>

        <div className="grow flex flex-col justify-end mt-20">
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
