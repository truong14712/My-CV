import projects from "../../../db/projects";
import { Link } from "react-router-dom";
import { selectCurrentColor } from "../../../providers/features/colorSlice";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/features/themeSlice";

const MyProjects = () => {
  const currentColor = useSelector(selectCurrentColor);
  const checked = useSelector(selectTheme);

  return (
    <div className="my-[25px] py-[25px] sm:p-3 md:p-3">
      <div
        className="text-3xl font-semibold text-center mb-[40px]"
        style={{
          color: currentColor,
          transition: "color 2s ease",
        }}
      >
        My Projects
      </div>
      <div className="grid grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2 sm:gap-5">
        {projects.map((project) => {
          return (
            <>
              <div
                className={
                  checked
                    ? "bg-white border rounded-lg transform-gpu hover:-translate-y-2 transition-transform duration-300"
                    : "bg-black border rounded-lg text-white transform-gpu hover:-translate-y-2 transition-transform duration-300"
                }
                key={project?.id}
              >
                <img
                  src={`${project.img}`}
                  alt={project.title}
                  className="h-[200px] bg-cover w-full mb-1 rounded-t-lg "
                />
                <div className="p-4 text-center">
                  <div className="text-lg mb-[30px]">
                    <span
                      className="p-1 italic font-bold"
                      style={{
                        background: currentColor,
                        transition: "background 2s ease",
                        color: "#ffff",
                      }}
                    >
                      {" "}
                      {project.title}
                    </span>
                  </div>
                  <div
                    className={checked ? "mb-[20px]" : "mb-[20px] text-white"}
                  >
                    {project.description}
                  </div>
                  <div
                    className={
                      checked
                        ? "mb-[26px] font-bold text-[14px] text-[#0f0e17]"
                        : "mb-[26px] font-bold text-[14px]  text-white"
                    }
                  >
                    {project.technology}
                  </div>
                  <div className="flex items-center justify-center mb-1">
                    <Link to={project.url} className="flex items-center">
                      <button className="border px-5 py-[2px] rounded-2xl  shadow hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white">
                        <i className="fa-brands fa-github"></i>
                        <span className="ml-2">Source</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
