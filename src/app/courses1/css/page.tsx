"use client";

import { useEffect } from "react";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import cbasict from "/public/cbasict.png";
import cbasicp from "/public/cbasicp.png";
import cstylet from "/public/cstylet.png";
import cstylep from "/public/cstylep.png";
import cpositiont from "/public/cpositiont.png";
import cpositionp from "/public/cpositionp.png";
import ctransitionst from "/public/ctransitionst.png";
import ctransitionsp from "/public/ctransitionsp.png";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useAtom } from "jotai";
import { sCssBAtom } from "@/lib/atoms";
import { sCssSAtom } from "@/lib/atoms";
import { sCssPAtom } from "@/lib/atoms";
import { sCssTAtom } from "@/lib/atoms";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function Htmlmenu() {
  const [c1] = useAtom(sCssBAtom);
  const [c2] = useAtom(sCssSAtom);
  const [c3] = useAtom(sCssPAtom);
  const [c4] = useAtom(sCssTAtom);

  const totalProgress = c1 + c2 + c3 + c4;
  const mainProgress = Math.floor((totalProgress / 400) * 100);
  const [pass, setPass] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const isPass = () => {
    if (mainProgress != 100) {
      setShowCertificate(false);
    } else {
      setShowCertificate(true);
    }
  };

  useEffect(() => {
    isPass();
  });

  return (
    <div className={`${poppins.className} bg-gray-900 `}>
      <Header></Header>
      <Chatbotbtn></Chatbotbtn>
      <div className="pt-32 pb-4">
        <div className="flex justify-center">
          <div className=" w-[600px] h-1 flex justify-center items-center bg-white"></div>
        </div>
        <br></br>
        <h1 className="text-white text-center text-5xl">
          Design your project with CSS!
        </h1>
        <div className="flex justify-center mt-12">
          <div className="flex-col justify-center">
            <a
              className=" hover:cursor-pointer"
              href="http://localhost:3000/courses1/css/basic/basictheory"
            >
              <Image
                alt=""
                src={cbasict}
                className="w-80 ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <a
              className=" hover:cursor-pointer"
              href="http://localhost:3000/courses1/css/basic/basicpractice"
            >
              <Image
                alt=""
                src={cbasicp}
                className="w-80 ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <div className="flex justify-center items-center mt-5">
              <Progress value={c1} className="w-52 h-4 flex jus" />
            </div>
            <h1 className="text-center mt-3 text-white"> {c1} completed</h1>
          </div>
          <div>
            <a
              className=" hover:cursor-pointer"
              href="http://localhost:3000/courses1/css/style/styletheory"
            >
              <Image
                alt=""
                src={cstylet}
                className="w-80 ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <a
              className=" hover:cursor-pointer"
              href="http://localhost:3000/courses1/css/style/stylepractice"
            >
              <Image
                alt=""
                src={cstylep}
                className="w-80 ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <div className="flex justify-center items-center mt-5">
              <Progress value={c2} className="w-52 h-4 flex jus" />
            </div>
            <h1 className="text-center mt-3 text-white"> {c2} completed</h1>
          </div>
          <div>
            <a
              className=" hover:cursor-pointer"
              href="http://localhost:3000/courses1/css/position/positiontheory"
            >
              <Image
                alt=""
                src={cpositiont}
                className="w-80 ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <a
              className=" hover:cursor-pointer"
              href="http://localhost:3000/courses1/css/position/positionpractice"
            >
              <Image
                alt=""
                src={cpositionp}
                className="w-80 ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <div className="flex justify-center items-center mt-5">
              <Progress value={c3} className="w-52 h-4 flex jus" />
            </div>
            <h1 className="text-center mt-3 text-white"> {c3} completed</h1>
          </div>
          <div>
            <a
              className=" hover:cursor-pointer"
              href="http://localhost:3000/courses1/css/transitions/transitionstheory"
            >
              <Image
                alt=""
                src={ctransitionst}
                className="w-80 ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <a
              className=" hover:cursor-pointer hover:w-[340px] "
              href="http://localhost:3000/courses1/css/transitions/transitionspractice"
            >
              <Image
                alt=""
                src={ctransitionsp}
                className="w-[320px] ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <div className="flex justify-center items-center mt-5">
              <Progress value={c4} className="w-52 h-4 flex jus" />
            </div>
            <h1 className="text-center mt-3 text-white"> {c4} completed</h1>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className=" text-center flex-col items-center justify-center">
        <h1 className="text-white text-4xl"> COURSE PROGRESS</h1>
        <div className="flex justify-center">
          <Progress value={mainProgress} className="w-96 mt-5 h-10" />
        </div>
        <h1 className="text-white text-2xl mt-5 pb-10">
          {mainProgress}% completed
        </h1>

        {showCertificate ? (
          <div>
            <div className="flex items-center justify-center">
              <div className=" mt-20 w-[1000px] h-1 bg-white "></div>
            </div>
            <div className=" text-white text-4xl p-10">
              DOWNLOAD YOUR CERTIFICATE HERE:
            </div>
            <div>
              <button className="w-[250px] h-[80px] hover:w-[225px] hover:h-[70px] hover:text-2xl bg-transparent border-2 border-white rounded-3xl text-3xl text-white hover:text-black hover:bg-white transition-height duration-300 ease-out mb-10 ">
                DOWNLOAD
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className=" mb-20 w-[1000px] h-1 bg-white  "></div>
            </div>
          </div>
        ) : (
          <div className=" text-white text-4xl p-10"></div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
