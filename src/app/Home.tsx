import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Typed } from "react-typed";
import { Header } from "@/components/Header";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import { Card, CardContent } from "@/components/ui/card";
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
import { poppins, date } from "./page";

// MAIN

export default function Home() {
  return (
    <div className="homepage">
      <Chatbotbtn></Chatbotbtn>
      <Header className="z-0"></Header>
      <div className="mt-24 h-[500px] w-full bg-gray-900 flex items-center justify-center ">
        <div className=" items-center justify-center ">
          <h1
            className={` items-center font-extrabold text-center text-white text-8xl mb-5  ${poppins.className}`}
          >
            LearnSpace
          </h1>
          <h4
            className={`text-2xl font-semibold text-white text-center text-7x1  ${poppins.className}`}
          >
            Embark on your coding journey:
          </h4>
          <p
            className={`text-center text-white font-light ${poppins.className} `}
          >
            Where code transforms into knowledge!
          </p>
          <Typed
            strings={["HTML", "CSS", "JS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        {/* <Image
              src={logosweb}
              className=" w-[400px] transition-height duration-300 ease-out hover:w-[450px]"
              alt={""}
            /> */}
      </div>
      <div className="w-full h-[600px]  p-16">
        <Carousel className="h-full flex relative items-center justify-center">
          <CarouselContent className="  h-[400px] w-[1400px] p-0">
            {date.map((el, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center h-[390px] justify-center justify-between flex flex-row p-12 bg-slate-600 rounded-md">
                      <div className="text">
                        <h1 className="text-white font-bold text-8xl">
                          {el.titlu}
                        </h1>
                        <h4 className="text-white text-sm font-light text-4xl">
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
      <div>
        <h1 className="text-[100px] font-extrabold text-center">FAQ</h1>
        <div className="flex justify-center">
          <div className=" w-[450px] h-1 bg-black flex justify-center"></div>
        </div>
        <h5 className="text-center text-[30px] mb-28 mt-2">
          <b>F</b>requently <b>A</b>sked <b>Q</b>uestions
        </h5>
        <Accordion type="single" collapsible className="w-full">
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
