import React from "react";
import { RiSchoolLine, RiBriefcaseLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import V_verse from "@/public/V_verse.png";
import imaginify from "@/public/imaginify.png";
import digital_lib from "@/public/digital_lib.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const educationData = [
  {
    title: "Bachelor of Technology in Computer Science",
    location: "Vishveshwarya Group of Institutions, Greater Noida",
    description:
      "Graduated in 2024 with a Bachelor of Technology in Computer Science, achieving a CGPA of 7.61. Gained a strong foundation through coursework in core subjects such as Data Structures and Algorithms, Operating Systems, Computer Networks, and Database Management Systems. Enhanced problem-solving skills through hands-on projects and practical implementations.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Co-operative College",
    location: "Jamshedpur",
    description:
      "Completed in 2020. Relevant coursewok includes physics, chemistry and Mathematics",
    icon: React.createElement(RiSchoolLine),
    date: "2020",
  },
  {
    title: "Gayatri Shiksha Niketan",
    location: "Jamshedpur",
    description:
      "Completed in 2018. Scored 76%.",
    icon: React.createElement(RiSchoolLine),
    date: "2018",
  },
] as const;


export const projectsData = [
  {
    title: "Imaginify",
    description: "AI SaaS web application for editing images using Artificial Intelligence",
    tags: ["TypeScript", "Next.js", "Tailwind", "Redux", "Shadcn", "Cloudinary", "Clerk", "Stripe"],
    imageUrl: imaginify,
    link: "https://imaginify-vert-alpha.vercel.app/",
    codeLink: "https://github.com/abhishek9640/Imaginify", 
  },
  {
    title: "V_verse",
    description: "LinkedIn-inspired web app for my college",
    tags: ["React + Vite", "Firebase", "Tailwind"],
    imageUrl: V_verse,
    link: "https://vgi-verse.vercel.app/",
    codeLink: "https://github.com/abhishek9640/VGI_Verse", 
  },
  {
    title: "Digital Library",
    description:
      " Built a web-based application with a team to streamline and automate various activities in a Library",
    tags: ["HTML", "CSS", "javaScript","SQL","Bootstrap", "PHP"],
    imageUrl: digital_lib,
    link:"https://github.com/abhishek9640/GRANTH-VGI_Library_And_Notice_Portal",
    codeLink:"https://github.com/abhishek9640/GRANTH-VGI_Library_And_Notice_Portal"
  },
] as const;

export const experienceData = [
  {
    role: "Software Developer",
    company: "DigiHook",
    duration: "Oct 2024 - Present",
    responsibilities: [
      "Architected and deployed scalable Inventory and Office Management Systems with secure backends, reducing manual processes by 40% and adding real-time dashboards for operational insights.",
      "Designed intuitive, responsive UI/UX interfaces using ShadCN and Tailwind CSS, boosting cross-device compatibility and user retention by 25%.",
      "Developed advanced web applications with Next.js, Node.js, and PostgreSQL, achieving 35% better user engagement and 40% faster load times through server-side rendering and caching.",
      "Optimized Laravel-based solutions with efficient MySQL integration, enhancing system response by 30%.",
      "Streamlined workflows using agile methodologies, Git, and CI/CD pipelines, cutting development cycles by 20% and ensuring 99.9% application reliability.",
      "Created engaging dashboards with React and Tailwind CSS, driving better decision-making through dynamic data visualization.",
    ],
    date: "Oct 2024 - Present",
    icon: React.createElement(RiBriefcaseLine),
  },
  {
    role: "Software Developer",
    company: "VOCSO Technologies Pvt. Ltd.",
    duration: "Apr 2024 - Sept 2024",
    responsibilities: [
      "Led the development of high-performance websites such as rodicconsultants.com and jbknowledgepark.co.in using Next.js, Node.js, and PostgreSQL, achieving a 30% increase in user engagement through optimized functionality and intuitive design.",
      "Enhanced education platforms like College18.com and School18.com with technical SEO practices and performance improvements, boosting search engine visibility and user experience.",
      "Designed responsive, accessible UI/UX interfaces using ShadCN and Tailwind CSS, increasing user retention by 20%.",
      "Built robust, interactive web applications with server-side rendering, caching, and optimized API integrations for 100% cross-browser compatibility.",
      "Delivered scalable enterprise-level solutions with React.js, PHP, and JavaScript frameworks, optimizing system architecture for maintainability.",
      "Improved scalability and performance through modular design patterns and database query optimizations, achieving 30% faster load times and enhanced user satisfaction.",
    ],
    date: "Apr 2024 - Sept 2024",
    icon: React.createElement(RiBriefcaseLine),
  },
] as const;




export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Firebase",
  "MongoDB",
  "Redux",
  "MySQL",
  "Java",
  "REST APIs",
  "Postman",
  "Python",
  "PHP",
  "UI/UX",
  "Figma",
  "Adobe XD",
  "Framer Motion",
] as const;

