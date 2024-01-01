import { selectCurrentColor } from "../../../providers/features/colorSlice";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/features/themeSlice";
const ContactMe = () => {
  const currentColor = useSelector(selectCurrentColor);
  const checked = useSelector(selectTheme);

  return (
    <div className="my-[25px] py-[25px]">
      <div
        className="text-3xl font-semibold text-center"
        style={{
          color: currentColor,
          transition: "color 2s ease",
        }}
      >
        Contact Me
      </div>
      <div>
        <ul className="flex items-center justify-center mt-5 ">
          <li>
            <a
              href={"https://github.com/truong14712"}
              target={"_blank"}
              className={
                checked
                  ? `p-3 border rounded-[100%] mx-2 grid hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white`
                  : "p-3 border rounded-[100%] mx-2 grid hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white text-white"
              }
              rel="noreferrer"
              aria-label="Link Social"
              style={{
                border: `1px solid ${currentColor}`,
                transition: "border 2s ease",
              }}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="">
            <a
              href={"https://www.linkedin.com/in/mintrudev/"}
              target={"_blank"}
              className={
                checked
                  ? `p-3 border rounded-[100%] mx-2 grid hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white`
                  : "p-3 border rounded-[100%] mx-2 grid hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white text-white"
              }
              rel="noreferrer"
              aria-label="Link Social"
              style={{
                border: `1px solid ${currentColor}`,
                transition: "border 2s ease",
              }}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li className="">
            <a
              href={"https://www.facebook.com/mintru.03"}
              target={"_blank"}
              className={
                checked
                  ? `p-3 border rounded-[100%] mx-2 grid hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white`
                  : "p-3 border rounded-[100%] mx-2 grid hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white text-white"
              }
              rel="noreferrer"
              aria-label="Link Social"
              style={{
                border: `1px solid ${currentColor}`,
                transition: "border 2s ease",
              }}
            >
              <i className="fa-brands fa-facebook-f "></i>
            </a>
          </li>
          <li className="">
            <a
              href={"https://www.instagram.com/mintru_03"}
              target={"_blank"}
              className={
                checked
                  ? `p-3 border rounded-[100%] mx-2 grid hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white`
                  : "p-3 border rounded-[100%] mx-2 grid hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white text-white"
              }
              rel="noreferrer"
              aria-label="Link Social"
              style={{
                border: `1px solid ${currentColor}`,
                transition: "border 2s ease",
              }}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="flex items-center">
            <a
              href={"https://mintrudev-contact.vercel.app/"}
              target={"_blank"}
              className={
                checked
                  ? `p-3 border rounded-[100%] mx-2 grid hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white`
                  : "p-3 border rounded-[100%] mx-2 grid hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white text-white"
              }
              rel="noreferrer"
              aria-label="Link Social"
              style={{
                border: `1px solid ${currentColor}`,
                transition: "border 2s ease",
              }}
            >
              <i className="fa-solid fa-ellipsis "></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
