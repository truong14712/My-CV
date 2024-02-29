import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HOME_EN from "./en/home.json";
import HOME_VI from "./vi/home.json";

const resources = {
  en: {
    home: HOME_EN,
  },
  vi: {
    home: HOME_VI,
  },
};
const defaultNS = "home";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    ns: ["home"],
    defaultNS,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
