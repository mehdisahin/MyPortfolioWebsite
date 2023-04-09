import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  git,
  Omnifood,
  typescript,
  Bankist,
  BankistWeb,
  Mapty,
  Forkify,
  freelancer,
  Meals,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "E-commerce Website Programming",
    icon: backend,
  },
  {
    title: "Website Design and Programming",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Freelance Front-end Developer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Completed freelance projects using HTML, CSS, JavaScript, and React, with a focus on creating user-friendly and visually appealing interfaces.",
      "Collaborated closely with clients to understand their needs and provide customized solutions that met their goals and objectives.",
      "Demonstrated strong problem-solving skills and attention to detail, as well as the ability to work independently and efficiently.",
      "Continuously sought out new learning opportunities and stayed up-to-date with the latest trends and technologies in the web development industry.",
    ],
  },
];

const projects = [
  {
    name: "Omnifood",
    description:
      "The website encourages users to sign up for the meal delivery service. It does not have any ordering functionality, as it is solely a marketing tool for the meal delivery service.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Omnifood,
    source_code_link: "https://github.com/mehdisahin/Omnifood",
    live_website_link: "https://omnifoodappp.netlify.app/",
  },
  {
    name: "FoodOrder",
    description:
      "The basic meal website enables users to select meals from different categories, adjust serving quantities, add to cart, and place an order by entering personal information.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "REACT",
        color: "green-text-gradient",
      },
      {
        name: "JavasScript",
        color: "pink-text-gradient",
      },
      {
        name: "FİREBASE",
        color: "blue-text-gradient",
      },
    ],
    image: Meals,
    source_code_link: "https://github.com/mehdisahin/ReactMeals",
    live_website_link: "https://react-food-order-app23.netlify.app/",
  },
  {
    name: "Forkify",
    description:
      "The app enables users to search for recipes under different categories, add new recipes, bookmark them, and adjust the number of servings based on the ingredients.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "RESTAPI",
        color: "green-text-gradient",
      },
      {
        name: "JavasScript",
        color: "pink-text-gradient",
      },
    ],
    image: Forkify,
    source_code_link: "https://github.com/mehdisahin/Forkify",
    live_website_link: "https://forkifyappp.netlify.app",
  },
  {
    name: "MaptyApp",
    description:
      "The app detects the user's location and allows them to drop pins on a map for cycling or running, with the ability to set parameters such as duration and distance.",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "RESTAPI",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Mapty,
    source_code_link: "https://github.com/mehdisahin/MaptyApp",
    live_website_link: "https://maptyapp23.netlify.app/",
  },

  {
    name: "BankistApp",
    description:
      "A financial platform with features for transferring funds between accounts, requesting loans, sorting transactions, and providing a secure login and logout option.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavasScript",
        color: "pink-text-gradient",
      },
    ],
    image: Bankist,
    source_code_link: "https://github.com/mehdisahin/BankistApp",
    live_website_link: "https://bankistapp23.netlify.app/",
  },
  {
    name: "Bankist Website",
    description:
      "This website promotes a bank application's features and encourages sign-ups, but has no account or transactional functionality. It only shows the benefits of the application.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavasScript",
        color: "pink-text-gradient",
      },
    ],
    image: BankistWeb,
    source_code_link: "https://github.com/mehdisahin/Bankist-Website",
    live_website_link: "https://bankist-website-challenge.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
