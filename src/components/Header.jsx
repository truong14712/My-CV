import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [currentColor, setCurrentColor] = useState(getRandomColor);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColor(getRandomColor());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div>
      <div className="my-2 ">
        <div>
          <Navbar />
        </div>
        <div className="">
          <h1 className="text-[4rem] font-bold font-serif mt-[3rem]">
            Hello ✌🏼,
            <br />
            I&apos;m <span style={{ color: currentColor }}>Truong</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
