import React from "react";
import LoginImage from "../assets/loginpageimage.png"
import Logo from "../assets/Logo.png"
import { useState } from "react";
import {useNavigate} from "react-router-dom"


const LoginComponent = () => {

const Navigate = useNavigate();
const[isLoginForm,setisLoginForm] = useState({
    Email: "",
    Password: "",
});

//HandleChange Function start Here
const HandleChange = (e) => {
  setisLoginForm({
    ...isLoginForm,
    [e.target.name] : e.target.value,
  })
  console.log(e.target.value)
};

// HandleSubmit function start Here
const  HandleSubmit = async (e) => {
    e.preventDefault()
    try {
        const res = await fetch("http://localhost:5000/",{
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify(isLoginForm)
        });
        const data = await res.json();
        if(res.ok){
          Navigate("/inbox")
        console.log(data.msg)
        }else{
          console.log(data.msg)
        }
    } catch (err) {
      console.log(err)
    }
};  


  return (
    <>
      <div className="bg-BgColor h-[100vh]">
        {/* <div>
          <Header />
        </div> */}
        <div className="flex items-center justify-center pt-6">
          <div className="w-[800px] h-[500px] rounded-lg flex">
            <div className="w-[300px] h-full bg-slate-600 rounded-l-lg">
              <div className="flex items-center justify-center h-full">
                <picture>
                  <img src={LoginImage} alt={LoginImage} />
                </picture>
              </div>
            </div>
            <div className="w-[500px] h-full bg-slate-700 rounded-r-lg">
              <div className="flex flex-col items-center gap-y-4 justify-center w-full pt-12">
                <picture>
                  <img src={Logo} alt={Logo} className="w-16 h-16 shadow-xl" />
                </picture>
                <h2 className="text-white font-Lato font-bold text-xl">
                  Login - Chat Application
                </h2>
              </div>
              {/* Login Input is Here */}
              <div className="flex flex-col items-center justify-center pt-6">
                <form
                  className="flex flex-col gap-y-4"
                  onSubmit={HandleSubmit}
                >
                  <input
                    type="email"
                    placeholder="Enter your mobile or email"
                    className="py-3 rounded-sm pl-3 w-[400px]pl-3 border-[1px] bg-slate-800 border-slate-700 text-white"
                    name="Email"
                    onChange={HandleChange}
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="py-3 rounded-sm pl-3 w-[400px] border-[1px] bg-slate-800 border-slate-700 text-white"
                    name="Password"
                     onChange={HandleChange}
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-48 py-2 bg-BgColor text-center text-white font font-bold text-xl rounded-sm cursor-pointer">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponent