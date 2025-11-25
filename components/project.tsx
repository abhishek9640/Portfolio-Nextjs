"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  link: string;
  codeLink: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  codeLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-12 sm:mb-20 last:mb-0 mx-auto max-w-[60rem]"
    >
      <section
        className="relative grid sm:grid-cols-[1fr_0.9fr] gap-8 items-center p-6 sm:p-10 
        rounded-2xl border border-white/10 bg-gray-900/40 hover:bg-gray-900/60 
        transition-all duration-300 shadow-lg"
      >
        {/* LEFT: Text Block */}
        <div className="flex flex-col gap-4 sm:gap-5">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-white/70">{description}</p>

          {/* Tags */}
          <ul className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className="text-[0.65rem] tracking-wide uppercase px-3 py-1 rounded-full 
                bg-white/10 text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white text-gray-900 hover:bg-gray-200 
              transition text-sm shadow-sm"
            >
              Live Demo
            </a>

            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border text-sm border-white/40 text-white/70 
                hover:bg-white/10 transition"
              >
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            quality={95}
            className="max-w-[90%] sm:max-w-[95%] rounded-xl shadow-xl 
            transition-all duration-300 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>
      </section>
    </motion.div>
  );
}
