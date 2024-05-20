"use client";

import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import mainlogo from "/public/mainlogo.png";
import basictheoryCover from "/public/basictheoryCover.png";
import validation from "/public/validation.mp3";
import invalidation from "/public/invalidation.mp3";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { sHtmlBAtom } from "@/lib/atoms";
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
  const [score, setScore] = useAtom(sHtmlBAtom);
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
    if (intr1 === "ok") {
      total = total + 10;
    }
    if (intr2 === "ok") {
      total = total + 10;
    }
    if (intr3 === "br") {
      total = total + 10;
    }
    if (intr4 === "ok") {
      total = total + 10;
    }
    if (intr5 === "ok") {
      total = total + 10;
    }
    if (intr6 === "ok") {
      total = total + 10;
    }
    if (intr7 === "ok") {
      total = total + 10;
    }
    if (intr8 === "ok") {
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
        <audio ref={audioPlayer} controls className="hidden"></audio>
        <div className=" text-white text-6xl text-center font-bold p-10">
          VERIFY YOUR KNOWLEDGE ~ basic
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
                              LearnSpace
                            </div>
                          </div>
                          <div className=" text-white text-6xl mt-32 text-center">
                            Start Quiz -&gt;
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
                            The definition of HTML is:
                          </div>
                          <div className="flex justify-center">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr1(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="ok" id="r1" />
                                <Label htmlFor="r1">
                                  HyperText Markup Language
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="paragraph" id="r2" />
                                <Label htmlFor="r2">
                                  HyperLink Markup Language
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="heading" id="r3" />
                                <Label htmlFor="r3">
                                  Home Tool Markup Language
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
                            Select the correct answer:
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            What's the ending tag?
                          </div>
                          <div className="flex justify-center mt-10">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr2(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="doctype" id="r1" />
                                <Label htmlFor="r1">
                                  &lt;!DOCTYPE html&gt;
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="null" id="r2" />
                                <Label htmlFor="r2">&lt;&gt;</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="ok" id="r3" />
                                <Label htmlFor="r3">&lt;/&gt;</Label>
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
                            Complete the line for inserting a break line:
                            &lt;__&gt;
                          </div>
                          <div className="flex justify-center">
                            <input
                              value={intr3}
                              onChange={(e) => setIntr3(e.target.value)}
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
                            What's the first tag in every HTML document?
                          </div>
                          <div className=" flex justify-center mt-10">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr4(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="3" id="r1" />
                                <Label htmlFor="r1">&lt;div&gt;</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="ok" id="r2" />
                                <Label htmlFor="r2">
                                  &lt;!DOCTYPE html&gt;
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="6" id="r3" />
                                <Label htmlFor="r3">&lt;html&gt;</Label>
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
                            Which is the top part of a web page?
                          </div>
                          <div className=" flex justify-center mt-10">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr5(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="ok" id="r1" />
                                <Label htmlFor="r1">Header</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="source" id="r2" />
                                <Label htmlFor="r2">Footer</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="heading" id="r3" />
                                <Label htmlFor="r3">Icon</Label>
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
                            The meaning of WWW is:
                          </div>
                          <div className="flex justify-center mt-10">
                            <Select onValueChange={(val) => setIntr6(val)}>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select an answer" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="ok">
                                    World Wide Web
                                  </SelectItem>
                                  <SelectItem value="2">
                                    Wide World Window
                                  </SelectItem>
                                  <SelectItem value="3">
                                    Wireless Wide Web
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
                            Select the correct answer:
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            What is HTML?
                          </div>
                          <div className="flex justify-center mt-10">
                            <Select onValueChange={(val) => setIntr7(val)}>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select an answer" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="1">A web site</SelectItem>
                                  <SelectItem value="2">
                                    A PowerPoint presentation
                                  </SelectItem>
                                  <SelectItem value="3">
                                    A Word document
                                  </SelectItem>
                                  <SelectItem value="ok">
                                    A programing language
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
                            Choose the corect answer
                          </div>
                          <div className=" text-4xl text-white text-center mt-10">
                            Using HTML you can create:
                          </div>
                          <div className=" flex justify-center mt-10">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr8(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="image" id="r1" />
                                <Label htmlFor="r1">An Operating System</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="ok" id="r2" />
                                <Label htmlFor="r2">A Web Page</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="photo" id="r3" />
                                <Label htmlFor="r3">A text document</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="null" id="r2" />
                                <Label htmlFor="r2">A Facebook post</Label>
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
                            Can you add media files into a HTML document?
                          </div>
                          <div className="flex justify-center">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr9(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="ok" id="r1" />
                                <Label htmlFor="r1">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="source" id="r3" />
                                <Label htmlFor="r3">No</Label>
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
                            Can you publish a HTML document on the Internet?
                          </div>
                          <div className="flex justify-center">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr10(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="ok" id="r1" />
                                <Label htmlFor="r1">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="source" id="r3" />
                                <Label htmlFor="r3">No</Label>
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
