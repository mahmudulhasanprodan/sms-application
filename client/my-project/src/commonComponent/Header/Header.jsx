import React, { useEffect, useRef } from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <>
      <div className="bg-BgColor">
        <div>
          <ul className="flex items-center justify-center gap-x-3 pt-6">
            <NavLink to={"/inbox"}>
              <li className="border-r-[1px] pr-2 border-white  cursor-pointer font-Lato font-bold">
                Inbox
              </li>
            </NavLink>
            <NavLink to={"/user"}>
              <li className="border-r-[1px] pr-2 border-white  cursor-pointer font-Lato font-bold">
                Users
              </li>
            </NavLink>
            <NavLink to={"/"}>
              <li className="cursor-pointer font-Lato font-bold focus:text-white">Login</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header