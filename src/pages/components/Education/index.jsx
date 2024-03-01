import { selectCurrentColor } from "../../../providers/features/colorSlice";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/features/themeSlice";
import { useTranslation } from "react-i18next";

const Education = () => {
  const currentColor = useSelector(selectCurrentColor);
  const checked = useSelector(selectTheme);
  const { t } = useTranslation("home");

  return (
    <div className="my-[25px] py-[25px] sm:p-3 md:p-3">
      <div
        className="text-3xl font-semibold text-center"
        style={{
          color: currentColor,
          transition: "color 2s ease",
        }}
      >
        {t("education")}
      </div>
      <div className="flex items-center justify-between sm:flex-col">
        <div
          className="px-1 text-2xl"
          style={{
            transition: "color 2s ease",
            color: currentColor,
          }}
        >
          {t("name education")}
        </div>
        <div
          style={{
            transition: "color 2s ease",
            color: currentColor,
          }}
          className="sm:my-1"
        >
          2021-2023
        </div>
      </div>
      <div
        className={
          checked ? "my-3 text-lg w-[90%]" : "my-3 text-lg w-[90%] text-white"
        }
      >
        {t("because")}
      </div>
      <div
        className={
          checked ? "my-3 text-lg w-[90%]" : "my-3 text-lg w-[90%] text-white"
        }
      >
        {t("introduce education")}
      </div>

      <div
        className={
          checked ? "my-3 text-lg w-[90%]" : "my-3 text-lg w-[90%] text-white"
        }
      >
        {t("result")}{" "}
        <span
          style={{
            background: currentColor,
            transition: "background 2s ease",
            color: "#fff",
          }}
          className="px-1 text-xl font-medium"
        >
          ReactJS and NodeJS
        </span>
        , {t("project")}
      </div>
      <div
        className={
          checked ? "my-3 text-lg w-[90%]" : "my-3 text-lg w-[90%] text-white"
        }
      >
        {t("graduation")}
      </div>
    </div>
  );
};

export default Education;
