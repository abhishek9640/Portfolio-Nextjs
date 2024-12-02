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
    role: "Full Stack Developer",
    company: "VOCSO Technologies Pvt. Ltd.",
    duration: "Apr 2024 - Present",
    responsibilities: [
      "Led a team to build rodicconsultants.com and jbcollege.com using Next.js, Strapi (Node.js CMS), and PostgreSQL, with dynamic functionality, fully responsive UI/UX (Tailwind CSS, Shadcn), SEO optimization, and hosting on AWS.",
      "Managed project lifecycles from planning to deployment, ensuring high-quality, timely deliveries.",
      "Demonstrated proficiency in frontend/backend technologies with over a year of experience in JavaScript frameworks like React and Next.js.",
      "Managed College18.com and School18.com, SEO-optimized dynamic CMS websites with extensive listings of colleges and schools, focusing on performance and user experience.",
    ],
    date: "Apr 2024 - Present",
    icon: React.createElement(RiBriefcaseLine),
  },
  {
    role: "Web Developer",
    company: "DigiHook",
    duration: "July 2023 - Mar 2024",
    responsibilities: [
      "Developed scalable Inventory Management and Office Management Systems, focusing on secure backend architectures.",
      "Led web projects using HTML, CSS, JavaScript, Bootstrap, and ReactJS, delivering responsive, user-friendly designs.",
      "Built robust backend solutions using PHP, integrating seamlessly with databases for efficient data management.",
      "Collaborated with clients to ensure tailored, high-quality project outcomes.",
    ],
    date: "July 2023 - Mar 2024",
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
  "MySQl",
  "Java",
  "REST APIs",
  "Postman",
  "Python",
  "PHP",
  "UI/UX"
  "Figma",
  "Adobe XD",
  "Framer Motion",
] as const;
