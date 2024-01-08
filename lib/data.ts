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
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesDatas = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
