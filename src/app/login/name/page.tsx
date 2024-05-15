"use client";
import React from "react";
import Image from "next/image";
import mainlogo from "/public/mainlogo.png";
import { useState } from "react";
import { Atom, useAtom } from "jotai";
import { name } from "@/lib/atoms";
import { surname } from "@/lib/atoms";

export default function SetName() {
  const [name1, setName1] = useAtom(name);
  const [tname, setTname] = useState("nu me");
  const [surname1, setSurname1] = useAtom(surname);
  const [tsurname, setTsurname] = useState("nu me");

  const iname = (event) => {
    setTname(event?.target.value || name1);
  };
  const isurname = (event) => {
    setTsurname(event?.target.value || surname1);
  };
  function submit() {
    setName1(tname);
    setSurname1(tsurname);
    window.location.href = "http://localhost:3000";
  }

  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center bg-gray-900">
      <div className="flex items-center justify-center mt-20 mb-1">
        <Image src={mainlogo} className=" w-10 m-2" alt="" />
        <div className=" font-bold text-4xl text-white">LearnSpace</div>
      </div>
      <div className=" mb-36 mt-12 w-[400px] h-96 bg-white rounded-3xl">
        <div className=" flex flex-col justify-center items-center">
          <div className=" text-black text-2xl font-bold mt-5">First Name</div>
          <input
            className="p-2 mt-2 ml-5 rounded-xl border w-80 text-xl"
            onChange={(event) => setTname(event.target.value)}
          />
          <div className=" text-black text-2xl font-bold mt-5">Last Name</div>
          <input
            className="p-2 mt-2 ml-5 rounded-xl w-80 border-2 text-xl"
            onChange={(event) => setTsurname(event.target.value)}
          />
        </div>
        <div className=" flex justify-center items-center m-10 ">
          <button
            onClick={submit}
            className="bg-gray-900 text-white w-64 h-12 text-2xl rounded-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
