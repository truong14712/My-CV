const Navigation = () => {
  return (
    <div className="mt-[4rem]">
      <ul className="right-[38%] fixed flex items-center text-center bg-white border drop-shadow-lg rounded-[24px] px-4 cursor-pointer p-2 opacity-100 z-10">
        <li className="px-4 p-2 rounded-[20px]">Home</li>
        <li className="px-4 p-2 rounded-[24px]">Project</li>
        <li className="px-4 p-2 rounded-[24px]">Resume</li>
        <li className="px-4 p-2 rounded-[24px]">Github</li>
      </ul>
    </div>
  );
};

export default Navigation;
