"use client";

// IMPORTS
import { Hero } from "@/components/Hero";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { ReactTyped, Typed } from "react-typed";
import { Header } from "@/components/Header";
import logosweb from "../../public/logosweb.png";
import htmllogo from "../../public/htmllogo.svg";
import csslogo from "../../public/csslogo.png";
import jslogo from "../../public/jslogo.png";
import reactlogo from "../../public/reactlogo.png";
import tailwindlogo from "../../public/tailwindlogo.png";
import nextjslogo from "../../public/nextjslogo.png";
import phplogo from "../../public/phplogo.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Mirror } from "@/components/Mirror";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import { Card, CardContent } from "@/components/ui/card";
import { TypeWriter } from "@/components/TypeWriter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useAtom } from "jotai";
import { logedIn } from "@/lib/atoms";
import { signOut, useSession } from "next-auth/react";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

//  CARD CONTENT ( ARRAY )

const date = [
  {
    titlu: "HTML COURSES",
    continut:
      "In this course, you have the posibility to learn more about the basics about HTML.",
    src: htmllogo,
    link: "http://localhost:3000/courses1/html/",
  },
  {
    titlu: "CSS COURSES",
    continut:
      "In this course, you'll delve into the fundamentals of CSS, exploring how to style and design web pages effectively.",
    src: csslogo,
    link: "http://localhost:3000/courses1/css/",
  },
  {
    titlu: "JavaScript COURSES",
    continut:
      "In this course, you'll dive into JavaScript basics, learning how to add interactivity and functionality to your web projects.",
    src: jslogo,
    link: "http://localhost:3000/courses1/html/",
  },
  {
    titlu: "REACT COURSES",
    continut:
      "In this course, you'll explore React fundamentals, discovering how to build dynamic and interactive user interfaces for web applications.",
    src: reactlogo,
    link: "http://localhost:3000/courses1/html/",
  },
  {
    titlu: "TAILWIND COURSES",
    continut:
      "In this course, you'll uncover the essentials of Tailwind CSS, mastering a utility-first approach to quickly and efficiently style your web projects.",
    src: tailwindlogo,
    link: "http://localhost:3000/courses1/html/",
  },
  {
    titlu: "NEXT JS COURSES",
    continut:
      "In this course, you'll explore Next.js fundamentals, unlocking the power of server-side rendering and effortless React development for building modern web applications.",
    src: nextjslogo,
    link: "http://localhost:3000/courses1/html/",
  },
  {
    titlu: "PHP DATABASE COURSES",
    continut:
      "In this course, you'll delve into PHP basics, discovering how to create dynamic and interactive web pages, handle form submissions, and interact with databases to build robust web applications.",
    src: phplogo,
    link: "http://localhost:3000/courses1/html/",
  },
];

// MAIN

export default function Home() {
  const [started, setStarted] = useState("http://localhost:3000/login/");
  const [loged, setLoged] = useAtom(logedIn);
  const session = useSession();
  function getStarted() {
    if (loged) {
      setStarted("http://localhost:3000/courses1");
    } else {
      setStarted("http://localhost:3000/login/");
    }
  }

  return (
    <div className="homepage">
      <Chatbotbtn></Chatbotbtn>
      <Header className="z-0"></Header>
      <div className="mt-24 h-[600px] w-full bg-gray-900 flex items-center justify-center  ">
        <div className=" items-center justify-center ">
          <h1 className=" text-orange-200 font-bold text-center mb-12 text-xl">
            CODE. LEARN. THRIVE.
          </h1>
          <h1
            className={` font-extrabold text-center text-white text-8xl mb-5  ${poppins.className}`}
          >
            LearnSpace
          </h1>
          <h1 className="text-center text-white font-mono text-xl">
            Where code transform into knowledge!
          </h1>

          <div className=" items-center justify-center flex">
            <TypeWriter className=" text-center "></TypeWriter>
          </div>

          <div className="flex justify-center">
            <a href={started}>
              <button
                onClick={getStarted}
                className="bg-orange-200 items-center flex justify-center w-[150px] h-12 rounded-xl font-semibold text-lg hover:bg-white text-black hover:h-16 hover:w-48 transition-fade duration-300 ease-out"
              >
                Get Started
              </button>
            </a>
          </div>
          <div className="flex justify-center items-center"></div>
        </div>
      </div>
      <div className=" w-full h-[500px] bg-gray-800 items-center flex justify-center">
        <Image
          src={logosweb}
          className=" w-[400px] transition-height duration-300 ease-out hover:w-[450px]"
          alt={""}
        />
        <h1 className="font-mono text-2xl p-10 w-[700px] text-white">
          <b className=" pl-16">LearnSpace: </b>Your Gateway to Web Development
          Mastery. Dive into our curated collection of cutting-edge courses
          designed to propel your skills in HTML, CSS, JavaScript, React.js, and
          more. Join our vibrant community of learners today and unlock the
          potential of web development with LearnSpace!
        </h1>
      </div>

      <div className="w-full h-[600px] bg-gray-900 p-16">
        <Carousel className="h-full flex relative items-center justify-center border-none">
          <CarouselContent className="  h-[400px] w-[1400px] p-0">
            {date.map((el, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center h-[390px] justify-center flex-row p-12 bg-gray-800 rounded-md">
                      <div className="text">
                        <h1 className="text-white font-bold text-8xl">
                          {el.titlu}
                        </h1>
                        <h4 className="text-white font-light text-sm mt-10">
                          {el.continut}
                        </h4>
                      </div>
                      <a href={el.link}>
                        <Image
                          className=" cursor-pointer transition-height duration-300 ease-out hover:w-64  w-72"
                          src={el.src}
                          alt={""}
                        />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="bg-gray-900 pb-12">
        <h1 className="text-[100px] font-extrabold text-white text-center">
          FAQ
        </h1>
        <div className="flex justify-center">
          <div className=" w-[450px] h-1 bg-white flex justify-center"></div>
        </div>
        <h5 className="text-center  text-white text-[30px] pb-28 mt-2">
          <b>F</b>requently <b>A</b>sked <b>Q</b>uestions
        </h5>
        <Accordion type="single" collapsible className="w-full text-white">
          <AccordionItem value="item-1" className=" ml-64 mr-64">
            <AccordionTrigger>
              What programming languages or technologies are covered in your web
              development courses?
            </AccordionTrigger>
            <AccordionContent>
              Our web development courses cover a wide range of programming
              languages and technologies including HTML, CSS, JavaScript,
              React.js, and Tailwind CSS. Whether you're a beginner or looking
              to advance your skills, we have courses tailored to suit your
              needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className=" ml-64 mr-64">
            <AccordionTrigger>
              Are the courses suitable for beginners with no prior coding
              experience?
            </AccordionTrigger>
            <AccordionContent>
              Yes, absolutely! Our courses are designed to cater to learners of
              all levels, including beginners with no prior coding experience.
              We provide comprehensive beginner-friendly tutorials and resources
              to help you grasp the fundamentals and progress at your own pace.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className=" ml-64 mr-64 mb-24">
            <AccordionTrigger>
              Do you offer specialized courses focusing on specific technologies
              like React.js or Tailwind CSS?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer specialized courses dedicated to specific
              technologies such as React.js and Tailwind CSS. These courses
              delve deeper into the intricacies of each technology, providing
              hands-on projects and practical exercises to reinforce your
              learning.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer></Footer>
    </div>
  );
}
