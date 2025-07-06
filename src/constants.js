// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import clubLogo from './assets/company_logo/clublogo2.png';



// Education Section Logo's

import smsLogo from './assets/education_logo/schoollogo.jpg';
import nitlogo from './assets/education_logo/logo.jpg';

// Project Section Logo's

import ficLogo from './assets/work_logo/fig.png';
import sudoLogo from  './assets/work_logo/Sudoku.jpg';
import urlShort from './assets/work_logo/urlShortener.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: clubLogo,
      role: "Web Developer",
      company: "The Debating Society",
      date: "Feb 2024 - Present",
      desc: "I contributed to the development of FICTIONARY, an engaging online quiz game based on movies and web series. The game attracted hundreds of newcomers, creating a dynamic and competitive environment for users to test their knowledge of popular entertainment content",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
      ],
    },
   
  ];
  
  export const education = [
    {
      id: 0,
      img: nitlogo,
      school: "National Institute of Technology, Durgapur",
      date: "Aug 2023 - Present",
      grade: "8.3 CGPA",
      desc: "I’m currently in my third year of B.Tech in Electronics and Communication Engineering at the National Institute of Technology, Durgapur. Throughout my academic journey, I’ve developed a strong foundation in both core electronics and computer science domains. I’ve studied subjects such as Data Structures, Algorithms, Object-Oriented Programming, Web Development, Digital Electronics, Analog Electronics, Communication Systems, and Control Systems through a combination of coursework, self-learning, and hands-on projects. I have also actively participated in various workshops and technical events, which have significantly enhanced my practical skills and broadened my perspective.",
      degree: "Bachelor of Technology (B.Tech) ",
    },
    {
      id: 1,
       img: smsLogo,
      school: "St.Mary's School, BathuBasti",
      date: "Apr 2017 - March 2018",
      grade: "93.8%",
      desc: "I completed my Class 12 education from St. Mary’s School, Bathubasti, under the CBSE board, with a focus on Physics, Chemistry, Mathematics, Biology, English, and Physical Education.",
      degree: "CBSE(XII) ",
    },
    {
      id: 2,
img: smsLogo,
       school: "St.Mary's School, BathuBasti",
      date: "Apr 2017 - March 2018",
      grade: "95.2%",
      desc: "My Class 10 education was completed at St. Mary’s School, Bathubasti, affiliated with the CBSE board. My academic curriculum included Social Studies, Science, Mathematics, Hindi, English, and Information Technology.",
      degree: "CBSE(X)",
    },
  
  ];
  
  export const projects = [
    {
      id: 0,
      title: "URL Shortener",
      description:
        "URL Shortener is a MERN stack web app that shortens long URLs and generates QR codes for easy sharing. It stores URL mappings in MongoDB and redirects short URLs to the original link. Built with React, Node.js, Express, and QR code generation using qrcode.",
      image: urlShort,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","MongoDB","Node.js"],
      github: "https://github.com/ankita13406/UrlShortener",
      webapp: "",
    },
    {
      id: 1,
      title: "Landing Page of Fictionary",
      description:
        "The Fictionary landing page features a clean, responsive design using simple HTML and CSS, with clear sign-in and log-in options for easy access across all devices.",
      image: ficLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ankita13406/FictionaryGame",
      webapp: "https://fictionary-game.vercel.app/",
    },
    {
      id: 2,
      title: "Sudoku Solver",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: sudoLogo,
      tags: ["C++","Recursion","Backtracking"],
      github: "https://github.com/ankita13406/SudokuSolver",
      webapp: "",
    },
   

  ];  