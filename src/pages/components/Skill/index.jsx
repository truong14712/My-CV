import { selectCurrentColor } from "../../../providers/features/colorSlice";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/features/themeSlice";
import { useTranslation } from "react-i18next";
const Skill = () => {
  const currentColor = useSelector(selectCurrentColor);
  const checked = useSelector(selectTheme);
  const { t } = useTranslation("home");

  return (
    <div className="">
      <div
        className={
          checked
            ? "mt-[30px] font-semibold text-3xl text-center mb-2 p-2"
            : "mt-[30px] font-semibold text-3xl text-center text-white mb-2 p-2"
        }
      >
        {t("My current")}{" "}
        <span
          className="px-1 italic"
          style={{
            background: currentColor,
            color: "#ffff",
            transition: "background 2s ease",
          }}
        >
          {t("stack")}
        </span>{" "}
        {t("of")}{" "}
        <span
          className="px-1 italic"
          style={{
            background: currentColor,
            color: "#ffff",
            transition: "background 2s ease",
          }}
        >
          {t("languages/technologies")}{" "}
        </span>
        {t("is")}:
      </div>
      <div className="flex flex-wrap items-center justify-center 2xl:w-[860px] mx-auto py-5 gap-[10px]  sm:p-2 sm:w-[380px] md:w-[720px]">
        <img
          src="https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white"
          alt="html5"
          title="html5"
        />
        <img
          src="https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white"
          alt="css3"
          title="css3"
        />
        <img
          src="https://img.shields.io/badge/Tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white"
          alt="Tailwind"
          title="Tailwind"
        />
        <img
          src="https://img.shields.io/badge/Javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E"
          alt="Javascript"
          title="Javascript"
        />
        <img
          src="https://img.shields.io/badge/Reactjs-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB"
          alt="Reactjs"
          title="Reactjs"
        />
        <img
          src="https://img.shields.io/badge/Nextjs-%2320232a.svg?style=flat-square&logo=next.js&logoColor=white"
          alt="Nextjs"
          title="Nextjs"
        />
        <img
          src="https://img.shields.io/badge/Vitejs-blueviolet?style=flat-square&logo=vite&logoColor=white"
          alt="Vitejs"
          title="Vitejs"
        />
        <img
          src="https://img.shields.io/badge/Nodejs-6DA55F?style=flat-square&logo=node.js&logoColor=white"
          alt="Nodejs"
          title="Nodejs"
        />
        <img
          src="https://img.shields.io/badge/Expressjs-6DA55F?style=flat-square&logo=nestjs&logoColor=white"
          alt="Expressjs"
          title="Expressjs"
        />
        <img
          src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white"
          alt="MongoDB"
          title="MongoDB"
        />
        <img
          src="https://img.shields.io/badge/Git-%23E34F26.svg?style=flat-square&logo=git&logoColor=white"
          alt="Git"
          title="Git"
        />
        <img
          src="https://img.shields.io/badge/redux-blueviolet?style=flat-square&logo=redux&logoColor=white"
          alt="redux"
          title="redux"
        />
        <img
          src="https://img.shields.io/badge/Mysql-blue?style=flat-square&logo=Mysql&logoColor=white"
          alt="Mysql"
          title="Mysql"
        />
        <img
          src="https://img.shields.io/badge/Yarn-blue?style=flat-square&logo=Yarn&logoColor=white"
          alt="Yarn"
          title="Yarn"
        />
        <img
          src="https://img.shields.io/badge/React Router-red?style=flat-square&logo=ReactRouter&logoColor=white"
          alt="ReactRouter"
          title="ReactRouter"
        />
        <img
          src={
            "https://img.shields.io/badge/Npm-%2320232a.svg?style=flat-square&logo=Npm&logoColor=red"
          }
          alt="Npm"
          title="Npm"
        />
        <img
          src="https://img.shields.io/badge/Postman-orange?style=flat-square&logo=Postman&logoColor=white"
          alt="Postman"
          title="Postman"
        />
        <img
          src="https://img.shields.io/badge/Trello-blue?style=flat-square&logo=Trello&logoColor=white"
          alt="Trello"
          title="Trello"
        />
        <img
          src="https://img.shields.io/badge/Nestjs-red?style=flat-square&logo=Nestjs&logoColor=white"
          alt="Nestjs"
          title="Nestjs"
        />
        <img
          src="https://img.shields.io/badge/Eslint-red?style=flat-square&logo=Eslint&logoColor=white"
          alt="Eslint"
          title="Eslint"
        />
        <img
          src="https://img.shields.io/badge/Typescript-blue?style=flat-square&logo=Typescript&logoColor=white"
          alt="Typescript"
          title="Typescript"
        />
      </div>
    </div>
  );
};

export default Skill;
