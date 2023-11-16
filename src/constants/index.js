import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  jecc,
  school,
  technologics,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  web2,
  blog,
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
    id: "contact",
    title: "Contact",
  },
  {
    id: "Resume",
    title: "Download Resume",
  },
];

const services = [
  {
    title: "Web Developement",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Embedded Systems",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Embedded System training",
    company_name: "Technologics",
    icon: technologics,
    // iconBg: "#E6DEDD",
    iconBg: "#ffffff",
    date: "2023 - Present",
    points: [
      "Embedded System",
      "C programming"
    ],
  },
  {
    title: "B.Tech",
    company_name: "Jyothi Engineering Collage",
    icon: jecc,
    // iconBg: "#383E56",
    // iconBg: "#E6DEDD",
    iconBg: "#ffffff",
    date: "2019 - 2023",
    points: [
      "Electronics And Communication Engineering",
      "APJ Abdul Kalam Technological University, Kerala",
      "CGPA : 7.95",
    ],
  },
  {
    title: "12Th Standard",
    company_name: "H.S.S Chalavara",
    icon: school,
    // iconBg: "#E6DEDD",
    iconBg: "#ffffff",
    date: "2018 - 2019",
    points: [
      "Computer Science",
      "Kerala State Board",
      "Percentage : 85",
    ],
  },
  {
    title: "10Th Standard",
    company_name: "H.S.S Chalavara",
    icon: school,
    // iconBg: "#383E56",
    iconBg: "#ffffff ",
    date: "2016 - 2017",
    points: [
      "Kerala State Board",
      "Percentage : 98.8",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Tech-Blog",
    description:
      "Web application that enables users to post blogs, edit blogs. Designed user interface for managing blog.",
    tags: [
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Gokul6726/mern-blog",
  },
  {
    name: "Real Time Multiple Patient Monitoring Website",
    description:
      "Web-based platform that allows users to monitor health status of multiple patients and provide real-time values, graphs, logs and real time alerts.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "ajax",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "chart.js",
        color: "pink-text-gradient",
      },
    ],
    image: web2,
    source_code_link: "https://github.com/Gokul6726/rtpms-v3",
  },

];

export { services, technologies, experiences, testimonials, projects };
