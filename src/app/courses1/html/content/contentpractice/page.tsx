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
import { sHtmlCAtom } from "@/lib/atoms";
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
  const [score, setScore] = useAtom(sHtmlCAtom);
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
    if (intr1 === "paragraph") {
      total = total + 10;
    }
    if (intr2 === "bold") {
      total = total + 10;
    }
    if (intr3 === "img") {
      total = total + 10;
    }
    if (intr4 === "6") {
      total = total + 10;
    }
    if (intr5 === "alternate") {
      total = total + 10;
    }
    if (intr6 === "italic") {
      total = total + 10;
    }
    if (intr7 === "1") {
      total = total + 10;
    }
    if (intr8 === "img") {
      total = total + 10;
    }
    if (intr9 === "source") {
      total = total + 10;
    }
    if (intr10 === "u") {
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
          VERIFY YOUR KNOWLEDGE ~ content
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
                            What's the easiest way to add text in HTML?
                          </div>
                          <div className="flex justify-center">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr1(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="text" id="r1" />
                                <Label htmlFor="r1">Text</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="paragraph" id="r2" />
                                <Label htmlFor="r2">Paragraphs</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="heading" id="r3" />
                                <Label htmlFor="r3">Headings</Label>
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
                            What is the format for this declaration:
                            &lt;b&gt;text&lt;/b&gt;
                          </div>
                          <div className="flex justify-center mt-10">
                            <Select onValueChange={(val) => setIntr2(val)}>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select an answer" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="underline">
                                    underlined
                                  </SelectItem>
                                  <SelectItem value="bold">bold</SelectItem>
                                  <SelectItem value="italic">italic</SelectItem>
                                  <SelectItem value="light">light</SelectItem>
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
                            &lt;___ src="..." alt="..."&gt;
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
                            How many headings there are?
                          </div>
                          <div className=" flex justify-center mt-10">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr4(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="3" id="r1" />
                                <Label htmlFor="r1">3</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="4" id="r2" />
                                <Label htmlFor="r2">4</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="6" id="r3" />
                                <Label htmlFor="r3">6</Label>
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
                            What alt means?
                          </div>
                          <div className=" flex justify-center mt-10">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr5(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="alternate" id="r1" />
                                <Label htmlFor="r1">Alternate Text</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="source" id="r2" />
                                <Label htmlFor="r2">Photo Source</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="heading" id="r3" />
                                <Label htmlFor="r3">A heading</Label>
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
                            What is format for this text?
                            &lt;i&gt;text&lt;/i&gt;
                          </div>
                          <div className="flex justify-center">
                            <input
                              value={intr6}
                              onChange={(e) => setIntr6(e.target.value)}
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
                            What's the largest heading?
                          </div>
                          <div className="flex justify-center mt-10">
                            <Select onValueChange={(val) => setIntr7(val)}>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select an answer" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="1">Heading 1</SelectItem>
                                  <SelectItem value="2">Heading 2</SelectItem>
                                  <SelectItem value="3">Heading 3</SelectItem>
                                  <SelectItem value="4">Heading 4</SelectItem>
                                  <SelectItem value="5">Heading 5</SelectItem>
                                  <SelectItem value="6">Heading 6</SelectItem>
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
                            How can you add images in HTML?
                          </div>
                          <div className=" flex justify-center mt-10">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr8(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="image" id="r1" />
                                <Label htmlFor="r1">&lt;image&gt;</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="img" id="r2" />
                                <Label htmlFor="r2">&lt;img&gt;</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="photo" id="r3" />
                                <Label htmlFor="r3">&lt;photo&gt;</Label>
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
                            When you declare an image, you need to add:
                          </div>
                          <div className="flex justify-center">
                            <RadioGroup
                              defaultValue="comfortable"
                              className=" flex flex-col justify-center mt-10 scale-150"
                              onValueChange={(val) => setIntr9(val)}
                            >
                              <div className="flex items-center space-x-2 text-white">
                                <RadioGroupItem value="heading" id="r1" />
                                <Label htmlFor="r1">heading</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-5xl">
                                <RadioGroupItem value="format" id="r2" />
                                <Label htmlFor="r2">format</Label>
                              </div>
                              <div className="flex items-center space-x-2 text-white text-[50px]">
                                <RadioGroupItem value="source" id="r3" />
                                <Label htmlFor="r3">source</Label>
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
                            How to make a text underlined?
                          </div>
                          <div className="flex justify-center mt-10">
                            <Select onValueChange={(val) => setIntr10(val)}>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select an answer" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="u">
                                    &lt;u&gt;text&lt;/u&gt;
                                  </SelectItem>
                                  <SelectItem value="i">
                                    &lt;i&gt;text&lt;/i&gt;
                                  </SelectItem>
                                  <SelectItem value="b">
                                    &lt;b&gt;text&lt;/b&gt;
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
