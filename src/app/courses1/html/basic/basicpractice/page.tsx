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
import { sHtmlBAtom } from "@/lib/atoms";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function Basicpractice() {
  const [showFinalResult, setFinalResults] = useState(false);
  const [score, setScore] = useAtom(sHtmlBAtom);
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
      text: "The definition of HTML is: ",
      options: [
        { id: 0, text: "HyperText Markup Language", isCorrect: true },
        { id: 1, text: "HyperLink Markup Language", isCorrect: false },
        { id: 2, text: "World Wide Web", isCorrect: false },
        { id: 3, text: "Home Tool Markup Language", isCorrect: false },
      ],
    },
    {
      text: "Which tag is the ending tag?",
      options: [
        { id: 0, text: "<>", isCorrect: false },
        { id: 1, text: "<!DOCTYPE html>", isCorrect: false },
        { id: 2, text: "</div>", isCorrect: true },
        { id: 3, text: "<end>", isCorrect: false },
      ],
    },
    {
      text: "Which tag is the first tag in every HTML document?",
      options: [
        { id: 0, text: "<div>", isCorrect: false },
        { id: 1, text: "<!DOCTYPE html>", isCorrect: true },
        { id: 2, text: "<head>", isCorrect: false },
        { id: 3, text: "<h1>", isCorrect: false },
      ],
    },
    {
      text: "The top part of a web page is:",
      options: [
        { id: 0, text: "Header", isCorrect: true },
        { id: 1, text: "Link", isCorrect: false },
        { id: 2, text: "Icon", isCorrect: false },
        { id: 3, text: "Footer", isCorrect: false },
      ],
    },
    {
      text: "What is the meaning of www?",
      options: [
        { id: 0, text: "Internet", isCorrect: false },
        { id: 1, text: "Firefox", isCorrect: false },
        { id: 2, text: "World Wide Web", isCorrect: true },
        { id: 3, text: "Mozilla", isCorrect: false },
      ],
    },
    {
      text: "How do you insert a line break?",
      options: [
        { id: 0, text: "<lb>", isCorrect: false },
        { id: 1, text: "<endline>", isCorrect: false },
        { id: 2, text: "<break>", isCorrect: false },
        { id: 3, text: "<br>", isCorrect: true },
      ],
    },
    {
      text: "What is HTML?",
      options: [
        { id: 0, text: "A programing language", isCorrect: true },
        { id: 1, text: "A website", isCorrect: false },
        { id: 2, text: "The Internet", isCorrect: false },
        { id: 3, text: "A letter", isCorrect: false },
      ],
    },
    {
      text: "Using HTML you can create:",
      options: [
        { id: 0, text: "A Word Document", isCorrect: false },
        { id: 1, text: "A Web Page", isCorrect: true },
        { id: 2, text: "An Operating System", isCorrect: false },
        { id: 3, text: "A PowerPoint Presentation", isCorrect: false },
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
      text: "Can you publish your HTML document on the Internet?",
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
