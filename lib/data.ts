import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Project Engineer",
    location: "Dhaka, Bangladesh",
    description:
      "Currently serving as a Project Engineer at Creative Architecture and Engineers, actively contributing to various projects in building construction. Notable projects include the Steel Foot Over Bridge in Dhaka City, Image Polyethnic Institute in Rangpur, and Menhaz City in Palashbari, Gaibandha.",
    icon: React.createElement(CgWorkAlt), // Replace with an appropriate icon component
    date: "February 2020 - Present",
  },
  {
    title: "Industrial Attachment",
    location: "Project Solution",
    description:
      "Completed a 3-month industrial attachment focusing on Basic Design and Estimating Costing.",
    icon: React.createElement(CgWorkAlt), // Replace with an appropriate icon component
    date: "2017",
  },
  {
    title: "B.Sc. in Civil Engineering",
    location: "World University of Bangladesh, Dhaka",
    description:
      "Graduated with a Bachelor's degree in Civil Engineering, achieving a CGPA of 3.39 out of 4.00 in 2023.",
    icon: React.createElement(LuGraduationCap), // Replace with an appropriate icon component
    date: "2017 - 2023",
  },
  {
    title: "Diploma in Engineering",
    location: "Engineers Polytechnic Institute, Rajbari",
    description:
      "Obtained a diploma in Civil Technology with a GPA of 3.46 out of 4.00 in 2017.",
    icon: React.createElement(LuGraduationCap), // Replace with an appropriate icon component
    date: "2017",
  },
] as const;
