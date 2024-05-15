export function Secondmenu() {
  return (
    <div className=" w-[15%] h-full bg-gray-950 fixed items-center border-r-4 mt-24 border-gray-300 ">
      <a href="http://localhost:3000/courses1/html/">
        <h2 className="text-white border-t-2 ml-2 p-4 border-gray-300 hover:cursor-pointer hover:underline">
          HTML Course
        </h2>
      </a>
      <a>
        <h2 className="text-white border-t-2 ml-2 p-4 border-gray-300 hover:cursor-pointer hover:underline">
          CSS Course
        </h2>
      </a>
      <a href="http://localhost:3000/courses1/#jsdiv">
        <h2 className="text-white border-t-2 ml-2 p-4 border-gray-300 hover:cursor-pointer hover:underline">
          JavaScript Course
        </h2>
      </a>
      <a>
        <h2 className="text-white border-t-2 ml-2 p-4 border-gray-300 hover:cursor-pointer hover:underline">
          React Course
        </h2>
      </a>
      <a>
        <h2 className="text-white border-t-2 border-b-2 ml-2  p-4 border-gray-300 hover:cursor-pointer hover:underline">
          Tailwind Course
        </h2>
      </a>
    </div>
  );
}
