"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
    >
      {/* Avatar */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Image
              src="/dp.webp"
              alt="Abhishek portrait"
              width="160"
              height="160"
              quality={95}
              priority={true}
              unoptimized={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Headline */}
      <motion.h1
        className="mb-8 mt-6 px-4 text-3xl font-semibold leading-snug text-muted-foreground sm:text-5xl sm:leading-tight"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <span className="font-bold text-black dark:text-white">Hello, I’m Abhishek.</span>{" "}
        I design and build performant web experiences with{" "}
        <span className="font-medium text-black dark:text-white">
          React, Next.js, Node.js, and modern UI systems.
        </span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="mb-10 text-sm sm:text-base text-muted-foreground px-6 leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        Focused on clean architecture, intuitive interfaces, and software that feels effortless to use.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        {/* Contact Button */}
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        {/* Resume Button */}
        <a
          href="/CV.pdf"  // Ensure this file is inside /public
          download
          className="group flex items-center gap-2 bg-white dark:bg-white/10 text-gray-700 dark:text-white/60 px-7 py-3 rounded-full hover:scale-110 active:scale-105 transition borderBlack"
        >
          Resume
          <HiDownload className="opacity-70 group-hover:-translate-y-0.5 transition text-xl" />
        </a>

        {/* LinkedIn */}
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full text-xl focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/abhishek-54-kr/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        {/* GitHub */}
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full text-xl focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/abhishek9640"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
