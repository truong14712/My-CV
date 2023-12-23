import { useState, useEffect, useRef } from "react";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Skill from "./components/Skill";
import ContactMe from "./components/ContactMe";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const [currentColor, setCurrentColor] = useState(getRandomColor);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ["interest", "enjoy", "excitement", "passion"];
  const [text, setText] = useState(words[0]);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
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
  // Tạo một tham chiếu cho component "AboutMe"
  const aboutMeRef = useRef(null);

  // Hàm xử lý sự kiện khi nút được nhấp
  const handleButtonAboutMe = () => {
    // Cuộn đến component "AboutMe"
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto 2xl:w-4/6 pt-[8rem] min-h-[100dvh]">
        <h1 className="text-[4rem] font-bold">
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
          A <span className="italic font-bold ">{text}</span> Front-end
          developer
        </p>
        <button
          title="About me"
          style={{
            background: currentColor,
            transition: "background 2s ease",
            color: "#ffff",
          }}
          className="p-2 mt-[3rem] px-4 rounded-[24px] shadow-lg mb-[6rem]"
          onClick={handleButtonAboutMe}
        >
          About me
        </button>
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <Skill />
        <MyProjects />
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
