import projects from "../../../db/projects";
import { Link } from "react-router-dom";
import { selectCurrentColor } from "../../../providers/features/colorSlice";
import { useSelector } from "react-redux";

const MyProjects = () => {
  const currentColor = useSelector(selectCurrentColor);

  return (
    <div className="my-[25px] py-[25px] sm:p-3 md:p-3">
      <div
        className="text-2xl font-semibold text-center mb-[40px]"
        style={{
          color: currentColor,
          transition: "color 2s ease",
        }}
      >
        My Projects
      </div>
      <div className="grid grid-cols-3 gap-10 sm:grid-cols-2 md:grid-cols-2">
        {projects.map((project) => {
          return (
            <>
              <div className="bg-white border rounded-lg" key={project?.id}>
                <img
                  src={`${project.img}`}
                  alt="1"
                  className="w-[360px] h-[200px] bg-cover "
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
                  <div className="mb-[20px]">{project.description}</div>
                  <div className="mb-[26px] font-bold text-[14px] text-[#0f0e17]">
                    {project.technology}
                  </div>
                  <div className="flex items-center justify-center">
                    <Link to={project.url} className="flex items-center">
                      <button
                        className="border px-5 py-[2px] rounded-2xl  shadow"
                        style={{
                          background: currentColor,
                          transition: "background 2s ease",
                          color: "#ffff",
                        }}
                      >
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
