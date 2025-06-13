"use server";

import { getImgs, getSvgs } from "./factory/importMedia";
import { IProjCardProps } from "./type/card";

export interface SkillProps {
  name: string;
  url: string;
  icon: string;
}

export const getSkillInfo = async (): Promise<SkillProps[]> => {
  const svgs = await getSvgs();
  return [
    {
      name: "AWS",
      url: "https://aws.amazon.com/",
      icon: svgs["AWS-Dark"],
    },
    {
      name: "C",
      url: "https://cppreference.com/",
      icon: svgs.C,
    },
    {
      name: "C++",
      url: "https://cplusplus.com/",
      icon: svgs.CPP,
    },
    {
      name: "CSS",
      url: "https://www.w3.org/Style/CSS/Overview.en.html",
      icon: svgs.CSS,
    },
    {
      name: "Django",
      url: "https://www.djangoproject.com/",
      icon: svgs.Django,
    },
    {
      name: "Docker",
      url: "https://www.docker.com/",
      icon: svgs.Docker,
    },
    {
      name: "Flask",
      url: "https://flask.palletsprojects.com/",
      icon: svgs["Flask-Light"],
    },
    {
      name: "GCP",
      url: "https://cloud.google.com/",
      icon: svgs["GCP-Light"],
    },
    {
      name: "HTML",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: svgs.HTML,
    },
    {
      name: "JavaScript",
      url: "https://www.javascript.com/",
      icon: svgs.JavaScript,
    },
    {
      name: "PostgreSQL",
      url: "https://www.postgresql.org/",
      icon: svgs["PostgreSQL-Light"],
    },
    {
      name: "Python",
      url: "https://www.python.org/",
      icon: svgs["Python-Light"],
    },
    {
      name: "Rails",
      url: "https://rubyonrails.org/",
      icon: svgs.Rails,
    },
    {
      name: "React",
      url: "https://react.dev/",
      icon: svgs["React-Dark"],
    },
    {
      name: "Ruby",
      url: "https://www.ruby-lang.org/en/",
      icon: svgs.Ruby,
    },
    {
      name: "SASS",
      url: "https://sass-lang.com/",
      icon: svgs.Sass,
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
      icon: svgs.TypeScript,
    },
    {
      name: "NextJS",
      url: "https://nextjs.org/",
      icon: svgs["NextJS-Light"],
    },
    {
      name: "Git",
      url: "https://git-scm.com/",
      icon: svgs.Git,
    },
    {
      name: "NodeJS",
      url: "https://nodejs.org/",
      icon: svgs["NodeJS-Dark"],
    },
    {
      name: "MySQL",
      url: "https://www.mysql.com/",
      icon: svgs["MySQL-Light"],
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
      icon: svgs.MongoDB,
    },
    {
      name: "Vercel",
      url: "https://vercel.com/",
      icon: svgs["Vercel-Dark"],
    },
    {
      name: "Bun",
      url: "https://bun.sh",
      icon: svgs["Bun-Light"],
    },
    {
      name: "NestJS",
      url: "https://nestjs.com",
      icon: svgs["NestJS-Dark"],
    },
    {
      name: "Firebase",
      url: "https://firebase.google.com",
      icon: svgs["Firebase-Dark"],
    },
    {
      name: "Vim",
      url: "https://www.vim.org",
      icon: svgs["VIM-Light"],
    },
    {
      name: "VSCode",
      url: "https://code.visualstudio.com",
      icon: svgs["VSCode-Light"],
    },
    {
      name: "Vue",
      url: "https://vuejs.org",
      icon: svgs["VueJS-Dark"],
    },
    {
      name: "Material 3",
      url: "https://m3.material.io",
      icon: svgs.material3,
    },
    {
      name: "Nue",
      url: "https://nuejs.org",
      icon: svgs.nue,
    },
    {
      name: "Chakra UI",
      url: "https://www.chakra-ui.com/",
      icon: svgs["chakra-ui"],
    },
  ];
};

