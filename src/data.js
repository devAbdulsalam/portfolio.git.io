//  icons
// import {
//   FiYoutube,
//   FiInstagram,
//   FiGithub,
//   FiDribbble,
//   FiLayout,
//   FiSettings,
//   FiPenTool,
//   FiTag,
//   FiMail,
//   FiMapPin,
// } from 'react-icons/fi';

// // companies icons
// import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
// import UpworkBrandIcon from './assets/img/brands/upwork.png';
// import FiverBrandIcon from './assets/img/brands/fiverr.png';
// import BehanceBrandIcon from './assets/img/brands/behance.png';
// import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// // projects images
import { HttpProxy } from "vite";
import project1 from "./assets/images/project-1.png";
import project2 from "./assets/images/project-2.jpg";
import project3 from "./assets/images/project-3.jpg";
import project4 from "./assets/images/project-4.jpg";
import project5 from "./assets/images/project-5.png";

// // skills images
// import SkillImg1 from './assets/img/skills/html5.png';
// import SkillImg2 from './assets/img/skills/css3.png';
// import SkillImg3 from './assets/img/skills/js.png';
// import SkillImg4 from './assets/img/skills/reactjs.png';
// import SkillImg5 from './assets/img/skills/nextjs.png';
// import SkillImg6 from './assets/img/skills/nodejs.png';
// import SkillImg7 from './assets/img/skills/git.png';
// import SkillImg8 from './assets/img/skills/figma.png';

// // testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// // navigation
// export const navigation = [
//   {
//     name: 'home',
//     href: 'home',
//   },
//   {
//     name: 'about',
//     href: 'about',
//   },
//   {
//     name: 'portfolio',
//     href: 'portfolio',
//   },
//   {
//     name: 'services',
//     href: 'services',
//   },
//   {
//     name: 'testimonials',
//     href: 'testimonials',
//   },
//   {
//     name: 'contact',
//     href: 'contact',
//   },
// ];

// // social
// export const social = [
//   {
//     icon: <FiYoutube />,
//     href: '',
//   },
//   {
//     icon: <FiInstagram />,
//     href: '',
//   },
//   {
//     icon: <FiGithub />,
//     href: '',
//   },
//   {
//     icon: <FiDribbble />,
//     href: '',
//   },
// ];

// // companies
// export const brands = [
//   {
//     img: FreelancerBrandIcon,
//     href: '',
//   },
//   {
//     img: UpworkBrandIcon,
//     href: '',
//   },
//   {
//     img: FiverBrandIcon,
//     href: '',
//   },
//   {
//     img: BehanceBrandIcon,
//     href: '',
//   },
//   {
//     img: DribbbleBrandIcon,
//     href: '',
//   },
// ];

// // projects
export const projects = [
    {
      img: project1,
      name: "Movie App",
      desc: "watch on demand moveies at the confort of your home",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://myreactflix.netlify.app",
      techStack: ["tailwindcss", "react"]
    },
    {
      img: project2,
      name: "Job search Web App",
      desc: "A solution that helps job seeks and recruiter without hassle",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: project3,
      name: "Momentum",
      desc: "Live display of weather, time, date and enrich Qoute to brighten your Day",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://dmomentum.netlify.app",
    },
    {
      img: project4,
      name: "BreakFast Resturant",
      desc: "This solution is a platform that allows people order African dishes anywhere, anytime",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://reacttailwindnavbar.netlify.app",
    },
    {
      img: project4,
      name: "Queens Collections",
      desc: "This solution is a E-commerce clothing website",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://reacttailwindnavbar.netlify.app",
    },
    {
      img: project4,
      name: "Fitness",
      desc: "This solution is a E-commerce clothing website that sell sport kits, and gears",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://sport-center.netlify.app",
    },
    {
      img: project5,
      name: "Vue Country",
      desc: "lorem gdfgjdfgldfg;lfg;l kjpjpojo[j[l ijpojp",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://vuecountry05.netlify.app",
    },
  ];

// // projects
// export const projectsNav = [
//   {
//     name: 'all',
//   },
//   {
//     name: 'UI/UX Design',
//   },
//   {
//     name: 'web development',
//   },
//   {
//     name: 'branding',
//   },
// ];

// // skill
export  const skills = [
    {
      logo: "logo-html5",
      color: "#e65100",
      bg: "white",
      count: 80,
    },
    {
      logo: "logo-css3",
      color: "#1565c0",
      bg: "white",
      count: 70,
    },
    {
      logo: "logo-javascript",
      color: "#ff9800",
      bg: "",
      count: 60,
    },
    {
      logo: "logo-react",
      color: "#26c6da",
      bg: "white",
      count: 50,
    },
    {
      logo: "logo-github",
      color: "white",
      bg: "",
      count: 60,
    },
    {
      logo: "logo-google",
      color: "white",
      bg: "white",
      count: 80,
    }
  ];

// services
export const services = [
  {
    icon: 'fa-laptop-code',
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: 'fa-tools',
    name: 'Web Maintanance',
    description:
      'SEO ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: 'fa-database',
    name: 'Resaerch/Data Analysis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: 'fa-people-roof',
    name: 'Human Resource Management',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
    "he has fulfilled all the agreed assignments on time and his work always brought added value. He has advised us on best practices in terms of Project management, did a thorough research for our project, making it a successful one.",
    authorName: 'Queen Lateefa',
    authorPosition: 'CEO, Queens Collections',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'high performance. We can’t imagine working without him. I would highly recommend working with him.',
    authorName: 'Mr. Prince',
    authorPosition: 'CEO Kudikan',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Your Project Is In Safe Hands, ',
    authorName: 'Mr. Ken',
    authorPosition: 'Veteran Javascript Developer',
  },
  {
    authorImg: TestiImage3,
    authorText:"Abdulsalam is one of the most professional people I've worked with so far - responsive, creative, punctual and with structured approach.",
    authorName: 'Faruk Ahmed',
    authorPosition: 'Phyton Developer',
  },
];

// contact_info
export const contact_info = [
    { logo: "mail", text: "devabdulsalam74@gmail.com", link:"https:mailto/ammuftau74@gmail.com"},
    { logo: "logo-whatsapp", text: "+234 903 509 5173", link: "https://wa.me/+09035095173"},
    {
      logo: "location",
      text: "Kano, Nigeria",
    },
  ];