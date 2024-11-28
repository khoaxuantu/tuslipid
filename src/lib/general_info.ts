import { SVGProps } from "react";
import CodepenIcon from "./factory/icons/CodepenIcon";
import DevToIcon from "./factory/icons/DevToIcon";
import DiscordIcon from "./factory/icons/DiscordIcon";
import FbIcon from "./factory/icons/FbIcon";
import GithubIcon from "./factory/icons/GithubIcon";
import LinkedinIcon from "./factory/icons/LinkedinIcon";
import MailIcon from "./factory/icons/MailIcon";
import RedditIcon from "./factory/icons/RedditIcon";
import { ITabProps } from "./factory/tabBase";
import { IBlogCardProps } from "./type/card";

export interface SocialMediaProps {
  id: string;
  url: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface RoutingProps {
  url: string;
  content: string;
}

export const SOCIAL_MEDIA_INFO_LIST: SocialMediaProps[] = [
  {
    id: "mail",
    url: "mailto:tungxk2908@gmail.com",
    icon: MailIcon,
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/xuan-khoa-tu-nguyen-1a8927204/",
    icon: LinkedinIcon,
  },
  {
    id: "github",
    url: "https://github.com/khoaxuantu",
    icon: GithubIcon,
  },
  {
    id: "facebook",
    url: "https://www.facebook.com/xuankhoatu.nguyen/",
    icon: FbIcon,
  },
  {
    id: "discord",
    url: "https://discordapp.com/users/623530338869837825",
    icon: DiscordIcon,
  },
  {
    id: "reddit",
    url: "https://www.reddit.com/user/khoaxuantu",
    icon: RedditIcon,
  },
  {
    id: "dev-to",
    url: "https://dev.to/khoaxuantu",
    icon: DevToIcon,
  },
  {
    id: "codepen",
    url: "https://codepen.io/khoaxuantu",
    icon: CodepenIcon,
  },
];

export const NAV_BTN_INFO_LIST: RoutingProps[] = [
  {
    url: "/about",
    content: "About",
  },
  {
    url: "/projects",
    content: "Projects",
  },
  {
    url: "/blogs",
    content: "Blogs",
  },
  {
    url: "/contact",
    content: "Contact",
  },
];

export const WORK_INFO_LIST: ITabProps[] = [
  {
    name: "Pixta Inc. (Middle)",
    content: {
      title: "Fullstack Web Developer (Middle)",
      company: "Pixta",
      time: "04/2024 - Now",
      location: "Hanoi, Vietnam",
      description: [
        `Lead the development and maintenance of the <a href="https://potonow.vn" target="_blank" rel="noreferrer">Potonow</a> website.`,
        `Handle all backend and infrastructure resources, as well as 70% of the frontend \
resources. Restructure the whole backend codebase.`,
        `Work closely with product owner and manager to plan, evaluate, and implement new \
features: chat integration, mailing integration, blog site, event sites, phone number \
verification with SMS/OTP, etc...`,
        `Frequently used technologies: Next.js, NestJS, MongoDB, ChakraUI, Terraform, AWS.`,
        `Updating...`,
      ],
    },
  },
  {
    name: "Pixta Inc. (Junior)",
    content: {
      title: "Fullstack Web Developer (Junior)",
      company: "Pixta",
      time: "06/2023 - 04/2024",
      location: "Hanoi, Vietnam",
      description: [
        `Developed and maintained the backend system of <a href="https://pixtastock.com" target="_blank" rel="noreferrer">PixtaStock</a>. \
Analyzed data and evaluated the effectiveness of features to improve \
and develop new ones.`,
        `Worked closely with the Japan product design team to maintain PixtaStock's \
frontend, admin panel, and internal tools.`,
        `Provided technical support to resolve and monitor PixtaStock's issues reported \
by the customers.`,
        `Frequently used technologies: Ruby on Rails, React, NodeJS, MySQL, MongoDB, \
        Docker, Kubernetes, AWS.`,
      ],
    },
  },
  {
    name: "Pegatron",
    content: {
      title: "MIS Developer Intern",
      company: "Pegatron",
      time: "02/2022 - 06/2022",
      location: "Taipei, Taiwan",
      description: [
        `Participated in the Shop Floor Information System (SFIS) development team, \
which processes the data to integrate it with Pegatron's manufacturing process \
among 7 global and 2 local factories.`,
        `Learned how to track and update the data flow, manage and develop Pegatron's \
databases via Oracle Database.`,
        `Contributed to the transformation and loading process in the ETL.`,
      ],
    },
  },
  {
    name: "Techman Robot Inc.",
    content: {
      title: "Robotic Automation Engineering Trainee",
      company: "Techman",
      time: "06/2020 - 08/2020",
      location: "Taoyuan, Taiwan",
      description: [
        `Got training in practical robotic processing and functioning. \
(Robotic arm, AI, IoT, Computer vision)`,
        `Developed the TM robotic automation project and presented the project \
at the 2020 Taipei Industrial Automation Exhibition.`,
        `Won the First Prize in the Projects competition held by the company.`,
      ],
    },
  },
];

export const BLOG_INFO_DICT: { [id: string]: IBlogCardProps } = {
  great_ytb_channels_1: {
    content_section: "Blogs",
    id: "great_ytb_channels_1",
    title: "Great Youtube Channels (Part 1)",
    brief_description: `I watch youtube a lot, and I make a list of youtube channels \
I have watched that you may find interesting. Here is part 1 of my list...`,
    url: "/great-ytb-channels-1",
    file: "great_ytb_channels_1.md",
    tags: ["casual"],
    date: new Date("Apr 26 2023 22:35:23 GMT+0800"),
  },
  great_ytb_channels_2: {
    content_section: "Blogs",
    id: "great_ytb_channels_2",
    title: "Great Youtube Channels (Part 2)",
    brief_description: `I watch youtube a lot, and I make a list of youtube channels \
I have watched that you may find interesting. Here is part 2 of my list...`,
    url: "/great-ytb-channels-2",
    file: "great_ytb_channels_2.md",
    date: new Date("Apr 27 2023 13:30:59 GMT+0800"),
    tags: ["casual"],
  },
  markdown_starter: {
    content_section: "Blogs",
    id: "markdown_starter",
    title: "Get Started with Markdown",
    brief_description: "My markdown theme which is generated by React Markdown.",
    url: "/markdown-starter",
    file: "markdown_starter.md",
    tags: ["casual"],
    date: new Date("Thu Mar 23 2023 23:10:33 GMT+0700"),
  },
  uncommon_javascript_notes: {
    content_section: "Blogs",
    id: "uncommon-javascript-notes",
    title: "Uncommon JavaScript Notes - The Language",
    brief_description: `JavaScript is super complicated, like a pain in your ass. \
Even when you are quite familiar with programming languages logics and concepts, \
you still find it difficult to cover major aspects in JS.`,
    url: "/uncommon_javascript_notes",
    file: "uncommon_javascript_notes.md",
    tags: ["javascript", "code"],
    date: new Date("Fri Jun 16 2023 23:02:26 GMT+0700"),
  },
  uncommon_javascript_notes_1: {
    content_section: "Blogs",
    id: "uncommon-javascript-notes-1",
    title: "Uncommon JavaScript Notes - Browser: Document, Events, Interfaces",
    brief_description: `One thing that make JavaScript weird to learn is \
how it interacts with the browser DOM, how to control the events, the forms, \
and how the resource is loaded.`,
    url: "/uncommon_javascript_notes_1",
    file: "uncommon_javascript_notes_1.md",
    tags: ["javascript", "code"],
    date: new Date("Sun Sep 03 2023 11:13:44 GMT+0700"),
  },
  learn_from_react_bun_boilerplate: {
    content_section: "Blogs",
    id: "learn_from_react_bun_boilerplate",
    title: "What I Learned After Re-creating a React Boilerplate",
    brief_description: `We can learn by re-creating something. This post is \
about which things I discovered just by a React boilerplate.`,
    url: "/learn-from-react-bun-boilerplate",
    file: "react_bun_boilerplate.md",
    tags: ["bun", "typescript", "code"],
    date: new Date("Sun Oct 22 2023 19:43:00 GMT+0700"),
  },
  data_adapter_template: {
    content_section: "Blogs",
    id: "data_adapter_template",
    title: "A Template for Building Your Own Data Migration Code",
    brief_description: `Imagine you are facing a complex data migration task scenario involving \
many data sources and intricate transformations. You want to build an efficient script to migrate \
the data, what is your solution?`,
    url: "/data-adapter-template",
    file: "data_adapter_template.md",
    tags: ["typescript", "oop", "code"],
    date: new Date("Fri Mar 15 2024 13:58:21 GMT+0700"),
  },
  mysql_notes: {
    content_section: "Blogs",
    id: "mysql_notes",
    title: "(My)SQL Notes",
    brief_description: `I did a MySQL challenge, but I forgot almost everything after that, so \
I left these notes here for further references.`,
    url: "/mysql-notes",
    file: "mysql_notes.md",
    tags: ["sql", "database"],
    date: new Date("Wed Jun 05 2024 20:38:49 GMT+0700"),
  },
  how_did_my_coding_journey_start: {
    content_section: "Blogs",
    id: "how_did_my_coding_journey_start",
    title: "How Did My Coding Journey Start?",
    brief_description: `I did not start with Computer Science-based. My undergraduate major was \
Mechanical Engineering. So changing the major during the ongoing program was a stressful journey. \
Here I want to share how I overcome it.`,
    url: "/how-did-my-coding-journey-start",
    file: "how_did_my_coding_journey_start.md",
    tags: ["casual"],
    date: new Date("Fri Nov 29 2024 00:11:53 GMT+0700"),
  },
};

export const BLOG_INFO_LIST: { dictKey: string; date: string }[] = [
  { dictKey: "great_ytb_channels_1", date: "Apr 26 2023 22:35:23 GMT+0800" },
  { dictKey: "great_ytb_channels_2", date: "Apr 27 2023 13:30:59 GMT+0800" },
  { dictKey: "markdown_starter", date: "Thu Mar 23 2023 23:10:33 GMT+0700" },
  {
    dictKey: "uncommon_javascript_notes",
    date: "Fri Jun 16 2023 23:02:26 GMT+0700",
  },
  {
    dictKey: "uncommon_javascript_notes_1",
    date: "Sun Sep 03 2023 11:13:44 GMT+0700",
  },
  {
    dictKey: "learn_from_react_bun_boilerplate",
    date: "Sun Oct 22 2023 19:43:00 GMT+0700",
  },
  { dictKey: "data_adapter_template", date: "Fri Mar 15 2024 13:58:21 GMT+0700" },
  { dictKey: "mysql_notes", date: "Wed Jun 05 2024 20:38:49 GMT+0700" },
  { dictKey: "how_did_my_coding_journey_start", date: "Fri Nov 29 2024 00:11:53 GMT+0700" },
];
