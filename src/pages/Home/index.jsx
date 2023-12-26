import { useState, useEffect, useRef } from "react";
import AboutMe from "../components/AboutMe";
import MyProjects from "../components/MyProjects";
import Skill from "../components/Skill";
import ContactMe from "../components/ContactMe";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentColor } from "../../providers/features/colorSlice";
import { updateColorAsync } from "../../providers/api/colorThunk";

import Signature from "../components/Signature";
import { selectTheme } from "../../providers/features/themeSlice";
import style from "./home.module.css";
const Home = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ["interest", "enjoy", "excitement", "passion"];
  const [text, setText] = useState(words[0]);
  const dispatch = useDispatch();
  const currentColor = useSelector(selectCurrentColor);
  const checked = useSelector(selectTheme);

  useEffect(() => {
    // Dispatch the initial color update
    dispatch(updateColorAsync());
  }, [dispatch]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const currentIndex = words.indexOf(text);
      const nextIndex = (currentIndex + 1) % words.length;
      setText(words[nextIndex]);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [text, words]);
  useEffect(() => {
    console.log("%cStop!", "color: red; font-size: 50px; font-weight: bold;");
    console.log(
      "%cThis is a browser feature intended for developers.",
      " font-size: 28px;"
    );
    // console.log(
    //   "%cHello everyone! I am a frontend developer from Vietnam.",
    //   "color: blue; font-size: 24px;"
    // );
    // console.log(
    //   "%cMy Github: https://github.com/truong14712",
    //   "color: orange; font-size: 20px;"
    // );
  }, []);
  // Tạo một tham chiếu cho component "AboutMe"
  const aboutMeRef = useRef(null);

  // Hàm xử lý sự kiện khi nút được nhấp
  const handleButtonAboutMe = () => {
    // Cuộn đến component "AboutMe"
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={
        checked
          ? "bg-gray-50 transition-all ease-linear duration-300"
          : "bg-black transition-all ease-linear duration-300"
      }
    >
      <div className="container mx-auto 2xl:w-[75%] pt-[8rem] min-h-[100dvh] ">
        <div className="flex items-center justify-between md:p-5 ">
          <div className="sm:p-5 md:p-5">
            <h1
              className={
                checked
                  ? "text-[4rem] font-bold sm:text-[5rem]"
                  : "text-[4rem] font-bold sm:text-[5rem] text-white"
              }
            >
              Hello <span>👋🏻</span>
              ,
              <br />
              I&apos;m{" "}
              <span
                style={{
                  color: currentColor,
                  transition: "color 2s ease",
                }}
              >
                Minh Truong
              </span>
            </h1>
            <p
              className={
                checked
                  ? "text-[1.3rem] space-x-2 mt-2"
                  : "text-[1.3rem] space-x-2 mt-2 text-white"
              }
            >
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
          </div>
          <i
            className="fa-solid fa-t text-[330px] sm:hidden"
            title="mintrudev"
            style={{
              color: currentColor,
              transition: "color 2s ease",
            }}
          ></i>
        </div>
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <Skill />
        <MyProjects />
        <ContactMe />
        <Signature />
      </div>
    </div>
  );
};

export default Home;
