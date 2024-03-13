import React from "react";
import { RiSchoolLine } from "react-icons/ri";
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
      "Expected graduation in 2024. Currently maintaining a CGPA of 7.53. Relevant coursework includes Data Structures and Algorithms, Operating Systems, Computer Networks, and Database Management Systems.",
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
    codeLink: "https://github.com/abhishek9640/Imaginify", // Add the repository URL
  },
  {
    title: "V_verse",
    description: "LinkedIn-inspired web app for my college",
    tags: ["React + Vite", "Firebase", "Tailwind"],
    imageUrl: V_verse,
    link: "https://github.com/abhishek9640/VGI_Verse",
    codeLink: "https://github.com/abhishek9640/VGI_Verse", // Add the repository URL
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
  "MySQl",
  "Java",
  "REST APIs",
  "Postman",
  "Python",
  "PHP",
  "Framer Motion",
] as const;