export const getProjInfo = async (): Promise<{
  [id: string]: IProjCardProps;
}> => {
  const imgs = await getImgs();
  return {
    "algo-visual": {
      id: 8,
      content_section: "Projects",
      title: "Algorithm Visualizer",
      description: [
        `A web application that visualizes algorithms from code
          (initially provides sorting algorithms demonstration).`,
      ],
      tools: ["TypeScript", "Next", "Bootstrap"],
      demoURL: "https://algovisual.xuankhoatu.com/",
      githubURL: "https://github.com/khoaxuantu/Algorithms-Visualizer",
      imageURL: imgs.Algovisual,
    },
    "finance-rep": {
      id: 9,
      content_section: "Projects",
      title: "CS50 Finance Replication",
      description: [
        `A web-app replication of CS50 finance's mock stock-trading website
          (finance.cs50.net), which initially comes from a problem set in CS50X.
          It has been extended with some additional features and
          different database.`,
      ],
      tools: ["Flask", "Bootstrap", "SQLite", "Firestore", "GCP"],
      demoURL: "https://ﬁnancerep.xuankhoatu.com/",
      githubURL: "https://github.com/khoaxuantu/finance-rep",
      imageURL: imgs.Financerep,
    },
    "e-commerce-auction": {
      id: 11,
      content_section: "Projects",
      title: "E-commerce Auction",
      description: [
        `An eBay-like e-commerce auction site that will allow users to post
          auction listings, place bids on listings,
          comment on those listings, and add listings to a ”watchlist”.`,
      ],
      tools: ["Django", "Bootstrap", "PostgreSQL"],
      demoURL: "https://youtu.be/dC6IBfkbZs8",
      githubURL: "https://github.com/khoaxuantu/E-commerce_auction_site",
      imageURL: imgs.Auction,
    },
    "knapsack-solvers-analysis": {
      id: 10,
      content_section: "Projects",
      title: "Knapsack Solvers Analysis",
      description: [
        `An analysis of the performance in solving typical knapsack problems
          by the Simplex Algorithm and the Harmony Search Algorithm,
          as the Advanced Algorithms coursework project.`,
      ],
      tools: ["Python", "Or-tools"],
      githubURL: "https://github.com/khoaxuantu/Solving-Knapsacks-in-LinearProg-vs-HarmonySearch",
      imageURL: imgs.Knapsack,
    },
    "email-spa": {
      id: 12,
      content_section: "Projects",
      title: "Email Single Page Application",
      description: [
        `A front-end for an email client in SPA style that makes API calls to send
          and receive email`,
      ],
      tools: ["JavaScript", "Django", "Bootstrap"],
      githubURL: "https://github.com/khoaxuantu/one-page-email",
      imageURL: imgs.MailSPA,
    },
    "wiki-encyclopedia": {
      id: 13,
      content_section: "Projects",
      title: "Wiki Encyclopedia",
      description: [
        `A Wikipedia-like online encyclopedia that will allow users search
          for an encyclopedia entry, create new entries and edit an existing entry.`,
      ],
      tools: ["Django", "Bootstrap"],
      githubURL: "https://github.com/khoaxuantu/wiki_encyclopedia",
      imageURL: imgs.Wiki,
    },
    "calendar-on-terminal": {
      id: 14,
      content_section: "Projects",
      title: "Calendar on Terminal",
      description: [
        `A small project of calendar queried on terminal, as a midterm project
          when I first took the C programming course in 2020.`,
      ],
      tools: ["C"],
      githubURL: "https://github.com/khoaxuantu/Calendar_demo",
      imageURL: imgs.Calendar,
    },
    "techman-proj": {
      id: 15,
      content_section: "Projects",
      title: "Lottery Draw Robotic Application",
      description: [
        `Participated in a group project to develop the robotic arm
          application project in the lottery drawing.`,
        `My responsibility is to set up Eye-in-hand Vision and
          3D Vision via a camera attached to the robotic arm to detect
          the prize's patterns and the area for the gift box container.`,
      ],
      tools: ["Robotic automation algorithm design"],
      imageURL: imgs.Tm,
    },
    "gripper-sketch": {
      id: 16,
      content_section: "Projects",
      title: "Gripper Base System Sketch",
      description: [
        `A graphical sketch of robotic arm gripper base system,
          as a manual graphic coursework in Mechanical Graphic course.`,
      ],
      tools: ["AutoCAD"],
      imageURL: imgs.AutoCAD,
    },
    "fontscale-sass": {
      id: 7,
      content_section: "Projects",
      title: "Font Scale Sass",
      description: [
        `A SASS font-scale generator module which provides
          a preset font size for your footnote, endnote, caption, body, blockquote, and headings
          (from h6 to h1).`,
      ],
      tools: ["SASS"],
      imageURL: imgs.Fontscale,
      githubURL: "https://github.com/khoaxuantu/Font-scale-sass",
      demoURL: "https://www.npmjs.com/package/fontscale-sass",
    },
    "random-meme-picker": {
      id: 6,
      content_section: "Projects",
      title: "Random Meme Picker",
      description: [
        `A random meme web chosen from my more than 1000-meme collection. Pick a meme a day for a
          better life.`,
      ],
      tools: ["React", "Bun", "SASS", "Cloud storage"],
      demoURL: "https://meme.xuankhoatu.com",
      githubURL: "https://github.com/khoaxuantu/random-meme-gen",
      imageURL: imgs.RandomMeme,
    },
    "hello-algo": {
      id: 3,
      content_section: "Projects",
      title: "Hello Algo",
      description: [
        `An open-source data structures and algorithms crash course with animated illustrations and
          off-the-shelf code. I take responsibility for Ruby sample codes contributing and
          reviewing.`,
      ],
      tools: ["Ruby"],
      demoURL: "https://www.hello-algo.com/",
      githubURL: "https://github.com/krahets/hello-algo",
      imageURL: imgs.HelloAlgo,
    },
    "comprehensive-rust": {
      id: 5,
      content_section: "Projects",
      title: "Comprehensive Rust",
      description: [
        `A Vietnamese translator of "Comprehensive Rust" - an open-source free Rust course developed
        by the Android team at Google.`,
      ],
      tools: ["mdBook"],
      demoURL: "https://google.github.io/comprehensive-rust/",
      githubURL: "https://github.com/google/comprehensive-rust",
      imageURL: imgs.GoogleOpenSource,
    },
    "my-notes": {
      id: 0,
      content_section: "Projects",
      title: "My Notes",
      description: [
        `I built a content-focused website that exhibits only the knowledge I believe to be
        useful.`,
      ],
      tools: ["Nue", "HTML", "CSS", "JavaScript", "Firebase Hosting"],
      demoURL: "https://notes.xuankhoatu.com",
      githubURL: "https://github.com/khoaxuantu/tusss-note",
      imageURL: imgs.MyNotes,
    },
    pixtastock: {
      id: 4,
      content_section: "Projects",
      title: "PixtaStock",
      description: [
        `I worked as a maintainer and developer for this site's item flow (from when an user uploads
        a media item to the platform until that item is published for selling).`,
      ],
      tools: ["Ruby on Rails", "NodeJS", "React", "MySQL", "AWS"],
      demoURL: "https://pixtastock.com",
      imageURL: imgs.PixtaStock,
    },
    potonow: {
      id: 1,
      content_section: "Projects",
      title: "Potonow",
      description: [
        `I worked as a core engineer building this site. This is a Vietnamese platform for fast,
        convenient, and budget-friendly photoshoot bookings.`,
      ],
      tools: ["NestJS", "Next.js", "ChakraUI", "MongoDB", "AWS", "Firebase", "Terraform"],
      demoURL: "https://potonow.vn",
      imageURL: imgs.Potonow,
    },
    "devfest-2024-landing": {
      id: 4,
      content_section: "Projects",
      title: "DevFest Hanoi 2024 Landing",
      description: [
        `A landing page for the DevFest Hanoi 2024 event. I constructed the majority of this site's
        frontend.`,
      ],
      tools: ["Vue", "CSS", "Firebase Realtime Database"],
      demoURL: "https://devfest.gdghanoi.com",
      imageURL: imgs.DevFest2024,
    },
    "gdg-hanoi-landing": {
      id: 2,
      content_section: "Projects",
      title: "GDG Hanoi Landing",
      description: [
        `A landing page for the GDG Hanoi. I constructed the majority of this site's frontend.`,
      ],
      tools: ["Next.js", "Sass", "Radix UI", "Firebase"],
      demoURL: "https://gdghanoi.com",
      imageURL: imgs.GdgHanoi,
    },
  };
};
