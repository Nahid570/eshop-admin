/* eslint-disable react/prop-types */

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = ({ mobileMenu, setMobileMenu }) => {
  return (
    <>
      <div className="flex items-center justify-between sm:justify-end px-4 py-2 bg-nav-gradient sticky top-0 left-0 z-40">
        {!mobileMenu ? (
          <GiHamburgerMenu
            className={`block sm:hidden  text-3xl fill-white cursor-pointer`}
            onClick={() => setMobileMenu((prevState) => !prevState)}
          />
        ) : (
          <AiOutlineCloseCircle
            className={`block sm:hidden  text-3xl fill-white cursor-pointer`}
            onClick={() => setMobileMenu((prevState) => !prevState)}
          />
        )}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYpiAt7KtZCtAaSIirJQTHdCVjreCXDLrcr0wcr6uo-fhtdXZoxePYbEJcpfufw8ZUh4&usqp=CAU"
          alt="admin"
          className="h-[40px] w-[40px] rounded-full cursor-pointer object-cover border border-white"
        />
      </div>
    </>
  );
};

export default Header;
