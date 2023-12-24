import generateRandomId from "../utils/generateRandomId";

const projects = [
  {
    id: generateRandomId(),
    title: "Shop book online FE",
    description: "Sell books online",
    technology: "HTML, CSS, Javascript, Angular, Angular material",
    img: "https://picsum.photos/200/300",
    url: "https://github.com/truong14712/books.fe",
  },
  {
    id: generateRandomId(),
    title: "Shop book online BE",
    description: "Sell books online",
    technology: "Nodejs, Mongodb, Express",
    img: "https://picsum.photos/200/300",
    url: "https://github.com/truong14712/books.be",
  },
  {
    id: generateRandomId(),
    title: "Website job search JobHunters",
    description: "...",
    technology: "HTML, CSS, Javascript, React, Redux",
    img: "https://picsum.photos/200/300",
    url: "https://github.com/nhatminh6112003/ITJOBS-FRONTEND",
  },
];
export default projects;
