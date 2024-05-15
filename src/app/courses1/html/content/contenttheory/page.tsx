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

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function Contenttheory() {
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
              CONTENT
            </div>
          </div>
        </div>
        <div className="flex justify-between ml-24 mr-24 ">
          <div>
            <div className=" w-[500px] h-[600px] text-3xl font-bold bg-white text-gray-900 text-center rounded-3xl pt-5">
              How to add text in HTML
              <div className="flex items-center justify-center pt-5 ">
                <div className="w-[480px] h-[515px] font-light text-xl bg-gray-300 text-gray-900 rounded-3xl pt-10">
                  In HTML there are many modes to add text:
                  <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    className="w-full space-y-2"
                  >
                    <div className="">
                      <div className="text-start space-x-4 px-4 pt-10 w-full">
                        <h4 className="text-lg font-semibold  ">Paragraphs</h4>
                        <div className=" text-sm">
                          The paragraph is a simple text box, with a simple
                          format, that are use for adding text for content. The
                          way to declare a paragraph is:
                        </div>
                        <CollapsibleTrigger asChild></CollapsibleTrigger>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="rounded-md border border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                          &lt;p&gt;Lorem ipsum dolor sit amet &lt;/p&gt;
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                  <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    className="w-full space-y-2"
                  >
                    <div className="">
                      <div className="text-start space-x-4 px-4 pt-10 w-full">
                        <h4 className="text-lg font-semibold  ">Headings</h4>
                        <div className=" text-sm">
                          The heading is a text box, with format by default.
                          There are 6 levels of headings with diferent
                          format(font size or weight). The way to declare a
                          heading is:
                        </div>
                        <CollapsibleTrigger asChild></CollapsibleTrigger>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="rounded-md border border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                          &lt;h1&gt;Lorem ipsum dolor sit amet &lt;/h1&gt;
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                </div>
              </div>
            </div>
            <div>
              <div className=" w-[500px] h-[700px] bg-white mt-10 rounded-3xl text-center font-bold text-3xl">
                <div className="pt-5 pb-5">Images</div>
                <div className="flex justify-center">
                  <div className="w-[480px] h-[600px] bg-gray-300 rounded-3xl mt-4">
                    <div className="flex justify-center">
                      <Image src={htmllogo} className="w-64 mt-10" />
                    </div>
                    <div>
                      <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="w-full space-y-2"
                      >
                        <div className="">
                          <div className="text-start space-x-4 px-4 pt-8 w-full">
                            <h4 className="text-lg font-semibold  ">
                              How to add Images in HTML:
                            </h4>
                            <div className=" text-sm"></div>
                            <CollapsibleTrigger asChild></CollapsibleTrigger>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="rounded-md border border-black font-light bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                              &lt;img src"url" alt="alternateText"&gt;
                            </div>
                          </div>
                        </div>
                      </Collapsible>
                      <div className=" font-light text-sm flex mt-5 ml-10 mr-10 ">
                        <div className="font-bold">src</div> - here you need to
                        add the url adress of your image, or the file location,
                        if the photo is local stored
                      </div>
                      <div className=" font-light text-sm flex mt-5 ml-10 mr-10 ">
                        <div className="font-bold">alt</div> - this field is for
                        adding a text, instead of the image, if the image isn't
                        loaded; you can leave the field empty
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-[700px] h-[365px] bg-white rounded-3xl text-center text-3xl font-bold pt-5">
              Text Format
              <div className="flex justify-center ">
                <div className=" w-[680px] h-[287px] bg-gray-300 mt-3 rounded-2xl">
                  <div className="flex justify-between p-6">
                    <div className="">
                      <div>bold</div>
                      <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="w-full space-y-2"
                      >
                        <div className="">
                          <div className="text-start space-x-4 px-4 pt-10 w-full">
                            <CollapsibleTrigger asChild></CollapsibleTrigger>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className=" font-light rounded-md border border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                              &lt;b&gt;Lorem Ipsum &lt;/b&gt;
                            </div>
                          </div>
                        </div>
                      </Collapsible>
                      <div className="font-bold text-2xl mt-10">
                        Lorem Ipsum
                      </div>
                    </div>
                    <div className="w-1 h-64 rounded-lg bg-white"></div>
                    <div>
                      <div>italic</div>
                      <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="w-full space-y-2"
                      >
                        <div className="">
                          <div className="text-start space-x-4 px-4 pt-10 w-full">
                            <CollapsibleTrigger asChild></CollapsibleTrigger>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className=" font-light rounded-md border border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                              &lt;i&gt;Lorem Ipsum &lt;/i&gt;
                            </div>
                          </div>
                        </div>
                      </Collapsible>
                      <div className="italic font-light text-2xl mt-10">
                        Lorem Ipsum
                      </div>
                    </div>
                    <div className="w-1 h-64 rounded-lg bg-white"></div>
                    <div>
                      <div>underline</div>
                      <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="w-full space-y-2"
                      >
                        <div className="">
                          <div className="text-start space-x-4 px-4 pt-10 w-full">
                            <CollapsibleTrigger asChild></CollapsibleTrigger>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="rounded-md border font-light border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                              &lt;u&gt;Lorem Ipsum &lt;/u&gt;
                            </div>
                          </div>
                        </div>
                      </Collapsible>
                      <div className=" font-light underline text-2xl mt-10">
                        Lorem Ipsum
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white mb-10 w-[700px] h-[1050px] rounded-3xl mt-10 text-3xl font-bold text-center pt-6">
              Headings
              <div className="flex justify-center">
                <div className="bg-gray-300 w-[680px] h-[955px] mt-6 rounded-3xl text-start ">
                  <div className=" text-xl ml-5 mt-5">Heading 1</div>
                  <div className=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ml-5 mt-5">
                    Lorem Ipsum
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
                      <div className="flex items-center ml-5">
                        <div className="rounded-md border font-light border-black bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                          &lt;h1&gt;Lorem Ipsum &lt;/h1&gt;
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                  <div className=" text-xl ml-5 mt-5">Heading 2</div>
                  <div className="text-4xl font-extrabold dark:text-white ml-5 mt-5">
                    Lorem Ipsum
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
                      <div className="flex items-center ml-5">
                        <div className=" rounded-sm border border-black font-light bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                          &lt;h2&gt;Lorem Ipsum &lt;/h2&gt;
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                  <div className=" text-xl ml-5 mt-5">Heading 3</div>
                  <div className="text-3xl font-bold dark:text-white ml-5 mt-5">
                    Lorem Ipsum
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
                      <div className="flex items-center ml-5">
                        <div className="rounded-md border border-black font-light bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                          &lt;h3&gt;Lorem Ipsum &lt;/h3&gt;
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                  <div className=" text-xl ml-5 mt-5">Heading 4</div>
                  <div className=" text-2xl font-bold dark:text-white ml-5 mt-5">
                    Lorem Ipsum
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
                      <div className="flex items-center ml-5">
                        <div className="rounded-md border border-black font-light bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                          &lt;h4&gt;Lorem Ipsum &lt;/h4&gt;
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                  <div className=" text-xl ml-5 mt-5">Heading 5</div>
                  <div className=" text-xl font-bold dark:text-white ml-5 mt-5">
                    Lorem Ipsum
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
                      <div className="flex items-center ml-5">
                        <div className="rounded-md border border-black font-light bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                          &lt;h5&gt;Lorem Ipsum &lt;/h5&gt;
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                  <div className=" text-xl ml-5 mt-5">Heading 6</div>
                  <div className=" text-lg font-bold dark:text-white ml-5 mt-5">
                    Lorem Ipsum
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
                      <div className="flex items-center ml-5">
                        <div className="rounded-md border border-black font-light bg-white px-4 py-2 font-mono text-sm shadow-sm ">
                          &lt;h6&gt;Lorem Ipsum &lt;/h6&gt;
                        </div>
                      </div>
                    </div>
                  </Collapsible>
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
