import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import Logo from "../assets/Logo.png"
import { AiFillDelete } from "react-icons/ai";
import Modal from '../commonComponent/Header/Modal';



const Userdetails = () => {

const[isOpenModal,seisOpenModal] = useState(false)



// onUserHandle Funciton start Here
const onUserHandle = () => {
  seisOpenModal(!isOpenModal);
};

  return (
    <>
      <div className="bg-BgColor h-[100vh] relative">
        <div className="flex items-center justify-center pt-6">
          <div className="w-[1000px] h-[500px] bg-slate-700 rounded-lg">
            <div className="flex flex-col items-center justify-center gap-y-3 pt-6">
              <h2 className="font-Lato font-bold text-2xl text-white">
                Manage Users
              </h2>
              <span
                className={`font-Lato font-bold text-3xl text-white cursor-pointer ${isOpenModal && "text-yellow-400"}`}
                onClick={onUserHandle}
              >
                <FaPlusCircle />
              </span>
              {/* Modal Option */}
              <div className="z-30">
                {isOpenModal && (
                  <div>
                    <Modal onCloseModal={() => seisOpenModal(false)} />
                  </div>
                )}
              </div>

              {/* Modal Option */}
            </div>
            <div className="w-[900px] m-auto pt-6 relative">
              <ul className="flex items-center justify-between bg-BgColor py-2">
                <li className="basis-1/5 pl-3 font-Lato font-bold text-xl">
                  Name
                </li>
                <li className="basis-2/5 pl-8 font-Lato font-bold text-xl">
                  Email
                </li>
                <li className="basis-1/5 pl-6 font-Lato font-bold text-xl">
                  Manage
                </li>
              </ul>
              {/* Users Details */}
              <div className="flex items-center justify-between pt-2 border-b-[1px] pb-2">
                <div className="flex items-center gap-x-3 basis-1/5 pl-3">
                  <picture>
                    <img src={Logo} alt={Logo} className="w-12 h-12" />
                  </picture>
                  <h2 className="text-white font-Lato  text-sm">User2</h2>
                </div>
                <div className="basis-2/5 pl-8">
                  <h2 className="font-Lato text-white text-sm">
                    mahmudulhasan8627@gmail.com
                  </h2>
                </div>
                <div className="basis-1/5 pl-8">
                  <span className="basis-1/5 font-Lato text-white active:text-red-400 text-xl cursor-pointer">
                    <AiFillDelete />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userdetails