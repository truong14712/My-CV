import { useState, useEffect, useRef } from "react";
import AboutMe from "../components/AboutMe";
import MyProjects from "../components/MyProjects";
import Skill from "../components/Skill";
import ContactMe from "../components/ContactMe";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentColor } from "../../providers/features/colorSlice";
import { updateColorAsync } from "../../providers/api/colorThunk";
import logo from "../../assets/kisspng-computer-icons-font-letter-t-5ae958426f2ea3.6394530715252419224554.png";
const Home = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ["interest", "enjoy", "excitement", "passion"];
  const [text, setText] = useState(words[0]);
  const dispatch = useDispatch();
  const currentColor = useSelector(selectCurrentColor);

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
  // Tạo một tham chiếu cho component "AboutMe"
  const aboutMeRef = useRef(null);

  // Hàm xử lý sự kiện khi nút được nhấp
  const handleButtonAboutMe = () => {
    // Cuộn đến component "AboutMe"
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={"bg-gray-50"}>
      <div className="container mx-auto 2xl:w-[75%] pt-[8rem] min-h-[100dvh] ">
        <div className="flex items-center justify-between">
          <div className="sm:p-5">
            <h1 className="text-[4rem] font-bold sm:text-[7rem] ">
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
          </div>
          <img
            src={logo}
            alt="mintrudev"
            className="w-[330px] sm:hidden"
            title="mintrudev"
          />
        </div>
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <Skill />
        <MyProjects />
        <ContactMe />
        <div className="my-[3rem] flex items-center justify-center">
          <i
            className="fa-solid fa-t text-[70px]"
            title="mintrudev"
            style={{
              color: currentColor,
              transition: "color 2s ease",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
