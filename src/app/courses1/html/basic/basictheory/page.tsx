"use client";

import Image from "next/image";
import basictheoryCover from "/public/basictheoryCover.png";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import title from "/public/titleC.png";

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
const code1 = `
<!DOCTYPE html>
  <html>
    <head>  
      <title>LearnSpace</title>
    </head>
    <body>
      <h1>Title</h1>
      <p>Lorem Ipsum</p>
    </body>
  </html>
`;

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
              BASIC
            </div>
          </div>
        </div>
        <div className="flex justify-between ml-24 mr-24 ">
          <div>
            <div className=" w-[500px] h-[300px] text-3xl font-bold bg-white text-gray-900 text-center rounded-3xl pt-5">
              What means www?
              <div className="flex items-center justify-center pt-5 ">
                <div className="w-[480px] h-[215px] font-light text-lg bg-gray-300 text-gray-900 rounded-3xl pt-5 pl-5 pr-5">
                  <div className=" font-bold text-2xl">WWW</div> is defined as
                  World Wide Web
                  <div className=" text-base mt-5 ">
                    This refers to all the public websites or pages that users
                    can access on their local computers and other devices
                    through the internet.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" w-[500px] h-[550px] bg-white mt-10 rounded-3xl text-center font-bold text-3xl">
                <div className="pt-5 pb-5">Tags</div>
                <div className="flex justify-center">
                  <div className="w-[480px] h-[450px] bg-gray-300 rounded-3xl mt-4">
                    <div className=" flex items-center justify-center text-center">
                      <div className=" text-9xl ">
                        {" "}
                        &lt;&gt;{" "}
                        <div className=" text-4xl font-light mt-5">
                          {" "}
                          OPENING TAG
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 flex items-center justify-center text-center">
                      <div className=" text-9xl ">
                        {" "}
                        &lt;/&gt;{" "}
                        <div className=" text-4xl font-light mt-5">
                          {" "}
                          CLOSING TAG
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-[500px] h-[550px] bg-white mt-10 mb-10 rounded-3xl text-center font-bold text-3xl">
                <div className="pt-5 pb-5">What means div?</div>
                <div className="flex justify-center">
                  <div className="w-[480px] h-[450px] bg-gray-300 rounded-3xl mt-4">
                    <div className=" font-light text-base ml-5 mr-5 mt-5 flex text-start ">
                      <div className=" font-bold"> DIV </div> - means a section
                      from a web page, that allows you to add more proprieties
                      for styling or layout.
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
                        <div className=" mt-4 text-center mb-5">EXAMPLE</div>
                        <div className="flex items-center justify-center ml-5 ">
                          <div className="rounded-md border font-light  border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                            &lt; div&gt; section &lt;/div&gt;
                          </div>
                        </div>
                        <div className=" text-base mt-2"></div>
                      </div>
                    </Collapsible>
                    <div className=" flex text-base ml-5 mr-5 font-light text-start mt-10">
                      <div className=" font-bold"> Break </div> - is the element
                      that produces a line break in text. It is usefull where
                      the division of lines is significant.
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
                        <div className=" mt-4 text-center mb-5">EXAMPLE</div>
                        <div className="flex items-center justify-center ml-5 ">
                          <div className="rounded-md border font-light  border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                            &lt;br&gt;
                          </div>
                        </div>
                        <div className=" text-base mt-2"></div>
                      </div>
                    </Collapsible>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[500px] h-[350px] bg-white mt-10 mb-10 rounded-3xl text-center font-bold text-3xl">
              <div className="pt-5 pb-5">IDs & Classes</div>
              <div className="flex justify-center">
                <div className="w-[480px] h-[250px] bg-gray-300 rounded-3xl mt-4">
                  <div className=" text-lg font-light">
                    In HTML, you can add on every element IDs or classes.
                  </div>
                  <div className=" font-light text-base flex m-2">
                    <div className="font-bold">ID</div> = indentifier - it must
                    be unique in the whole document and it's used for
                    identifying element in the linked scripts or styles;
                  </div>
                  <div className=" font-light text-base flex m-2">
                    <div className="font-bold">CLASS</div>- is a reference which
                    you can use to multiply elements in the linked scripts or
                    styles;
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-[700px] h-[365px] bg-white rounded-3xl text-center text-3xl font-bold pt-5">
              What is HTML?
              <div className="flex justify-center ">
                <div className=" pt-5 w-[680px] h-[287px] font-light bg-gray-300 text-lg mt-3 rounded-2xl">
                  <div className=" font-bold text-2xl">HTML</div> is defined as
                  HyperText Markup Language
                  <div className=" text-base mt-5 font-light">
                    This is a programing language, that we use for web pages,
                    apps or another programs, and it's made for fronted.
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
                      <div className="flex items-center justify-center ml-5 mt-6">
                        <div className="rounded-md border font-light  border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                          &lt; !DOCTYPE html&gt;
                        </div>
                      </div>
                      <div className=" text-base mt-2">
                        This is the first tag in every HTML file.
                      </div>
                    </div>
                  </Collapsible>
                </div>
              </div>
            </div>
            <div className="bg-white mb-10 w-[700px] h-[1070px] rounded-3xl mt-10 text-3xl font-bold text-center pt-6">
              HTML Structure
              <div className="flex justify-center items-center">
                <div className="bg-gray-300 w-[680px] h-[975px] mt-6 rounded-3xl text-start ">
                  <div className=" flex justify-center mt-10">
                    <div className="w-96 h-86 text-sm">
                      <Mirror initialCode={code1}></Mirror>
                      <div className="font-bold text-center mt-5 text-xl">
                        Explication
                      </div>

                      {/* CONTENT */}

                      <div>
                        <div className=" mt-5">
                          &lt;!DOCTYPE html&gt; - is the tag that is in every
                          html document and represents the type of document
                        </div>
                        <div className=" mt-5">
                          &lt;html&gt; - is the opening tag for the HTML
                          document and it includes the content of the document
                        </div>
                        <div className=" mt-5">
                          &lt;head&gt; - the header of the document (the top
                          part)
                        </div>
                        <div className=" mt-5">
                          &lt;body&gt; - is the "body" of the document and it
                          includes most of the content
                        </div>
                        <div className=" text-2xl mt-10">Title</div>
                        <Collapsible
                          open={isOpen}
                          onOpenChange={setIsOpen}
                          className="w-full space-y-2"
                        >
                          <div className="">
                            <div className="text-start space-x-4 px-4 pt-2 w-full">
                              <CollapsibleTrigger asChild></CollapsibleTrigger>
                            </div>
                            <div className="flex items-center justify-center ml-5 mt-6">
                              <div className="rounded-md border font-light  border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                                &lt;title&gt;LearnSpace&lt;/title&gt;
                              </div>
                            </div>
                            <div className=" text-base mt-2">
                              This is how you can change the title of a web
                              page.
                            </div>
                          </div>
                        </Collapsible>
                        <Image alt="" src={title} className="m-10" />
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
