"use client";

import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import mainlogo from "/public/mainlogo.png";
import basictheoryCover from "/public/basictheoryCover.png";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { sHtmlEAtom } from "@/lib/atoms";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function Contentpractice() {
  const [showFinalResult, setFinalResults] = useState(false);
  const audioPlayer = useRef<HTMLAudioElement>();
  const [score, setScore] = useAtom(sHtmlEAtom);
  const [pass, setPass] = useState(false);
  const [intr1, setIntr1] = useState("");
  const [intr2, setIntr2] = useState("");
  const [intr3, setIntr3] = useState("");
  const [intr4, setIntr4] = useState("");
  const [intr5, setIntr5] = useState("");
  const [intr6, setIntr6] = useState("");
  const [intr7, setIntr7] = useState("");
  const [intr8, setIntr8] = useState("");
  const [intr9, setIntr9] = useState("");
  const [intr10, setIntr10] = useState("");

  function submit() {
    let total = 0;
    if (intr1 === "a") {
      total = total + 10;
    }
    if (intr2 === "type") {
      total = total + 10;
    }
    if (intr3 === "href") {
      total = total + 10;
    }
    if (intr4 === "asociated") {
      total = total + 10;
    }
    if (intr5 === "<li>") {
      total = total + 10;
    }
    if (intr6 === "ok") {
      total = total + 10;
    }
    if (intr7 === "ok") {
      total = total + 10;
    }
    if (intr8 === "circle") {
      total = total + 10;
    }
    if (intr9 === "ok") {
      total = total + 10;
    }
    if (intr10 === "ok") {
      total = total + 10;
    }
    if (total === 100) {
      setPass(true);
      if (audioPlayer.current) {
        audioPlayer.current.src = "/validation.mp3";
      }
    } else {
      if (audioPlayer.current) {
        audioPlayer.current.src = "/invalidation.mp3";
      }
    }

    if (audioPlayer.current) {
      audioPlayer.current.play();
    }

    setScore(total);
    setFinalResults(true);
  }

  useEffect(() => {
    setScore(0);
  }, []);

  return (
    <div className=" bg-gray-900">
      <Header></Header>
      <Chatbotbtn></Chatbotbtn>
      <div className="justify-center flex items-center">
        <Image
          alt=""
          src={basictheoryCover}
          className="w-[1200px] mt-24 p-10 rounded-[100px] "
        />
      </div>
      <div>
        <div className=" text-white text-6xl text-center font-bold p-10">
          <audio ref={audioPlayer} controls className="hidden"></audio>
          VERIFY YOUR KNOWLEDGE ~ elements
        </div>
        <div className=" text-white text-md text-center">
          There are 10 questions, and every question has 10 points. <br></br>For
          finishing this part of course, you have to reach 100 points.
        </div>
      </div>
      {showFinalResult ? (
        <div className="flex justify-center items-center p-10">
          <div className="w-[800px] h-[500px] flex-col items-center justify-center bg-white rounded-3xl font-bold text-gray-900 text-center">
            <div className=" text-2xl p-4">FINAL RESULTS:</div>
            <div className="flex items-center justify-center">
              <div className=" text-5xl p-2 w-[700px] h-24  text-gray-900 rounded-3xl text-center">
                {score} POINTS ({score}%)
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className=" w-[770px] h-[330px] bg-gray-300 rounded-3xl">
                <div className=" text-2xl p-10">STATUS</div>
                <div
                  className={cn(
                    "text-5xl",
                    pass ? "text-green-700 " : "text-red-700  "
                  )}
                >
                  {pass ? "PASS" : "FAILED"}
                </div>
                <div className="flex items-center justify-center pt-7">
                  <a href="http://localhost:3000/courses1/html">
                    <button className="bg-white text-gray-900 w-64 h-12 p-2 rounded-3xl hover:bg-gray-900 hover:text-white  transition ease-in-out duration-100">
                      &lt;- GO BACK TO MENU
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-20 ">
          <div className="bg-gray-300 w-[1100px] h-[650px] rounded-3xl">
            <Carousel className="h-full flex relative items-center justify-center border-none">
              <CarouselContent className="  h-[600px] w-[1000px] p-0">
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center h-[590px] justify-center flex-row p-12 bg-gray-800 rounded-md">
                        <div>
                          <div className="flex justify-center items-center mt-[-100px]">
                            <Image alt="" src={mainlogo} className=" w-16" />
                            <div className=" text-white text-4xl ml-4">
                              {" "}
                              LearnSpace
                            </div>
                          </div>
                          <div className=" text-white text-6xl mt-32 text-center">
                            Start Quiz -&gt;{" "}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center h-[590px] justify-center p-12 bg-gray-800 rounded-md">
                        <div>
                          <div className=" text-2x1 text-white text-center">
                            Choose the corect answer
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            How do you declare an hyperlink?
                          </div>
                          <div className="flex justify-center">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr1(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="hyperlink" id="r1" />
                                <Label htmlFor="r1">
                                  &lt;hyperlink href="..."&gt;
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="href" id="r2" />
                                <Label htmlFor="r2">href</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="a" id="r3" />
                                <Label htmlFor="r3">&lt;a href="..."&gt;</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center h-[590px] justify-center flex-row p-12 bg-gray-800 rounded-md">
                        <div>
                          <div className=" text-2x1 text-white text-center">
                            Write the correct answer
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            &lt;input ____="password"&gt;
                          </div>
                          <div className="flex justify-center">
                            <input
                              value={intr2}
                              onChange={(e) => setIntr2(e.target.value)}
                              className="p-2 rounded-xl border text-center mt-16 w-[800px] bg-transparent text-white"
                              name="password"
                              placeholder="Add your answer"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center h-[590px] justify-center flex-row p-12 bg-gray-800 rounded-md">
                        <div>
                          <div className=" text-2x1 text-white text-center">
                            Select the correct answer:
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            &lt;a ____="www.google.com"&gt;Google&lt;a&gt;
                          </div>
                          <div className="flex justify-center mt-10">
                            <Select onValueChange={(val) => setIntr3(val)}>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select an answer" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="placeholder">
                                    placeholder
                                  </SelectItem>
                                  <SelectItem value="class">class</SelectItem>
                                  <SelectItem value="href">href</SelectItem>
                                  <SelectItem value="value">value</SelectItem>
                                  <SelectItem value="type">type</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center h-[590px] justify-center flex-row p-12 bg-gray-800 rounded-md">
                        <div>
                          <div className=" text-2x1 text-white text-center">
                            Choose the corect answer
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            What is a label?
                          </div>
                          <div className=" flex justify-center mt-10">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr4(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="asociated" id="r1" />
                                <Label htmlFor="r1">
                                  Asociated text with inputs
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="placeholder" id="r2" />
                                <Label htmlFor="r2">A placeholder</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="form" id="r3" />
                                <Label htmlFor="r3">
                                  A container for types of inputs
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center h-[590px] justify-center flex-row p-12 bg-gray-800 rounded-md">
                        <div>
                          <div className=" text-2x1 text-white text-center">
                            Write the correct answer
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            What's the tag for an item in a list?
                          </div>
                          <div className="flex justify-center">
                            <input
                              value={intr5}
                              onChange={(e) => setIntr5(e.target.value)}
                              className="p-2 rounded-xl border text-center mt-16 w-[800px] bg-transparent text-white"
                              name="password"
                              placeholder="Add your answer"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center h-[590px] justify-center flex-row p-12 bg-gray-800 rounded-md">
                        <div>
                          <div className=" text-2x1 text-white text-center">
                            Choose the corect answer
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            How to declare a span?
                          </div>
                          <div className=" flex justify-center mt-10">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr6(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="ok" id="r1" />
                                <Label htmlFor="r1">&lt;span&gt;</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="placeholder" id="r2" />
                                <Label htmlFor="r2">span="..."</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="form" id="r3" />
                                <Label htmlFor="r3">type="span"</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center h-[590px] justify-center flex-row p-12 bg-gray-800 rounded-md">
                        <div>
                          <div className=" text-2x1 text-white text-center">
                            Select the correct answer:
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            What's the tag for ordered list?
                          </div>
                          <div className="flex justify-center mt-10">
                            <Select onValueChange={(val) => setIntr7(val)}>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select an answer" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="class">
                                    &lt;ul&gt;
                                  </SelectItem>
                                  <SelectItem value="ok">&lt;ol&gt;</SelectItem>
                                  <SelectItem value="type">
                                    &lt;li&gt;
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center h-[590px] justify-center flex-row p-12 bg-gray-800 rounded-md">
                        <div>
                          <div className=" text-2x1 text-white text-center">
                            Write the correct answer
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            Complete for making a circled list &lt;ul
                            type="__"&gt;
                          </div>
                          <div className="flex justify-center">
                            <input
                              value={intr8}
                              onChange={(e) => setIntr8(e.target.value)}
                              className="p-2 rounded-xl border text-center mt-16 w-[800px] bg-transparent text-white"
                              name="password"
                              placeholder="Add your answer"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center h-[590px] justify-center flex-row p-12 bg-gray-800 rounded-md">
                        <div>
                          <div className=" text-2x1 text-white text-center">
                            Choose the corect answer
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            How do you make an input for phone numbers?
                          </div>
                          <div className="flex justify-center">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr9(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="hyperlink" id="r1" />
                                <Label htmlFor="r1">number</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="ok" id="r2" />
                                <Label htmlFor="r2">tel</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="a" id="r3" />
                                <Label htmlFor="r3">range</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center h-[590px] justify-center flex-row p-12 bg-gray-800 rounded-md">
                        <div>
                          <div className=" text-2x1 text-white text-center">
                            Choose the corect answer
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            What's a span?
                          </div>
                          <div className="flex justify-center">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr10(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="hyperlink" id="r1" />
                                <Label htmlFor="r1">
                                  A text associated with inputs
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="href" id="r2" />
                                <Label htmlFor="r2">Alternate text</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="ok" id="r3" />
                                <Label htmlFor="r3">An inline container</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className=" flex justify-center m-10 text-3xl">
            <button
              onClick={submit}
              className="w-48 h-20 bg-gray-900 border-2 border-white rounded-3xl text-white"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
}
