"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-relaxed sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.6 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-6 text-muted-foreground">
        I build digital products that are fast, scalable, and thoughtfully designed.
        I enjoy turning ideas into experiences — shaping the frontend with precision,
        and engineering reliable systems behind the curtain.
      </p>

      <p className="mb-6 text-muted-foreground">
        My recent work includes a full-stack Travel Platform, a Crypto Betting Web App,
        and an AI powered SaaS tool. I work with
        <span className="font-medium"> Next.js, React, Node.js, MongoDB, PostgreSQL, AWS </span>
        and modern UI systems like <span className="font-medium">ShadCN + Tailwind</span>.
      </p>

      <p className="text-muted-foreground">
        I believe great software is a balance of clean code, intuitive UI, and performance
        that you can feel but never notice. I’m currently looking for a
        <span className="font-medium"> full-time software engineering role</span>
        where I can help build meaningful, timeless products.
        When I’m not coding, I’m exploring design trends, reading tech philosophy,
        or getting lost in strategy games.
      </p>
    </motion.section>
  );
}
