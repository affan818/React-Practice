import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-500"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-5 py-1 rounded-3xl m-1 text-white shadow-xl"
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-5 py-1 rounded-3xl m-1  text-white shadow-xl"
              style={{ backgroundColor: "green" }}
            >
              GREEN
            </button>
            <button
              onClick={() => setColor("skyblue")}
              className="outline-none px-5 py-1 rounded-3xl m-1  text-white shadow-xl"
              style={{ backgroundColor: "skyblue" }}
            >
              SKYBLUE
            </button>
            <button
              onClick={() => setColor("white")}
              className="outline-none px-5 py-1 rounded-3xl m-1  text-black shadow-xl"
              style={{ backgroundColor: "white" }}
            >
              WHITE
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-5 py-1 rounded-3xl m-1  text-white shadow-xl"
              style={{ backgroundColor: "black" }}
            >
              BLACK
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-5 py-1 rounded-3xl m-1 text-white shadow-xl"
              style={{ backgroundColor: "orange" }}
            >
              ORANGE
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-5 py-1 rounded-3xl m-1  text-white shadow-xl"
              style={{ backgroundColor: "pink" }}
            >
              PINK
            </button>
            <button
              onClick={() => setColor("coral")}
              className="outline-none px-5 py-1 rounded-3xl m-1  text-white shadow-xl"
              style={{ backgroundColor: "coral" }}
            >
              CORAL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
