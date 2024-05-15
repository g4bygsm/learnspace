"use client";

import Image from "next/image";
import { useState } from "react";
import logosweb from "../../../public/logosweb.png";
import htmllogo from "/public/htmllogo.svg";
import csslogo from "../../../public/csslogo.png";
import jslogo from "../../../public/jslogo.png";
import homebg from "../../../public/homebg.jpg";
import reactlogo from "../../../public/reactlogo.png";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import { Secondmenu } from "@/components/Secondmenu";
import { Progress } from "@/components/ui/progress";
import mainlogo from "/public/mainlogo.png";
import { Poppins } from "next/font/google";
import { Atom, useAtom } from "jotai";
import { name } from "@/lib/atoms";
import { surname } from "@/lib/atoms";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function certificate() {
  const [logo, setLogo] = useState("htmllogo");
  const [name1, setName1] = useAtom(name);
  const [surname1, setSurname1] = useAtom(surname);
  return (
    <div>
      <div className=" bg-white h-[1080px] w-full">
        <div className="flex justify-center pt-10">
          <Image src={mainlogo} alt="" className=" w-12" />
          <div className=" flex items-center text-gray-900 text-5xl font-bold pl-10">
            LearnSpace
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400" />
          <p className="text-center text-[15px]">
            L E A R N S P A C E <br></br> C E R T I F I C A T E
          </p>
          <hr className="border-gray-400" />
        </div>
        <div className=" text-6xl font-bold text-center mt-10 text-gray-900">
          Certificate of Completion
        </div>
        <div className=" text-center text-2xl m-10">This is to certify</div>
        <div className=" text-5xl italic text-center">
          {surname1} {name1}
        </div>
        <div className=" text-center text-2xl m-10">
          for completing <b>The HTML Basic Guide for Begginers</b> on
          learnspace.com
        </div>
        <div className=" flex justify-center">
          <Image src={htmllogo} alt="" className=" w-36" />
        </div>
        <div className=" flex justify-center gap-[600px]">
          <div className=" text-start ml-20 text-2xl">
            Date : <b>30/04/2024</b>
          </div>
          <div className=" text-end mr-20 text-2xl">
            Greetings from creator of LearnSpace,<br></br>{" "}
            <b>Lucian Gabriel Trip</b>
          </div>
        </div>
      </div>
    </div>
  );
}
