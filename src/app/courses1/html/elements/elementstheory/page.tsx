"use client";

import { Secondmenu } from "@/components/Secondmenu";
import Image from "next/image";
import basictheoryCover from "/public/basictheoryCover.png";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import htmllogo from "/public/htmllogo.svg";
import { Htmlmenu } from "@/components/Htmlmenu";
import { Mirror } from "@/components/Mirror";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Input from "postcss/lib/input";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });
const code2 = `<body>
  <form>
    <label>Username</label><br>
    <input type="text"><br>
    <label>Password</label><br>
    <input type="password"><br>
</body>`;
const code3 = `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`;

export default function Basictheory() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`${poppins.className} MAIN`}>
      <Header></Header>
      <Chatbotbtn></Chatbotbtn>
      <div className="bg-gray-900">
        <div className="flex justify-center items-center">
          <div className=" p-10">
            <Image
              alt=""
              src={basictheoryCover}
              className="w-[1200px] mt-24 rounded-[100px]"
            />
            <div className=" font-bold text-7xl text-white text-center p-10">
              ELEMENTS
            </div>
          </div>
        </div>
        <div className="flex justify-between ml-24 mr-24 ">
          <div>
            <div className=" w-[700px] h-[1000px] text-3xl font-bold bg-white text-gray-900 text-center rounded-3xl pt-5">
              Inputs and Labels
              <div className="flex items-center justify-center pt-5 ">
                <div className="w-[680px] h-[915px] font-light text-lg bg-gray-300 text-gray-900 rounded-3xl pt-5 pl-5 pr-5">
                  <div className=" font-bold text-2xl">Declaration</div>
                  <div className=" flex justify-center items-center">
                    <div className="w-96 h-48 text-sm text-start font-bold">
                      <Mirror initialCode={code2} height="150px"></Mirror>
                    </div>
                  </div>
                  <div className=" flex flex-col justify-center items-center text-start">
                    <label>Username</label>
                    <input type="text"></input>
                    <label>Password</label>
                    <input type="password"></input>
                  </div>
                  <div className=" font-light flex mt-10">
                    <div className="font-bold">form</div>- is a container for
                    different types of input elements
                  </div>
                  <div className=" font-light flex mt-2">
                    <div className="font-bold">label</div>- is a text associated
                    with inputs
                  </div>
                  <div className=" font-light flex mt-2">
                    <div className="font-bold">input</div>- an element that
                    allows a user to enter data into a form
                  </div>
                  <div className=" font-bold text-2xl mt-10">
                    All types of inputs:
                  </div>
                  <div className="flex">
                    <div className=" flex flex-col justify-center text-[13px]">
                      <div className="flex">
                        <input type="button"></input> - button
                      </div>
                      <div className="flex">
                        <input type="checkbox"></input> - checkbox
                      </div>
                      <div className="flex">
                        <input type="color" defaultValue="#E1FF00"></input> -
                        color
                      </div>
                      <div className="flex">
                        <input type="date"></input> - date
                      </div>
                      <div className="flex">
                        <input type="datetime-local"></input> - datetime-local
                      </div>
                      <div className="flex">
                        <input
                          type="email"
                          defaultValue="user@example.com"
                        ></input>{" "}
                        - email
                      </div>
                      <div className="flex">
                        <input type="file"></input> - file
                      </div>
                      <div className="flex">
                        <input type="hidden"></input> - hidden
                      </div>
                      <div className="flex">
                        <input type="image"></input> - image
                      </div>
                      <div className="flex">
                        <input type="month"></input> - month
                      </div>
                      <div className="flex">
                        <input type="number" defaultValue={123}></input> -
                        number
                      </div>
                    </div>
                    <div className=" flex flex-col justify-center text-[13px]">
                      <div className="flex">
                        <input type="password" defaultValue="abcdef"></input> -
                        password
                      </div>
                      <div className="flex">
                        <input type="radio"></input> - radio
                      </div>
                      <div className="flex">
                        <input type="range"></input> - range
                      </div>
                      <div className="flex">
                        <input type="reset"></input> - reset
                      </div>
                      <div className="flex">
                        <input type="search" defaultValue="search..."></input> -
                        search
                      </div>
                      <div className="flex">
                        <input type="submit"></input> - submit
                      </div>
                      <div className="flex">
                        <input type="tel" defaultValue="+40712345678"></input> -
                        tel
                      </div>
                      <div className="flex">
                        <input type="text" defaultValue="Hello World!"></input>{" "}
                        - text
                      </div>
                      <div className="flex">
                        <input type="time"></input> - time
                      </div>
                      <div className="flex">
                        <input type="url" defaultValue="www.google.com"></input>{" "}
                        - url
                      </div>
                      <div className="flex">
                        <input type="week"></input> - week
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" w-[700px] h-[250px] bg-white mt-10 mb-10 rounded-3xl text-center font-bold text-3xl">
                <div className="pt-5 pb-5">Span</div>
                <div className="flex justify-center">
                  <div className="w-[680px] h-[150px] bg-gray-300 rounded-3xl mt-4">
                    <div className=" text-base font-light flex justify-center mt-7 m-3">
                      <div className="font-bold">&lt;span&gt;</div> - is an
                      inline container used to mark up a part of a text, or a
                      part of a document.
                    </div>
                    <Collapsible
                      open={isOpen}
                      onOpenChange={setIsOpen}
                      className="w-full space-y-2"
                    >
                      <div className="">
                        <div className="text-start space-x-4 px-4 pt-2 w-full">
                          <CollapsibleTrigger asChild></CollapsibleTrigger>
                        </div>
                        <div className="flex items-center justify-center ml-5">
                          <div className="rounded-md border font-light  border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                            &lt;p&gt;The pen is&lt;span
                            style="color:blue"&gt;blue&lt;/span&gt;&lt;/p&gt;
                          </div>
                        </div>
                      </div>
                    </Collapsible>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-[500px] h-[365px] bg-white rounded-3xl text-center text-3xl font-bold pt-5">
              Buttons
              <div className="flex justify-center ">
                <div className=" pt-5 w-[480px] h-[287px] font-light bg-gray-300 text-lg mt-3 rounded-2xl">
                  <div className=" font-bold text-2xl">Declaration</div> of
                  buttons
                  <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    className="w-full space-y-2"
                  >
                    <div className="">
                      <div className="text-start space-x-4 px-4 pt-2 w-full">
                        <CollapsibleTrigger asChild></CollapsibleTrigger>
                      </div>
                      <div className="flex items-center justify-center ml-5">
                        <div className="rounded-md border font-light  border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                          &lt;button&gt; Submit &lt;/button&gt;
                        </div>
                      </div>
                      <button className=" border-black border m-2">
                        Submit
                      </button>
                    </div>
                  </Collapsible>
                  <div className=" text-start font-bold ml-10">
                    Types of Buttons
                  </div>
                  <div className=" text-start ml-5">• submit</div>
                  <div className=" text-start ml-5">• reset</div>
                  <div className=" text-start ml-5">• button</div>
                </div>
              </div>
            </div>
            <div className="bg-white mb-10 w-[500px] h-[345px] rounded-3xl mt-10 text-3xl font-bold text-center pt-6">
              Hyperlinks
              <div className="flex justify-center items-center">
                <div className="bg-gray-300 w-[480px] h-[250px] mt-6 rounded-3xl text-start ">
                  <div className=" flex justify-center mt-10">
                    <div className="w-96 h-86 text-sm">
                      {/* CONTENT */}
                      <div className=" text-base font-light flex">
                        <div className="font-bold">Hyperlink </div> - also known
                        as link or web link, it contains an adress and acts as a
                        reference to data.
                      </div>
                      <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="w-full space-y-2"
                      >
                        <div className="">
                          <div className="text-start space-x-4 px-4 pt-2 w-full">
                            <CollapsibleTrigger asChild></CollapsibleTrigger>
                          </div>
                          <div className="flex items-center justify-center ml-5">
                            <div className="rounded-md border font-light  border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                              &lt;a href="url"&gt;Text&lt;/a&gt;
                            </div>
                          </div>
                          <div className=" flex justify-center m-6">
                            <a
                              href="http://localhost:3000"
                              className="text-blue-800 underline"
                            >
                              Hyperlink
                            </a>
                          </div>
                        </div>
                      </Collapsible>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white mb-10 w-[500px] h-[495px] rounded-3xl mt-10 text-3xl font-bold text-center pt-6">
              Lists
              <div className="flex justify-center items-center">
                <div className="bg-gray-300 w-[480px] h-[400px] mt-6 rounded-3xl text-start ">
                  <div className=" flex justify-center mt-10">
                    <div className="w-96 h-86 text-sm">
                      <Mirror initialCode={code3} height="110px"></Mirror>
                      <div className="flex flex-col font-light items-center mt-3">
                        <div className="flex">
                          <div className="font-bold">&lt;ul&gt;</div> - defines
                          an unordered list
                        </div>
                        <div className="flex text-center">
                          You need to use the &lt;ul&gt; tag togheter with the
                          &lt;li&gt; tag
                        </div>
                        <div className="flex">
                          <div className="font-bold">&lt;li&gt;</div> - defines
                          an item from the list
                        </div>
                        <div className="flex">
                          <div className="font-bold">&lt;ol&gt;</div> - defines
                          an ordered list(numbered)
                        </div>
                        <div className="flex text-lg m-2">
                          <div className="font-bold">List Styles</div>
                        </div>
                        <div className="flex flex-col">
                          <div className="font-light">type="none"</div>
                          <div className="font-light">type="circle"</div>
                          <div className="font-light">type="disc"</div>
                          <div className="font-light">type="square"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}
