import React from 'react'
import { MdOutlineCancelPresentation } from "react-icons/md";


const Modal = ({onCloseModal}) => {
  return (
    <>
      <div className="w-[500px] h-[350px] bg-BgColor absolute right-[30%] rounded-lg">
        <div>
          <span className="font-Lato font-bold text-3xl text-red-600 flex justify-end pr-6 pt-2 cursor-pointer">
            <MdOutlineCancelPresentation onClick={onCloseModal}/>
          </span>
        </div>
        <div>
          <form className="flex flex-col gap-y-2 pl-8 h-[350px]">
            <input
              type="text"
              placeholder="Enter your name"
              name="Name"
              className="font-Lato py-2 bg-slate-700 pl-3 w-96 text-white text-md rounded-md"
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="Email"
              className="font-Lato py-2 bg-slate-700 pl-3 w-96 text-white text-md rounded-md"
            />
            <input
              type="password"
              placeholder="Enter your password"
              name="Password"
              className="font-Lato py-2 bg-slate-700 pl-3 w-96 text-white text-md rounded-md"
            />
            <input
              type="password"
              placeholder="Enter your confirm password"
              name="ConfirmPassword"
              className="font-Lato py-2 bg-slate-700 pl-3 w-96 text-white text-md rounded-md"
            />
            <input
              type="file"
              placeholder="Enter your file"
              name="Avatar"
              className="font-Lato text-white text-md"
            />

            <button className="font-Lato w-48 bg-red-600 py-2 px-10 mt-4 rounded-md text-white font-bold text-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal