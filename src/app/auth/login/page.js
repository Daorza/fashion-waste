"use client";

import { useState } from "react";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      window.location.href = "/seller_profile"

    } else {
      alert("Please fill in both fields.");
    }
  };
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="md:grid md:grid-cols-2 flex flex-col relative max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="md:col-span-1 h-screen md:hidden block">
          <Image
            src={"/models/models1.jpg"}
            alt="models image"
            height={1000}
            width={1000}
            className="object-cover object-top h-screen"
          />
        </div>
        <div className="md:col-span-1 md:h-[32rem] md:bg-white grid items-end md:items-start h-screen absolute md:static inset-0 rounded-xl md:rounded-none">
          <div className="h-[38rem] md:h-fit bg-white py-6 rounded-t-2xl md:rounded-none flex flex-col items-center justify-between gap-6 p-4">
            <div className="flex flex-col items-center gap-6">
              <h1 className="font-bold text-2xl text-black md:text-center mb-12 md:mb-0">
                Welcome back! Glad to see you again!
              </h1>
              <div className="w-full flex flex-col gap-6 items-center">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-primary w-fit text-white rounded-md"
                  onClick={handleLogin}
                >
                  Login Now
                </button>
              </div>
            </div>
            <p className="md:block hidden">or</p>
            <div>
              <button className="px-4 py-2 flex gap-4 w-full items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100">
                <Image src="/asset/google.svg" alt="Google" width={40} height={40} />
                Log in with Google
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-[32rem] hidden md:block">
          <Image
            src={"/models/models1.jpg"}
            alt="models image"
            height={1000}
            width={1000}
            className="object-cover object-top h-[32rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
