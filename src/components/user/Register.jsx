import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password, phoneNumber } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
        phoneNumber,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("User Created. Welcome new Dev");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center flex-col items-center bg-user-background bg-cover h-screen">
      <div className="animate-fade-down animate-delay-[500ms] p-4 flex flex-col justify-between items-center border bg-white rounded-lg">
        <h2 className="text-xl my-8 uppercase font-black"> Register</h2>
        <form onSubmit={registerUser} className="w-[400px]">
          {/* Name */}
          <div className="">
          <label className="block my-2 text-sm font-medium text-gray-900 dark:text-black">
            Name
          </label>
          <input
            type="text"
            value={data.name}
            id="name"
            name="name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Name"
            className="border border-black-100 rounded-lg text-black bg-white-800 h-10 w-64 pl-3 truncate outline-none w-full"
          />
          </div>

          {/* Email */}
          <label className="block my-2 text-sm font-medium text-gray-900 dark:text-black">
            Email
          </label>
          <input
            type="email"
            value={data.email}
            id="email"
            name="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Please enter your email"
            className="border border-black-100 rounded-lg text-black bg-white-800 h-10 w-64 pl-3 truncate w-full outline-none"
          />

          {/* Password */}
          <label className="block my-2 text-sm font-medium text-gray-900 dark:text-black">
            Password
          </label>
          <input
            type="password"
            value={data.password}
            id="password"
            name="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="Please enter from 8 - 20 letters"
            className="border border-black-100 rounded-lg text-black bg-white-800 h-10 w-64 pl-3 truncate w-full outline-none"
            minLength={8}
            maxLength={20}
          />
          <label className="block my-2 text-sm font-medium text-gray-900 dark:text-black">
            Phone Number
          </label>
          <input
            type="text"
            value={data.phoneNumber}
            id="phoneNumber"
            name="phoneNumber"
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
            placeholder="Phone Number"
            className="border border-black-100 rounded-lg text-black bg-white-800 h-10 w-64 pl-3 truncate w-full outline-none"
            minLength={10}
            maxLength={10}
            pattern="[0-9]+"
          />

          <button
            type="submit"
            className="border-2 border-black-500 rounded-lg text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 mt-8 mb-3 flex justify-center items-center w-64 w-full"
          >
            Register
          </button>
          <div className="text-sm text-center">
            Already have an account ?
            <Link to={"/login"} className="text-blue-700 hover:text-red-700">
              {" "}
              Login{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
