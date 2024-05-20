"use client";

import { useEffect, useRef } from "react";
import mainlogo from "/public/mainlogo.png";
import htmllogo from "/public/htmllogo.svg";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import hbasict from "/public/hbasict.png";
import hbasicp from "/public/hbasicp.png";
import hcontentt from "/public/hcontentt.png";
import hcontentp from "/public/hcontentp.png";
import helementst from "/public/helementst.png";
import helementsp from "/public/helementsp.png";
import hlinkt from "/public/hlinkt.png";
import hlinkp from "/public/hlinkp.png";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useAtom } from "jotai";
import { sHtmlCAtom } from "@/lib/atoms";
import { sHtmlBAtom } from "@/lib/atoms";
import { sHtmlEAtom } from "@/lib/atoms";
import { sHtmlLAtom } from "@/lib/atoms";
import { htmlP } from "@/lib/atoms";
import html2pdf from "html2pdf.js";
import { name } from "@/lib/atoms";
import { surname } from "@/lib/atoms";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function Htmlmenu() {
  const [name1, setName1] = useAtom(name);
  const [surname1, setSurname1] = useAtom(surname);
  const [c1] = useAtom(sHtmlBAtom);
  const [c2] = useAtom(sHtmlCAtom);
  const [c3] = useAtom(sHtmlEAtom);
  const [c4] = useAtom(sHtmlLAtom);
  const [html, setHtml] = useAtom(htmlP);
  const totalProgress = c1 + c2 + c3 + c4;
  const main = Math.floor((totalProgress / 400) * 100);
  const [pass, setPass] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  const [currentDate, setCurrentDate] = useState(getDate());

  const isPass = () => {
    if (main != 100) {
      setShowCertificate(false);
    } else {
      setShowCertificate(true);
    }
  };

  useEffect(() => {
    isPass();
    setHtml(main);
  });

  const slidesRef = useRef(null);

  const handleGeneratePdf = () => {
    const opt = {
      margin: 0,
      filename: "certificate.pdf",
      image: { type: "svg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "in", format: "A4", orientation: "landscape" },
    };
    html2pdf().from(slidesRef.current).set(opt).save();
  };

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
          Start here your HTML journey!
        </h1>
        <div className="flex justify-center mt-12">
          <div className="flex-col justify-center">
            <a
              className=" hover:cursor-pointer"
              href="http://localhost:3000/courses1/html/basic/basictheory"
            >
              <Image
                alt=""
                src={hbasict}
                className="w-80 ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <a
              className=" hover:cursor-pointer"
              href="http://localhost:3000/courses1/html/basic/basicpractice"
            >
              <Image
                alt=""
                src={hbasicp}
                className="w-80 ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <div className="flex justify-center items-center mt-5">
              <Progress value={c1} />
            </div>
            <h1 className="text-center mt-3 text-white"> {c1} completed</h1>
          </div>
          <div>
            <a
              className=" hover:cursor-pointer"
              href="http://localhost:3000/courses1/html/content/contenttheory"
            >
              <Image
                alt=""
                src={hcontentt}
                className="w-80 ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <a
              className=" hover:cursor-pointer"
              href="http://localhost:3000/courses1/html/content/contentpractice"
            >
              <Image
                alt=""
                src={hcontentp}
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
              href="http://localhost:3000/courses1/html/elements/elementstheory"
            >
              <Image
                alt=""
                src={helementst}
                className="w-80 ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <a
              className=" hover:cursor-pointer"
              href="http://localhost:3000/courses1/html/elements/elementspractice"
            >
              <Image
                alt=""
                src={helementsp}
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
              href="http://localhost:3000/courses1/html/links/linkstheory"
            >
              <Image
                alt=""
                src={hlinkt}
                className="w-80 ml-5 mt-5 mr-5 hover:opacity-50 rounded-3xl"
              />
            </a>
            <a
              className=" hover:cursor-pointer hover:w-[340px] "
              href="http://localhost:3000/courses1/html/links/linkspractice"
            >
              <Image
                alt=""
                src={hlinkp}
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
          <Progress value={main} className="w-96 mt-5 h-10" />
        </div>
        <h1 className="text-white text-2xl mt-5 pb-10">{main}% completed</h1>

        {showCertificate ? (
          <div>
            <div className="flex items-center justify-center">
              <div className=" mt-20 w-[1000px] h-1 bg-white "></div>
            </div>
            <div className=" text-white text-4xl p-10">
              DOWNLOAD YOUR CERTIFICATE HERE:
            </div>
            <div>
              <button
                onClick={handleGeneratePdf}
                className="w-[250px] h-[80px] hover:w-[225px] hover:h-[70px] hover:text-2xl bg-transparent border-2 border-white rounded-3xl text-3xl text-white hover:text-black hover:bg-white transition-height duration-300 ease-out mb-10 "
              >
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
      <div className="hidden">
        <div ref={slidesRef} className=" bg-white h-[1080px] w-full">
          <div className="flex justify-center pt-2">
            <Image src={mainlogo} alt="" className=" w-8" />
            <div className=" flex items-center text-gray-900 text-3xl font-bold pl-2">
              LearnSpace
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-[10px]">
              L E A R N S P A C E <br></br> C E R T I F I C A T E
            </p>
            <hr className="border-gray-400" />
          </div>
          <div className=" text-4xl font-bold text-center mt-10 text-gray-900">
            Certificate of Completion
          </div>
          <div className=" text-center text-xl m-3">This is to certify</div>
          <div className=" text-5xl italic text-center">
            {surname1} {name1}
          </div>
          <div className=" text-center text-xl m-10">
            for completing <b>The HTML Basic Guide for Begginers</b> on
            learnspace.com
          </div>
          <div className=" flex justify-center">
            <Image src={htmllogo} alt="" className=" w-36" />
          </div>
          <div className=" flex justify-center gap-[600px]">
            <div className=" text-start ml-20 text-2xl">
              Date : <b>{currentDate}</b>
            </div>
            <div className=" text-end mr-20 text-2xl">
              Greetings from creator of LearnSpace,<br></br>{" "}
              <b>Lucian Gabriel Trip</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
