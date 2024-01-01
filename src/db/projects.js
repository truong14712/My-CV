import generateRandomId from "../utils/generateRandomId";
import booksShop from ".././assets/books-shop.png";
import jobHunters from ".././assets/job-hunters.png";
const projects = [
  {
    id: generateRandomId(),
    title: "Shop book online",
    description: "Build online book sales and online payments",
    technology: "HTML, CSS, Javascript, Angular, Angular material, Tailwindcss",
    img: booksShop,
    url: "https://github.com/truong14712/books.fe",
  },
  // {
  //   id: generateRandomId(),
  //   title: "Shop book online BE",
  //   description: "Sell books online",
  //   technology: "Nodejs, Mongodb, Express",
  //   img: "https://picsum.photos/200/300",
  //   url: "https://github.com/truong14712/books.be",
  // },
  {
    id: generateRandomId(),
    title: "Website job search JobHunters",
    description: "Build job searches and apply jobs",
    technology: "HTML, CSS, Javascript, React, Redux",
    img: jobHunters,
    url: "https://github.com/nhatminh6112003/ITJOBS-FRONTEND",
  },
];
export default projects;
