const Skill = () => {
  return (
    <div className="">
      <div className="mt-[30px] font-semibold text-2xl text-center">
        My current <span>stack</span>of <span>languages/technologies</span>is:
      </div>
      <div className="flex flex-wrap items-center justify-center w-[768px] mx-auto pt-3 gap-[10px]">
        <img
          src="https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white"
          alt="HTML"
          title="HTML"
          className="gap-[10px]"
        />
        <img
          src="https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white"
          alt="CSS"
          title="CSS"
        />
      </div>
    </div>
  );
};

export default Skill;
