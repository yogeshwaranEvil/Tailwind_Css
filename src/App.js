import logo from "./logo.svg";
import video from "./vid1.mp4";
import img from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className=" cursor-default">
      <nav className="grid grid-cols-6 bg-black ">
        <div className="px-[80px] col-span-6 pt-4"></div>
        <div className="col-span-3">
          <img src={img} className=" max-h-10 ml-12"></img>
        </div>
        <div className="col-span-3 justify-end flex gap-3">
          <button className="relative bg-black text-white  hover:text-red-500 border-[1px] hover:border-white border-red-500 pt-1 px-4 pb-1 py-1 hover:cursor-pointer  tracking-wider leading-relaxed ">
            Home
          </button>
          <button className="relative bg-black text-white  hover:text-red-500 border-[1px] hover:border-white border-red-500 pt-1 px-4 pb-1 py-1 hover:cursor-pointer  tracking-wider leading-relaxed ">
            Menu
          </button>
          <button className="relative bg-black text-white  hover:text-red-500 border-[1px] hover:border-white border-red-500 pt-1 px-4 pb-1 py-1  hover:cursor-pointer  tracking-wider leading-relaxed ">
            Shop
          </button>
          <button className="relative bg-black max-w-[200px] text-white  hover:text-red-500 border-[1px] hover:border-white border-red-500 pt-1 px-4 pb-1 py-1 mr-14 hover:cursor-pointer tracking-wider leading-relaxed ">
            <marquee loop="" scrollamount="4">
              This for the shoping which is best
            </marquee>
          </button>
        </div>
      </nav>
      <video
        muted
        autoPlay
        loop
        src={video}
        id="myVideo"
        className=" w-full h-auto absolute"
      />

      <p className=" bg-black min-h-[750px] text-white  mix-blend-darken text-center font-bold text-[325px] relative items-center justify-center">
        crafting
      </p>
    </div>
  );
}

export default App;
