"use client";
import Image from "next/image";
import mainlogo from "/public/mainlogo.png";
import { Chatbotbtn } from "@/components/Chatbotbtn";
import { Header } from "@/components/Header";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import csslogo from "/public/csslogo.png";
import htmllogo from "/public/htmllogo.svg";
import jslogo from "/public/jslogo.png";
import reactlogo from "/public/reactlogo.png";
import tailwindlogo from "/public/tailwindlogo.png";
import nextjslogo from "/public/nextjslogo.png";
import phplogo from "/public/phplogo.png";
import avatar1 from "/public/avatar1.png";
import avatar2 from "/public/avatar2.png";
import avatar3 from "/public/avatar3.png";
import avatar4 from "/public/avatar4.png";
import avatar5 from "/public/avatar5.png";
import avatar6 from "/public/avatar6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAtom } from "jotai";
import { cssP, username } from "@/lib/atoms";
import { name } from "@/lib/atoms";
import { surname } from "@/lib/atoms";
import { Progress } from "@/components/ui/progress";
import { htmlP } from "@/lib/atoms";
import { useSession } from "next-auth/react";
import { auth } from "../firebase";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function Profile() {
  const authInfo = useSession();
  const [edit, setEdit] = useState(false);
  const [name1, setName] = useAtom(name);
  const [tname, setTname] = useState("");
  const [surname1, setSurname] = useAtom(surname);
  const [tsurname, setTsurname] = useState("");
  const [html, setHtmlP] = useAtom(htmlP);
  const [css, setCssP] = useAtom(cssP);

  const iname = (event) => {
    setTname(event?.target.value || name1);
  };
  const isurname = (event) => {
    setTsurname(event?.target.value || surname1);
  };

  function submit() {
    setName(tname);
    setSurname(tsurname);
  }

  return (
    <div>
      <Chatbotbtn />
      <Header />
      <div>
        <div className="bg-gray-900 w-full h-[400px] rounded-b-[300px] "></div>
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-[360px] h-[360px] bg-white rounded-full translate-y-[-200px] border-2 border-white">
            <div className="w-[350px] h-[350px] bg-gray-400 rounded-full flex justify-center items-center">
              <img
                alt=" "
                src={authInfo.data?.user?.image}
                className=" w-full rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl mt-[-190px]">
            @{authInfo.data?.user?.name}
          </div>
          <div className=" text-4xl font-bold mt-5">
            {surname1} {name1}
          </div>
          <div className="flex justify-center items-center mt-5">
            <Image src={htmllogo} alt="" className="ml-5 w-8 h-8" />
            <Image src={csslogo} alt="" className="ml-5 w-8 h-8" />
            <Image src={jslogo} alt="" className="ml-5 w-8 h-8" />
            <Image src={reactlogo} alt="" className="ml-5 w-8 h-7" />
          </div>
          <div className="flex">
            <button
              className="flex justify-center items-center bg-none border-[2px] w-52 h-12 rounded-full text-2xl font-bold m-10"
              onClick={() => setEdit(!edit)}
            >
              Edit Profile
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-7 ml-3"
              >
                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {edit && (
        <div
          className={`flex justify-center transition-opacity  duration-300 ${
            edit ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-gray-900 m-10 rounded-md w-[900px] h-[600px]">
            <div className=" h-[100px] font-bold text-4xl text-white text-center pt-10">
              Edit Your Profile
            </div>
            <div className=" flex">
              <div className=" w-2/3 h-[400px] rounded-l-md pl-20 pt-10">
                <div className=" text-white text-3xl mt-5">First Name</div>
                <input
                  className="p-2 mt-2 ml-5 rounded-xl border w-64 bg-gray-900 text-white text-xl"
                  name="password"
                  defaultValue={tname || name1}
                  placeholder="Name"
                  onChange={(event) => setTname(event.target.value)}
                />
                <div className=" text-white text-3xl mt-5">Last Name</div>
                <input
                  className="p-2 mt-2 ml-5 rounded-xl border w-64 bg-gray-900 text-white text-xl"
                  name="password"
                  defaultValue={tsurname || surname1}
                  placeholder="Surname"
                  onChange={(event) => setTsurname(event.target.value)}
                />
              </div>
              <div className=" w-1/3 h-[400px] rounded-r-md">
                <div className="flex justify-center items-center">
                  <div className=" mt-10 bg-gray-800 rounded-md">
                    <div className=" text-center text-white text-xl font-light mb-10 pt-10">
                      Choose your avatar
                    </div>
                    <div className="flex">
                      <button>
                        <Image alt=" " src={avatar1} className=" p-2 w-20" />
                      </button>
                      <button>
                        <Image alt=" " src={avatar2} className=" p-2 w-20" />
                      </button>
                      <button>
                        <Image alt=" " src={avatar3} className=" p-2 w-20" />
                      </button>
                    </div>
                    <div className="flex mb-10">
                      <button>
                        <Image alt=" " src={avatar4} className=" p-2 w-20" />
                      </button>
                      <button>
                        <Image alt=" " src={avatar5} className=" p-2 w-20" />
                      </button>
                      <button>
                        <Image alt=" " src={avatar6} className=" p-2 w-20" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[100px] flex justify-center">
              <button
                onClick={submit}
                className=" bg-white rounded-sm active:w-24 active:h-10 active:text-md transition-height duration-300 ease-out w-28 h-12 font-bold text-xl flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className=" w-5 mr-2"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                SAVE
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-900 w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold text-6xl text-white mt-10"> Courses</div>
          <div className="w-96 h-1 bg-white mt-5"></div>
        </div>
        <div className="flex flex-col items-center justify-center p-10">
          <div className="bg-white w-[600px] h-24 mt-10 rounded-2xl flex">
            <div className=" flex justify-center items-center w-24">
              <Image alt="" src={htmllogo} className=" w-16" />
            </div>
            <div className="flex justify-center items-center text-center w-full">
              <div className="flex flex-col justify-center items-center">
                <div className=" font-bold text-lg">
                  The HTML Basic Guide for Beginners
                </div>
                <Progress value={html} />
                <div> {html}% completed</div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[600px] h-24 mt-10 rounded-2xl flex">
            <div className=" flex justify-center items-center w-24">
              <Image alt="" src={csslogo} className=" w-16" />
            </div>
            <div className="flex justify-center items-center text-center w-full">
              <div className="flex flex-col justify-center items-center">
                <div className=" font-bold text-lg">
                  The CSS-Cascading Style Sheets for beginners
                </div>
                <Progress value={css} />
                <div> {css}% completed</div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[600px] h-24 mt-10 rounded-2xl flex">
            <div className=" flex justify-center items-center w-24">
              <Image alt="" src={jslogo} className=" w-16" />
            </div>
            <div className="flex justify-center items-center text-center w-full">
              <div className="flex flex-col justify-center items-center">
                <div className=" font-bold text-lg">
                  JavaScript Beginner's Guide
                </div>
                <Progress value={0} />
                <div> {0}% completed</div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[600px] h-24 mt-10 rounded-2xl flex">
            <div className=" flex justify-center items-center w-24">
              <Image alt="" src={reactlogo} className=" w-16" />
            </div>
            <div className="flex justify-center items-center text-center w-full">
              <div className="flex flex-col justify-center items-center">
                <div className=" font-bold text-lg">
                  The Native React Course for beginners
                </div>
                <Progress value={0} />
                <div> {0}% completed</div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[600px] h-24 mt-10 rounded-2xl flex">
            <div className=" flex justify-center items-center w-24">
              <Image alt="" src={tailwindlogo} className=" w-16" />
            </div>
            <div className="flex justify-center items-center text-center w-full">
              <div className="flex flex-col justify-center items-center">
                <div className=" font-bold text-lg">
                  The Tailwind Styling Course for beginners
                </div>
                <Progress value={0} />
                <div> {0}% completed</div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[600px] h-24 mt-10 rounded-2xl flex">
            <div className=" flex justify-center items-center w-24">
              <Image alt="" src={nextjslogo} className=" w-16" />
            </div>
            <div className="flex justify-center items-center text-center w-full">
              <div className="flex flex-col justify-center items-center">
                <div className=" font-bold text-lg">
                  Next.JS React Component Beginner's Guide
                </div>
                <Progress value={0} />
                <div> {0}% completed</div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[600px] h-24 mt-10 rounded-2xl flex">
            <div className=" flex justify-center items-center w-24">
              <Image alt="" src={phplogo} className=" w-16" />
            </div>
            <div className="flex justify-center items-center text-center w-full">
              <div className="flex flex-col justify-center items-center">
                <div className=" font-bold text-lg">The PHP</div>
                <Progress value={0} />
                <div> {0}% completed</div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[600px] h-24 mt-10 rounded-2xl flex">
            <div className=" flex justify-center items-center w-24">
              <Image alt="" src={mainlogo} className=" w-10" />
            </div>
            <div className="flex justify-center items-center text-center w-full">
              <div className="flex flex-col justify-center items-center">
                <div className=" font-bold text-lg">Design Tips</div>
                <Progress value={0} />
                <div> {0}% completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
