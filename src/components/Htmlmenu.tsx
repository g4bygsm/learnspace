export function Htmlmenu() {
  return (
    <div className=" flex">
      <div className="w-[15%] h-full bg-white fixed items-center  mt-24 ">
        <a href="http://localhost:3000/courses1/html/#basic">
          <h2 className="text-white border-t-2 ml-2 p-2 border-gray-400 hover:cursor-pointer hover:underline">
            <i class="bi bi-app"></i>
            <b>Basics</b>
          </h2>
        </a>
        <a href="http://localhost:3000/courses1/html/#headings">
          <h2 className="text-white border-t-2 ml-2 p-2 border-gray-200 hover:cursor-pointer hover:underline">
            &gt; <b>Headings</b>
          </h2>
        </a>
        <a href="http://localhost:3000/courses1/#jsdiv">
          <h2 className="text-white border-t-2 ml-2 p-2 border-gray-200 hover:cursor-pointer hover:underline">
            &gt; <b>Paraghrap</b>
          </h2>
        </a>
        <a>
          <h2 className="text-white border-t-2 ml-2 p-2 border-gray-200 hover:cursor-pointer hover:underline">
            &gt; <b>Links</b>
          </h2>
        </a>
        <a>
          <h2 className="text-white border-t-2 border-b-2 ml-2 p-2 border-gray-200 hover:cursor-pointer hover:underline">
            &gt; <b>Images</b>
          </h2>
        </a>
      </div>
    </div>
  );
}
