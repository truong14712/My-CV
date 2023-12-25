import { selectCurrentColor } from "../../../providers/features/colorSlice";
import { useSelector } from "react-redux";

const AboutMe = () => {
  const currentColor = useSelector(selectCurrentColor);

  return (
    <div className="pt-[70px] mt-[10%]">
      <div
        className="text-2xl font-semibold text-center"
        style={{
          color: currentColor,
          transition: "color 2s ease",
        }}
      >
        About me
      </div>
      <div className="mt-1 text-xl text-center">
        if you&apos;re <span className="italic font-semibold">wondering</span>{" "}
        who <span className="italic font-semibold">I am...</span>
      </div>
      <div className="mt-[24px] ">
        <div className="text-lg sm:p-2">
          Hi, my name is{" "}
          <span
            className="px-2 italic"
            style={{
              background: currentColor,
              color: "#ffff",
              transition: "background 2s ease",
            }}
          >
            Truong
          </span>
          , i&apos;m 21 years old. I got a college degree at FPT Polytechnic
          College in Hanoi (2021-2023). Besides, i am really passionate about{" "}
          <span
            className="px-2 italic"
            style={{
              background: currentColor,
              color: "#ffff",
              transition: "background 2s ease",
            }}
          >
            Javascript
          </span>{" "}
          and{" "}
          <span
            className="px-2 italic"
            style={{
              background: currentColor,
              color: "#ffff",
              transition: "background 2s ease",
            }}
          >
            Web Development.
          </span>
        </div>
        <br />
        <div className="text-lg sm:p-2">
          I started learning web programming in 2021. Before that, I had a
          background in C / C ++ programming so getting access to javascript is
          not difficult. I have been in love with javascript since I did not
          know it, I like it. I searched many different sources to learn about
          this language for example:{" "}
          <span>
            <span className="italic underline"> Developer mozilla</span>,{" "}
            <span className="italic underline">You Don&apos;t Know JS</span>
          </span>
          ....
        </div>
        <br />
        <div className="text-lg sm:p-2">
          I want to be a good person in the field that I have chosen so I tried
          a lot, worked hard.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
