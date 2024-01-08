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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello, I'm Elias Hossain, a passionate Civil Engineer with a knack for
        effective Project Management in building construction. With 3 years of
        hands-on experience, I have successfully led projects, including the
        Steel Foot Over Bridge around Dhaka City and Menhaz City in Palashbari,
        Gaibandha. I thrive in challenging environments and am dedicated to
        upholding company objectives.
      </p>

      <p className="mb-3">
        In my current role as a Project Engineer at Creative Architecture and
        Engineers since February 2020, I've demonstrated my skills in overseeing
        diverse projects, such as the Image Polyethnic Institute in Rangpur and
        Molla Tower in Palashbari, Gaibandha. My educational background includes
        a B.Sc. in Civil Engineering from the World University of Bangladesh,
        where I graduated with a CGPA of 3.39 out of 4.00 in 2023.
      </p>
      <p className="mb-3">
        During a 3-month industrial attachment at Project Solution, I delved
        into Basic Design and Estimating Costing, enhancing my skills and
        knowledge.
      </p>
    </motion.section>
  );
}
