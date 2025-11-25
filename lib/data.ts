import React from "react";
import { RiSchoolLine, RiBriefcaseLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import editzen_img from "@/public/editzen.png";
import travel_img from "@/public/travel.png";

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
    title: "Editzen",
    description:
      "AI-powered SaaS platform with advanced image editing capabilities, secure authentication, and subscription billing.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "ShadCN", "Clerk", "Stripe", "Cloudinary"],
    imageUrl: editzen_img, // replace with your actual import
    link: "https://editzen-vert-alpha.vercel.app/",
    codeLink: "https://github.com/abhishek9640/EditZen", // same repo as listed in resume
  },
  {
    title: "ToTravelIsToLearn",
    description:
      "Full-scale travel booking platform with custom admin panel, itinerary management, secure bookings, leads, reviews, and blog system.",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind", "NextAuth", "AWS", "S3"],
    imageUrl: travel_img, // replace with your actual import
    link: "https://www.totravelistolearn.in/",
    codeLink: "https://github.com/abhishek9640/travel-booking-frontend",
  },
] as const;


export const experienceData = [
  {
    role: "Software Developer",
    company: "DigiHook",
    duration: "Oct 2024 – Present",
    responsibilities: [
      "Developing scalable Inventory and Office Management Systems with secure Node.js + PostgreSQL backends.",
      "Creating clean, responsive interfaces using ShadCN and Tailwind, focused on accessibility and visual clarity.",
      "Improving app performance with SSR, caching strategies, and optimized queries for real-time dashboards.",
      "Automating deployments using CI/CD workflows and maintaining reliable cloud environments.",
    ],
    date: "Oct 2024 – Present",
    icon: React.createElement(RiBriefcaseLine),
  },
  {
    role: "Software Developer",
    company: "VOCSO Technologies Pvt. Ltd.",
    duration: "Apr 2024 – Sept 2024",
    responsibilities: [
      "Built high-performance websites using Next.js, Node.js, and PostgreSQL for enterprise and education platforms.",
      "Implemented SEO-friendly architecture and caching, improving loading speeds and organic reach.",
      "Designed modern UI systems with ShadCN + Tailwind and delivered accessible, mobile-first experiences.",
      "Enhanced code quality through modular patterns, API optimization, and maintainable architecture.",
    ],
    date: "Apr 2024 – Sept 2024",
    icon: React.createElement(RiBriefcaseLine),
  },
] as const;





export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "ShadCN UI",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "MySQL",
  "AWS",
  "Git",
  "REST APIs",
  "Cloudinary",
  "Stripe",
  "Clerk",
  "S3 Bucket",
  "Figma",
  "AI Tools"
] as const;


