import { JSX, SVGProps } from "react";
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

interface ActivityProps {
  title: string;
  time: string;
  position: string;
  location: string;
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
    name: "PIXTA Vietnam Co. Ltd (Middle)",
    content: {
      title: "Fullstack Web Developer - Potonow",
      company: "Pixta",
      time: "04/2024 - Ongoing",
      location: "Hanoi, Vietnam",
      description: [
        `Spearhead the development and maintenance of the <a href="https://potonow.vn" target="_blank" rel="noreferrer">Potonow</a> website,
        resulting in a 20x increase in registered users, from 300 to 6000.`,
        `Overhaul the codebase architecture and conventions, and optimized core modules,
        significantly reducing development time and maintaining a bug rate below 5%.`,
        `Collaborate closely with product owner and manager to plan, evaluate, and implement new
        features:
        <ul class="pt-2" style="list-style-type:unset; list-style-position:inside">
          <li>Chat integration</li>
          <li>Mailing integration</li>
          <li>Blog site</li>
          <li>Event sites</li>
          <li>Phone number verification with SMS/OTP</li>
          <li>Firebase Cloud Messaging integration</li>
          <li>Slack monitoring integration</li>
        </ul>`,
        `Proficient in a range of technologies, including Next.js, NestJS, MongoDB, ChakraUI, Docker, Terraform, AWS, Firebase.`,
        `Updating...`,
      ],
    },
  },
  {
    name: "PIXTA Vietnam Co. Ltd (Junior)",
    content: {
      title: "Fullstack Web Developer - PixtaStock",
      company: "Pixta",
      time: "06/2023 - 04/2024",
      location: "Hanoi, Vietnam",
      description: [
        `Developed and maintained <a href="https://pixtastock.com" target="_blank" rel="noreferrer">PixtaStock</a>'s
        item flow system, which processes from 20000 to 40000 media items per day.`,
        `Stabilized internal workers of the EPS-format item flow, assured them to process fluently
        up to 25000 files per day.`,
        `Contributed 30% effort to migrating all the media processing flow databases from MongoDB
        to MySQL, preserving 270GB data.`,
        `Collaborated closely with the Japan product design team to maintain PixtaStock's
        frontend, admin panel, and internal tools.`,
        `Optimized the footage thumbnail and updated approximately 28M records for the related
        footage metadata.`,
        `Provided technical support to resolve and monitor PixtaStock's issues reported
        by the customers.`,
        `Proficient in a range of technologies, including Ruby on Rails, React, NodeJS, MySQL,
        MongoDB, Docker, Kubernetes, AWS.`,
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
        `Published 30 SQL data transformation scripts, which were applied to the factory data \
transformation processes.`,
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

export const ACTIVITY_INFO_LIST: ActivityProps[] = [
  {
    title: "GDG DevFest Hanoi 2024",
    time: "11/2024",
    position: "Technical Core Team Extended",
    location: "Hanoi",
  },
  {
    title: "Google I/O Extended Hanoi 2024",
    time: "07/2024",
    position: "Technical Collaborator",
    location: "Hanoi",
  },
  {
    title: "NTUST-VSA Vietnam Culture Festival",
    time: "05/2019",
    position: "Onsite Technical Collaborator",
    location: "Taipei",
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
  my_chosen_tech_stack: {
    content_section: "Blogs",
    id: "my_chosen_tech_stack",
    title: "My Chosen Tech Stack",
    brief_description: `Every programmer begins with a "starter pack" of tools and knowledge, but \
the sheer breadth and depth of programming can quickly become overwhelming.`,
    url: "/my-chosen-tech-stack",
    file: "my_chosen_tech_stack.md",
    tags: ["code"],
    date: new Date("Fri Jan 28 2025 01:03:16 GMT+0700"),
  },
  frontend_101: {
    content_section: "Blogs",
    id: "frontend_101",
    title: "The Web Frontend 101",
    brief_description: `Can you summary your frontend knowledge to featured concepts so we can \
have an overview of what frontend development is?`,
    url: "/frontend-101",
    file: "frontend_101.md",
    tags: ["code"],
    date: new Date("Mon Feb 24 2025 21:59:22 GMT+0700"),
  },
};

export const BLOG_INFO_LIST: { dictKey: string; date: string }[] = [
  { dictKey: "great_ytb_channels_1", date: "Apr 26 2023 22:35:23 GMT+0800" },
  { dictKey: "great_ytb_channels_2", date: "Apr 27 2023 13:30:59 GMT+0800" },
  { dictKey: "markdown_starter", date: "Thu Mar 23 2023 23:10:33 GMT+0700" },
  {
    dictKey: "learn_from_react_bun_boilerplate",
    date: "Sun Oct 22 2023 19:43:00 GMT+0700",
  },
  { dictKey: "data_adapter_template", date: "Fri Mar 15 2024 13:58:21 GMT+0700" },
  { dictKey: "mysql_notes", date: "Wed Jun 05 2024 20:38:49 GMT+0700" },
  { dictKey: "how_did_my_coding_journey_start", date: "Fri Nov 29 2024 00:11:53 GMT+0700" },
  { dictKey: "my_chosen_tech_stack", date: "Fri Jan 28 2025 01:03:16 GMT+0700" },
  { dictKey: "frontend_101", date: "Mon Feb 24 2025 21:59:22 GMT+0700" }
];
