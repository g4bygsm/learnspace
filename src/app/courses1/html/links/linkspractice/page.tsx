"use client";

import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import basictheoryCover from "/public/basictheoryCover.png";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { sHtmlLAtom } from "@/lib/atoms";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function Contentpractice() {
  const [showFinalResult, setFinalResults] = useState(false);
  const [score, setScore] = useAtom(sHtmlLAtom);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const optionClicked = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 10);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const [pass, setPass] = useState(true);

  const isPass = () => {
    if (score != 100) {
      setPass(false);
    } else {
      setPass(true);
    }
  };

  useEffect(() => {
    isPass();
  });

  useEffect(() => {
    setScore(0);
  }, []);

  const questions = [
    {
      text: "What's the simple way to declare text in HTML?",
      options: [
        { id: 0, text: "<text>", isCorrect: false },
        { id: 1, text: "<h>", isCorrect: false },
        { id: 2, text: "<p>", isCorrect: true },
        { id: 3, text: "<b>", isCorrect: false },
      ],
    },
    {
      text: "Which is the biggest heading?",
      options: [
        { id: 0, text: "<h1>", isCorrect: true },
        { id: 1, text: "<p>", isCorrect: false },
        { id: 2, text: "<h6>", isCorrect: false },
        { id: 3, text: "<i>", isCorrect: false },
      ],
    },
    {
      text: "How to add images in HTML?",
      options: [
        { id: 0, text: "<Image>", isCorrect: false },
        { id: 1, text: "<img>", isCorrect: true },
        { id: 2, text: "<src>", isCorrect: false },
        { id: 3, text: "<photo>", isCorrect: false },
      ],
    },
    {
      text: "How to make a text bold?",
      options: [
        { id: 0, text: "<bd>text<bd>", isCorrect: false },
        { id: 1, text: "<bold> text", isCorrect: false },
        { id: 2, text: "<b>text</b>", isCorrect: true },
        { id: 3, text: "<i>text</i>", isCorrect: false },
      ],
    },
    {
      text: "What means alt ?",
      options: [
        { id: 0, text: "Alternate text", isCorrect: true },
        { id: 1, text: "Image", isCorrect: false },
        { id: 2, text: "Function", isCorrect: false },
        { id: 3, text: "Source", isCorrect: false },
      ],
    },
    {
      text: "How many headings are?",
      options: [
        { id: 0, text: "2", isCorrect: false },
        { id: 1, text: "3", isCorrect: false },
        { id: 2, text: "5", isCorrect: false },
        { id: 3, text: "6", isCorrect: true },
      ],
    },
    {
      text: "What's the tag for underlined text?",
      options: [
        { id: 0, text: "<underline>", isCorrect: false },
        { id: 1, text: "<u> </u>", isCorrect: true },
        { id: 2, text: "<i> </i>", isCorrect: false },
        { id: 3, text: "<ul> </ul>", isCorrect: false },
      ],
    },
    {
      text: "The tag for italic format is:",
      options: [
        { id: 0, text: "<b> </b>", isCorrect: false },
        { id: 1, text: "<italic>", isCorrect: false },
        { id: 2, text: "<i> </i>", isCorrect: true },
        { id: 3, text: "<il>", isCorrect: false },
      ],
    },
    {
      text: "Can you add media in your HTML?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
  ];

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
        <div className="flex items-center justify-center p-20 ">
          <div className="bg-white w-[1000px] h-[500px] rounded-3xl text-gray-900 text-center font-bold flex items-center justify-center">
            <div className="bg-gray-300 w-[840px] h-[450px] rounded-3xl">
              <div className=" text-xl pb-5 pt-2">
                Question {currentQuestion + 1} out of {questions.length}
              </div>
              <div className=" text-3xl pt-2">
                {questions[currentQuestion].text}
              </div>
              <div className="flex pt-5 justify-center items-center">
                <ul className=" text-xl justify-cente">
                  {questions[currentQuestion].options.map((option) => {
                    return (
                      <li
                        onClick={() => optionClicked(option.isCorrect)}
                        key={option.id}
                        className=" bg-white text-gray-900 font-light rounded-md m-3 w-[500px] h-16 flex items-center justify-start hover:cursor-pointer hover:bg-gray-900 hover:text-white active:h-12 transition ease-in-out duration-100 "
                      >
                        <div className=" flex ml-10 ">
                          <div className="mr-10 border-2 border-white rounded-lg w-8 h-8">
                            {option.id + 1}{" "}
                          </div>
                          <div className=" text-start"> {option.text}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
}
