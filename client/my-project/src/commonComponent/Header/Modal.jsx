import React, { useState} from 'react'
import { MdOutlineCancelPresentation } from "react-icons/md";
import { SuccesToast } from '../../Utils/Utils';


const Modal = ({onCloseModal}) => {

const [formData,setformData] = useState({
    Name : "",
    Email : "",
    Phone : "",
    Password : "",
    ConfirmPassword : "",
    Avatar: true
})

// handleChange Function is here
const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name] : e.target.value
    })
    console.log( e.target.value);
};

// handleSubmit Function is here
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(
      "http://localhost:5000/user",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },  
        body : JSON.stringify(formData)
      },
    );
    console.log(res)
  } catch (err) {
    console.log(err)
  }
};

  return (
    <>
      <div className="w-[500px] h-[380px] bg-BgColor absolute right-[30%] rounded-lg">
        <div>
          <span className="font-Lato font-bold text-3xl text-red-600 flex justify-end pr-6 pt-2 cursor-pointer">
            <MdOutlineCancelPresentation onClick={onCloseModal}/>
          </span>
        </div>
        <div>
          <form  method='POST' action="http://localhost:5000/user"  className="flex flex-col gap-y-2 pl-8" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              name="Name"
              className="font-Lato py-2 bg-slate-700 pl-3 w-96 text-white text-md rounded-md"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="Email"
              className="font-Lato py-2 bg-slate-700 pl-3 w-96 text-white text-md rounded-md"
              onChange={handleChange}
            />
             <input
              type="number"
              placeholder="Enter your number"
              name="Phone"
              className="font-Lato py-2 bg-slate-700 pl-3 w-96 text-white text-md rounded-md"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Enter your password"
              name="Password"
              className="font-Lato py-2 bg-slate-700 pl-3 w-96 text-white text-md rounded-md"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Enter your confirm password"
              name="ConfirmPassword"
              className="font-Lato py-2 bg-slate-700 pl-3 w-96 text-white text-md rounded-md"
              onChange={handleChange}
            />
            <input
              type="file"
              placeholder="Enter your file"
              name="Avatar"
              className="font-Lato text-white text-md"
              onChange={handleChange}
            />

            <button type="submit" className="font-Lato w-48 bg-red-600 py-2 px-10 mt-4 rounded-md text-white font-bold text-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal