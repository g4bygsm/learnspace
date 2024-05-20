"use client";

import Image from "next/image";
import { useState } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import logosweb from "../../../public/logosweb.png";
import htmllogo from "../../../public/htmllogo.svg";
import htmlCover from "/public/htmlCover.png";
import cssCover from "/public/cssCover.png";
import jsCover from "/public/jsCover.png";
import nextCover from "/public/nextCover.png";
import tailwindCover from "/public/tailwindCover.png";
import phpCover from "/public/phpCover.png";
import reactCover from "/public/reactCover.png";
import designCover from "/public/designCover.png";
import csslogo from "../../../public/csslogo.png";
import jslogo from "../../../public/jslogo.png";
import homebg from "../../../public/homebg.jpg";
import reactlogo from "../../../public/reactlogo.png";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import { Secondmenu } from "@/components/Secondmenu";
import { Progress } from "@/components/ui/progress";
import { Poppins } from "next/font/google";

import { useAtom } from "jotai";
import { hstart1 } from "@/lib/atoms";
import { hstart2 } from "@/lib/atoms";
import { hstart3 } from "@/lib/atoms";
import { hstart4 } from "@/lib/atoms";
import { hstart5 } from "@/lib/atoms";
import { hstart6 } from "@/lib/atoms";
import { hstart7 } from "@/lib/atoms";
import { hstart8 } from "@/lib/atoms";

