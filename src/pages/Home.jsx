import { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Skill from "./components/Skill";
import ContactMe from "./components/ContactMe";
import Navigation from "../layouts/components/Navigation";

const Home = () => {
  const [currentColor, setCurrentColor] = useState(getRandomColor);
  const words = ["interest", "enjoy", "excitement", "passion"];
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColor(getRandomColor());
    }, 3000);

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const currentIndex = words.indexOf(text);
      const nextIndex = (currentIndex + 1) % words.length;
      setText(words[nextIndex]);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [text, words]);
  return (
    <div className="container mx-auto 2xl:w-5/6 pt-[8rem] ">
      <h1 className="text-[4rem] font-bold font-serif ">
        Hello ✌🏼,
        <br />
        I&apos;m{" "}
        <span
          style={{
            color: currentColor,
            transition: "color 2s ease",
          }}
        >
          Truong
        </span>
      </h1>
      <p className="text-[1.3rem] space-x-2 mt-2">
        A <span className="italic font-bold ">{text}</span> Front-end developer
      </p>
      <button
        title="About me"
        style={{
          background: currentColor,
          transition: "color 2s ease",
          color: "#ffff",
        }}
        className="p-2 mt-[3rem] px-4 rounded-[24px] shadow-lg mb-[6rem]"
      >
        About me
      </button>
      <Navigation />

      <AboutMe />
      <Skill />
      <MyProjects />
      <ContactMe />
    </div>
  );
};

export default Home;
