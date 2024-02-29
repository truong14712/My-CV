import { selectCurrentColor } from "../../../providers/features/colorSlice";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/features/themeSlice";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const currentColor = useSelector(selectCurrentColor);
  const checked = useSelector(selectTheme);
  const { t } = useTranslation("home");

  return (
    <div className="pt-[70px] mt-[10%]">
      <div
        className="text-3xl font-semibold text-center"
        style={{
          color: currentColor,
          transition: "color 2s ease",
        }}
      >
        {t("About me")}
      </div>
      <div
        className={
          checked
            ? "mt-1 text-xl text-center"
            : "mt-1 text-xl text-center text-white"
        }
      >
        {t("if you")}
        <span className="italic font-semibold"> {t("wondering")}</span>{" "}
        <span className="italic font-semibold">{t("who I am...")}</span>
      </div>
      <div className={checked ? "mt-[24px]" : "mt-[24px] text-white"}>
        <div className="text-lg sm:p-2 md:p-5">
          {t("my name")}{" "}
          <span
            className="px-1 italic"
            style={{
              background: currentColor,
              color: "#ffff",
              transition: "background 2s ease",
            }}
          >
            {t("MinhTruong")}
          </span>
          , {t("year old")} {t("FPT Polytechnic")}{" "}
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
        <div className="text-lg sm:p-2 md:p-5">
          {t("lear")}{" "}
          <span>
            <span className="italic underline"> Developer mozilla</span>,{" "}
            <span className="italic underline">You Don&apos;t Know JS</span>
          </span>
          ....
        </div>
        <br />
        <div className="text-lg sm:p-2 md:p-5">{t("frontend")}</div>
      </div>
    </div>
  );
};

export default AboutMe;