import { Button } from "@/components/ui/button";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function Courses1() {
  const [start, setStart1] = useAtom(hstart1);
  const ifstart1 = () => {
    setStart1("Continue");
  };
  const [start2, setStart2] = useAtom(hstart2);
  const ifstart2 = () => {
    setStart2("Continue");
  };
  const [start3, setStart3] = useAtom(hstart3);
  const ifstart3 = () => {
    setStart3("Continue");
  };
  const [start4, setStart4] = useAtom(hstart4);
  const ifstart4 = () => {
    setStart4("Continue");
  };
  const [start5, setStart5] = useAtom(hstart5);
  const ifstart5 = () => {
    setStart5("Continue");
  };
  const [start6, setStart6] = useAtom(hstart6);
  const ifstart6 = () => {
    setStart6("Continue");
  };
  const [start7, setStart7] = useAtom(hstart7);
  const ifstart7 = () => {
    setStart7("Continue");
  };
  const [start8, setStart8] = useAtom(hstart8);
  const ifstart8 = () => {
    setStart8("Continue");
  };

  return (
    <div
      className={`${poppins.className} flex-col items-center justify-center text-center`}
    >
      <Header className="z-0"></Header>
      <Chatbotbtn></Chatbotbtn>

      <div className=" flex-col pb-0  pt-28 bg-gray-900">
        <div className=" ml-10 text-5xl mt-10 text-start text-white">
          <b>Our Courses</b>
        </div>
        <div className="w-full h-full flex-col flex items-center justify-center">
          {/* TABS LIST */}

          <Tabs
            defaultValue="all"
            className=" pb-32 pt-10"
          >
            <TabsList className=" w-80 flex grid-cols-2 bg-transparent">
              <TabsTrigger value="all" default>
                All
              </TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
            </TabsList>

            {/* ALL TAB */}
            <TabsContent value="all" className="  w-full flex">
              
              <div className=" flex flex-col items-center justify-center">
                <div className=" flex items-center justify-center pt-20">
                  
                  {/* HTML COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={htmlCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-5 w-72">
                      The HTML Basic Guide for beginners
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Get started with our beginner-friendly HTML course! Learn to
                      build captivating web pages from scratch and master essential
                      HTML fundamentals.
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>
                  {/* CSS COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={cssCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-5 w-72">
                      The CSS - Cascadin Style Sheet course for begginers
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Start your journey with our beginner-friendly CSS course! Dive 
                      into creating stunning web designs from scratch and mastering 
                      essential CSS principles.
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/css"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>

                  {/* JAVASCRIPT COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={jsCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-6 w-72">
                      JavaScript Beginner's Guide 
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Embark on your coding adventure with our beginner-friendly JavaScript
                      course! Learn to bring your web pages to life with dynamic functionality
                      and master essential JavaScript concepts.
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>

                  {/* REACT COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={reactCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-5 w-72">
                      The Native React Course for beginners.
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Begin your React voyage with our immersive course! Dive into the
                      world of building modern, interactive web applications using 
                      React.js.
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-center pt-20">
                  
                  {/* TAILWIND COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={tailwindCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-5 w-72">
                      The Tailwind Styling Course for beginners
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Explore Tailwind CSS with our user-friendly tutorials! Dive into
                      modern web design techniques and elevate your projects with 
                      streamlined styling using Tailwind CSS.
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>
                  
                  {/* NEXT JS COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={nextCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-5 w-72">
                      Next.JS React Component Beginner's Guide
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Embark on your coding journey with Next.js! Discover the power of 
                      server-side rendering, seamless routing, and effortless deployment. 
                      Elevate your web development skills with Next.js and bring your 
                      projects to life!
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>

                  {/* PHP COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={phpCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-5 w-72">
                      The PHP
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Unlock the potential of web development with PHP! Dive into server-side 
                      scripting, dynamic content generation, and robust backend solutions. 
                      Harness the versatility of PHP to create dynamic and interactive websites 
                      that leave a lasting impression.
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>
                  
                  {/* DESIGN TIPS COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={designCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-5 w-72">
                      Design Tips
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Elevate your designs with expert tips! Discover the art of color harmony, 
                      typography magic, and layout mastery. Transform your creations from ordinary 
                      to extraordinary with our curated design insights and unleash your creativity 
                      like never before!
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            {/* FRONTEND TAB */}
            <TabsContent value="frontend" className="  w-full flex">
              <div className=" flex flex-col items-center justify-center">
                <div className=" flex items-center justify-center pt-20">
                  
                  
                  {/* HTML COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={htmlCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-14 w-72">
                      The HTML Basic Guide for beginners
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Get started with our beginner-friendly HTML course! Learn to
                      build captivating web pages from scratch and master essential
                      HTML fundamentals.
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>
                  {/* CSS COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={cssCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-14 w-72">
                      The CSS - Cascadin Style Sheet course for begginers
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Start your journey with our beginner-friendly CSS course! Dive 
                      into creating stunning web designs from scratch and mastering 
                      essential CSS principles.
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>


                    {/* TAILWIND COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={tailwindCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-8 w-72">
                      The Tailwind Styling Course for beginners
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Explore Tailwind CSS with our user-friendly tutorials! Dive into
                      modern web design techniques and elevate your projects with 
                      streamlined styling using Tailwind CSS.
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>

                  {/* DESIGN TIPS COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={designCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-8 w-72">
                      Design Tips
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Elevate your designs with expert tips! Discover the art of color harmony, 
                      typography magic, and layout mastery. Transform your creations from ordinary 
                      to extraordinary with our curated design insights and unleash your creativity 
                      like never before!
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>
                </div>
                </div>
            </TabsContent>
            
            {/* BACKEND TAB */}

            <TabsContent value="backend" className="  w-full flex">
              <div className=" flex flex-col items-center justify-center">
                <div className=" flex items-center justify-center pt-20">

                  
                  {/* JAVASCRIPT COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={jsCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-20 w-72">
                      JavaScript Beginner's Guide 
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Embark on your coding adventure with our beginner-friendly JavaScript
                      course! Learn to bring your web pages to life with dynamic functionality
                      and master essential JavaScript concepts.
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>

                  {/* REACT COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={reactCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-20 w-72">
                      The Native React Course for beginners.
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Begin your React voyage with our immersive course! Dive into the
                      world of building modern, interactive web applications using 
                      React.js.
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>
                  {/* NEXT JS COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={nextCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-8 w-72">
                      Next.JS React Component Beginner's Guide
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Embark on your coding journey with Next.js! Discover the power of 
                      server-side rendering, seamless routing, and effortless deployment. 
                      Elevate your web development skills with Next.js and bring your 
                      projects to life!
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart1}> {start} -></button></a>
                    </div>
                  </div>

                  {/* PHP COURSE */}

                  <div className=" mr-6 ml-6">
                    <Image alt=" " src={phpCover} className="w-72 rounded-[25px]" />
                    <div className=" text-xl text-start text-white pt-12 w-72">
                      The PHP
                    </div>
                    <div className=" text-sm text-start w-72 text-gray-500 pt-2">
                      Unlock the potential of web development with PHP! Dive into server-side 
                      scripting, dynamic content generation, and robust backend solutions. 
                      Harness the versatility of PHP to create dynamic and interactive websites 
                      that leave a lasting impression.
                    </div>
                    <div className=" flex">
                      <a href="http://localhost:3000/courses1/html"><button className=" w-28 h-10 rounded-3xl mt-12 bg-white hover:bg-gray-600 hover:text-white transition ease-in-out duration-300" onClick={ifstart7}> {start7} -></button></a>
                    </div>
                  </div>
                  
                  
                </div>
                </div>
            </TabsContent>

          </Tabs>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
