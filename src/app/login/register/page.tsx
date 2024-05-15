"use client";

import Image from "next/image";
import mainlogo from "/public/mainlogo.png";
import * as React from "react";
import loginbg from "/public/loginbg.png";
import { Poppins } from "next/font/google";
import { auth } from "../firebase";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAtom } from "jotai";
import { logedIn } from "@/lib/atoms";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function Register() {
  const [loged, setLoged] = useAtom(logedIn);
  const ifLoged = () => {
    setLoged(true);
  };
  const ifLogedN = () => {
    setLoged(false);
  };

  const [pass, setPass] = useState("password");
  function passView() {
    if (pass === "password") {
      event.preventDefault();
      setPass("text");
    } else {
      event.preventDefault();
      setPass("password");
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-gray-900">Register</h2>
          <p className="text-xs mt-4 text-gray-900">
            If you are new, make easily an account!
          </p>

          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="fisrtname"
              placeholder="First Name"
            />
            <input
              className="p-2 rounded-xl border"
              type="text"
              name="lastname"
              placeholder="Last Name"
            />
            <input
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={pass}
                name="password"
                placeholder="Password"
              />
              <button onClick={passView}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center mt-8">
            <a href="http://localhost:3000">
              <button
                onClick={ifLoged}
                className="bg-gray-900 rounded-xl text-white py-2 hover:scale-105 duration-300 w-52"
              >
                Register
              </button>
            </a>
          </div>
          <div className="mt-3 text-xs flex justify-between items-center text-gray-900">
            <p>Already have an account?</p>
            <a href="http://localhost:3000/login/">
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Log In
              </button>
            </a>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <Image className="rounded-2xl" src={mainlogo} alt={""} />
          <h1 className="font-extrabold text-center text-3xl text-gray-900">
            LearnSpace
          </h1>
        </div>
      </div>
    </div>
  );
}
