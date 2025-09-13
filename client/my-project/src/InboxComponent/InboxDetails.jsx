import React from 'react'
import { FaSearch } from "react-icons/fa";
import Logo from "../assets/Logo.png"
import { AiFillDelete } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";

const InboxDetails = () => {
  return (
    <>
      <div className="bg-BgColor h-[100vh]">
        <div className="flex items-center justify-center pt-6">
          <div className="w-[1000px] h-[500px] bg-slate-700 rounded-lg flex">
            {/* User Details */}
            <div className="w-[300px] h-full bg-slate-600 rounded-l-lg">
              <div className="flex items-center justify-center relative pt-3">
                <div>
                  <span className="absolute top-6 pl-2 text-white">
                    <FaSearch />
                  </span>
                </div>
                <div>
                  <input
                    type="search"
                    placeholder="Search"
                    className="pl-8 py-2 w-[250px] text-white rounded-md bg-slate-800"
                  />
                </div>
              </div>
              <div className="px-2 py-3 bg-slate-500 flex justify-between mt-3">
                <div className="flex items-center gap-x-3">
                  <div>
                    <picture>
                      <img src={Logo} alt={Logo} className="w-12 h-12" />
                    </picture>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h2 className="font-Lato text-white font-semibold text-sm">
                      Name
                    </h2>
                    <h3 className="font-Lato text-white font-semibold text-xs">
                      This is message
                    </h3>
                  </div>
                </div>
                <div className="pr-3">
                  <span className="font-Lato text-white font-semibold text-xs">
                    13-Sep
                  </span>
                </div>
              </div>
            </div>
            {/* User SMS Platform */}
            <div className="w-[700px] h-full bg-slate-700 rounded-r-lg">
              <div className="w-[700px] h-[60px] bg-slate-700 rounded-r-lg shadow-lg">
                <div className="flex items-center justify-between px-4 pt-4">
                  <h2 className="font-Lato font-bold text-xl text-white">
                    Mahmudul Hasan
                  </h2>
                  <span className="font-Lato font-bold text-xl text-white cursor-pointer">
                    <AiFillDelete />
                  </span>
                </div>
              </div>
              <div className="w-[700px] h-[380px] bg-slate-900 px-4 overflow-y-hidden">
                {/* Your Message */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-end pt-4">
                    <div className="w-[400px] h-12 bg-cyan-200 rounded-xl">
                      <p className="font-Lato flex items-center text-xl h-full font-semibold px-3 flex-wrap">
                        Hi how are you?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end pt-4">
                    <p className="font-Lato font-bold text-white">Sep-13</p>
                  </div>
                </div>
                {/* Friend Message */}
                <div className="flex flex-col">
                  <div className="flex items-center pt-4">
                    <div className="w-[400px] h-12 bg-blue-400 rounded-xl">
                      <p className="font-Lato flex items-center text-xl h-full font-semibold px-3 flex-wrap">
                        Hi how are you?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center pt-4">
                    <p className="font-Lato font-bold text-white">Sep-13</p>
                  </div>
                </div>
              </div>
              {/* message type part */}
              <div className="w-[700px] h-[60px] bg-slate-700 rounded-r-lg shadow-lg px-4">
                <div className="flex items-center h-full gap-x-3">
                  <span className="text-white font-Lato cursor-pointer">
                    <GrAttachment />
                  </span>
                  <input
                    type="text"
                    placeholder="Type a message"
                    className="w-[600px] py-3 rounded-md font-Lato text-sm pl-3 bg-slate-900 text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InboxDetails