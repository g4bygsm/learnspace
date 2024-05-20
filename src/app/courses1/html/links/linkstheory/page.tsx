"use client";

import { Secondmenu } from "@/components/Secondmenu";
import Image from "next/image";
import basictheoryCover from "/public/basictheoryCover.png";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import mainlogo from "/public/mainlogo.png";
import { Htmlmenu } from "@/components/Htmlmenu";
import { Mirror } from "@/components/Mirror";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });
const code1 = `<!DOCTYPE html>
  <html lang="en">
  <html>
    <head>  
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale="1.0">
      <title>Document</title>
    </head>
    <body>
    </body>
  </html>`;

console.log(code1);

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
              LINKS/TAGS
            </div>
          </div>
        </div>
        <div className="flex justify-between ml-24 mr-24 ">
          <div>
            <div className=" w-[700px] h-[700px] text-3xl font-bold bg-white text-gray-900 text-center rounded-3xl pt-5">
              Example
              <div className="flex items-center justify-center pt-5 ">
                <div className="w-[680px] h-[615px] font-light text-lg bg-gray-300 text-gray-900 rounded-3xl pt-5 pl-5 pr-5">
                  <div className=" font-bold text-sm text-start">
                    <Mirror initialCode={code1} height="250px"></Mirror>
                  </div>
                  <div className=" flex flex-col items-center mt-10 text-sm">
                    <div className=" ">
                      <div className="font-bold">&lt;!DOCTYPE html&gt;</div>
                      is an instruction about the version of HTML
                    </div>
                    <div className="mt-2 ">
                      <div className="font-bold">&lt;html lang="en"&gt;</div>
                      specifies the language of the element's content
                    </div>
                    <div className=" mt-2 ">
                      <div className="font-bold">
                        &lt;meta charset="UTF-8"&gt;
                      </div>
                      tells the browser to use the utf-8 character encoding
                    </div>
                    <div className="mt-2 ">
                      <div className="font-bold">
                        &lt;meta http-equiv="X-UA-Compatible"
                        content="IE=edge"&gt;
                      </div>
                      ensures that IE uses the latest available rendering engine
                      to render a web page
                    </div>
                    <div className=" mt-2">
                      <div className="font-bold">
                        &lt;meta name="viewport" content="width=device-width,
                        initial-scale="1.0"&gt;
                      </div>
                      sets the initial zoom level when the page is first loaded
                      by the browser
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-[500px] h-[335px] bg-white rounded-3xl text-center text-3xl font-bold pt-5">
              How to add an icon
              <div className="flex justify-center ">
                <div className="flex flex-col items-center pt-5 w-[480px] h-[257px] font-light bg-gray-300 text-lg mt-3 rounded-2xl">
                  <Image src={mainlogo} alt="" className=" w-20" />
                  <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    className="w-full space-y-2"
                  >
                    <div className="">
                      <div className="text-start space-x-4 px-4 pt-2 w-full">
                        <CollapsibleTrigger asChild></CollapsibleTrigger>
                      </div>
                      <div className="flex items-center justify-center ml-5 ">
                        <div className="rounded-md border font-light  border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                          &lt;link rel="icon" href="url"
                          type="image/x-icon"/&gt;
                        </div>
                      </div>
                      <div className=" text-base mt-2 flex justify-center">
                        Replace
                        <div className=" font-bold mr-1 ml-1"> url </div> with
                        file location of your icon.
                      </div>
                    </div>
                  </Collapsible>
                </div>
              </div>
            </div>
            <div className="bg-white mb-10 w-[500px] h-[325px] rounded-3xl mt-10 text-3xl font-bold text-center pt-6">
              How to link script & style
              <div className="flex justify-center items-center">
                <div className="bg-gray-300 w-[480px] h-[230px] mt-6 rounded-3xl text-start ">
                  <div className=" flex justify-center mt-2">
                    <div className="w-96 h-86 text-sm">
                      <div className=" text-center text-2xl">
                        {" "}
                        Script - JavaScript
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
                          <div className="flex items-center justify-center ml-5 ">
                            <div className="rounded-md border font-light  border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                              &lt;script src="url.js"&gt;&lt;/script&gt;
                            </div>
                          </div>
                        </div>
                      </Collapsible>
                      <div className=" text-center text-2xl"> Style - CSS</div>
                      <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="w-full space-y-2"
                      >
                        <div className="">
                          <div className="text-start space-x-4 px-4 pt-2 w-full">
                            <CollapsibleTrigger asChild></CollapsibleTrigger>
                          </div>
                          <div className="flex items-center justify-center ml-5 ">
                            <div className="rounded-md border font-light  border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                              &lt;link rel="stylesheet" href="url.css"&gt;
                            </div>
                          </div>
                        </div>
                      </Collapsible>
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
