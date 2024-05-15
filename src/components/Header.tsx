"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import mainlogo from "../../public/mainlogo.png";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useAtom } from "jotai";
import { useState } from "react";
import { logedIn } from "@/lib/atoms";
import { UserAuth } from "../app/context/AuthContext";
import { username } from "@/lib/atoms";
import { avatar } from "@/lib/atoms";
import avatar1 from "/public/avatar1.png";
import avatar2 from "/public/avatar2.png";
import avatar3 from "/public/avatar3.png";
import avatar4 from "/public/avatar4.png";
import avatar5 from "/public/avatar5.png";
import avatar6 from "/public/avatar6.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });
export function Header() {
  const [avatar1, setAvatar] = useState("avatar1");
  const authInfo = useSession();
  const [loged, setLoged] = useAtom(logedIn);
  const ifLogedN = () => {
    setLoged(false);
  };

  return (
    <div
      className={`bg-black w-full fixed top-0 z-50 text-white flex justify-between items-end px-8 py-5 mr-auto ${poppins.className} `}
    >
      <div className="flex items-center justify-end">
        <div className="mr-auto flex items-center">
          <a href="http://localhost:3000">
            <Image src={mainlogo} alt="Logo" className=" w-9 p-0" />
          </a>
          <a href="http://localhost:3000">
            <h1 className="  ml-3 text-3xl ">LearnSpace</h1>
          </a>
        </div>
        {authInfo.status == "authenticated" ? (
          <div className=" flex items-center ">
            <a href="http://localhost:3000">
              <h1 className=" transition ease-in-out duration-200  text-center p-5 ">
                Home
              </h1>
            </a>
            <a href="http://localhost:3000/courses1/">
              <h1 className=" transition ease-in-out duration-200  text-center p-5 ">
                Courses
              </h1>
            </a>
            <a href="http://localhost:3000/profile/">
              <h1 className=" transition ease-in-out duration-200  text-center p-5 ">
                Profile
              </h1>
            </a>

            <a>
              <Button onClick={() => signOut()}>Log out</Button>
            </a>
            <div className=" h-12 ml-8 mr-2 w-[1px] bg-white"></div>
            <Avatar>
              <AvatarImage
                src={authInfo.data?.user?.image || "avatar1"}
                alt="@shadcn"
              />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <h1
              className={`text-white bg-white ml-2 pr-1 bg-opacity-20 ${poppins.className}`}
            >
              @{authInfo.data?.user?.name}
            </h1>
          </div>
        ) : (
          <div className=" flex justify-end">
            <div className=" flex items-center">
              <a href="http://localhost:3000">
                <h1 className=" transition ease-in-out duration-200  text-center p-5 ">
                  Home
                </h1>
              </a>
              <a href="http://localhost:3000/courses1/">
                <h1 className=" transition ease-in-out duration-200  text-center p-5 ">
                  Courses
                </h1>
              </a>

              <a href="http://localhost:3000/login/">
                <Button>Sign In</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
