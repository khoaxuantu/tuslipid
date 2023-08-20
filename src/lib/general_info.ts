import { IconButtonProps, DefaultButtonProps } from "./factory/buttonBase";
import { CgMail } from 'react-icons/cg';
import { BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs';
import { ImFacebook2 } from "react-icons/im";
import { FaCodepen } from "react-icons/fa";
import { ITabProps } from "./factory/tabBase";
import { IProjCardProps, IBlogCardProps } from "./factory/cardBase";
import svgs from "./factory/iconBase";
import { imgs } from "./factory/cardBase";
import { FcGoogle } from "react-icons/fc";


export const socialMediaInfoList: IconButtonProps[] = [
    {
        id: "mail",
        url: "mailto:tungxk2908@gmail.com",
        icon: CgMail
    },
    {
        id: "linkedin",
        url: "https://www.linkedin.com/in/xuan-khoa-tu-nguyen-1a8927204/",
        icon: BsLinkedin
    },
    {
        id: "github",
        url: "https://github.com/khoaxuantu",
        icon: BsGithub
    },
    {
        id: "facebook",
        url: "https://www.facebook.com/xuankhoatu.nguyen/",
        icon: ImFacebook2
    },
    {
        id: "discord",
        url: "https://discordapp.com/users/623530338869837825",
        icon: BsDiscord
    },
    {
        id: "codepen",
        url: "https://codepen.io/khoaxuantu",
        icon: FaCodepen
    }
];

export const navBtnInfoList: DefaultButtonProps[] = [
    {
        url: "/about",
        content: "About"
    },
    {
        url: "/blogs",
        content: "Blogs"
    },
    {
        url: "/guestbook",
        content: "Guestbook"
    }
];

export const skillInfoList: IconButtonProps[] = [
    {
        name: "AWS",
        url: "https://aws.amazon.com/",
        icon: svgs["AWS-Dark"]
    },
    {
        name: "Bootstrap",
        url: "https://getbootstrap.com/",
        icon: svgs.Bootstrap
    },
    {
        name: "C",
        url: "https://cppreference.com/",
        icon: svgs.C
    },
    {
        name: "C++",
        url: "https://cplusplus.com/",
        icon: svgs.CPP
    },
    {
        name: "CSS",
        url: "https://www.w3.org/Style/CSS/Overview.en.html",
        icon: svgs.CSS
    },
    {
        name: "Django",
        url: "https://www.djangoproject.com/",
        icon: svgs.Django
    },
    {
        name: "Docker",
        url: "https://www.docker.com/",
        icon: svgs.Docker
    },
    {
        name: "Firebase",
        url: "https://firebase.google.com/",
        icon: svgs['Firebase-Light']
    },
    {
        name: "Flask",
        url: "https://flask.palletsprojects.com/",
        icon: svgs['Flask-Light']
    },
    {
        name: "GCP",
        url: "https://cloud.google.com/",
        icon: svgs['GCP-Light']
    },
    {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: svgs.HTML
    },
    {
        name: "JavaScript",
        url: "https://www.javascript.com/",
        icon: svgs.JavaScript
    },
    {
        name: "Oracle DB",
        url: "https://www.oracle.com/database/",
        icon: svgs.Oracle
    },
    {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
        icon: svgs["PostgreSQL-Light"]
    },
    {
        name: "Python",
        url: "https://www.python.org/",
        icon: svgs["Python-Light"]
    },
    {
        name: "Rails",
        url: "https://rubyonrails.org/",
        icon: svgs.Rails
    },
    {
        name: "React",
        url: "https://react.dev/",
        icon: svgs["React-Dark"]
    },
    {
        name: "Ruby",
        url: "https://www.ruby-lang.org/en/",
        icon: svgs.Ruby
    },
    {
        name: "SASS",
        url: "https://sass-lang.com/",
        icon: svgs.Sass
    },
    {
        name: "SQLite",
        url: "https://sqlite.org/",
        icon: svgs.SQLite
    },
    {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        icon: svgs.TypeScript
    },
    {
        name: "NextJS",
        url: "https://www.typescriptlang.org/",
        icon: svgs["NextJS-Light"]
    },
    {
        name: "Git",
        url: "https://www.typescriptlang.org/",
        icon: svgs.Git
    },
    {
        name: "NodeJS",
        url: "https://www.typescriptlang.org/",
        icon: svgs["NodeJS-Dark"]
    },
    {
        name: "Redis",
        url: "https://www.typescriptlang.org/",
        icon: svgs["Redis-Light"]
    },
];

export const worksInfoList: ITabProps[] = [
    {
        name: "Pixta Inc.",
        content: {
            title: "Fullstack Web Developer",
            company: "Pixta",
            time: "06/2023 - now",
            location: "Hanoi, Vietnam",
            description: [
                `Develop and maintain the backend system of PixtaStock.
                Analyze data, evaluate the effectiveness of features to improve
                and develop new features.`,
                `Work closely with the Japan product design team to maintain the web application for
                internal tools.`,
                `Provide technical support to resolve and monitor PixtaStock's issues reported
                by the customers.`,
                `Frequently used stacks: Ruby on Rails, NodeJS, MySQL, MongoDB, Docker, AWS`,
                `Updating...`
            ]
        }
    },
    {
        name: "Pegatron",
        content: {
            title: "Data Engineer Intern",
            company: "Pegatron",
            time: "02/2022 - 06/2022",
            location: "Taipei, Taiwan",
            description: [
                `Participated in the Shop Floor Information System (SFIS) development team,
                which processes the data to integrate it with Pegatron's manufacturing process
                among 7 global and 2 local factories.`,
                `Learned how to track and update the data flow, manage and develop
                databases via Oracle Database.`,
                `Contributed to the transformation and loading process in the ETL
                 and customer's report by retrieving the data into >30 forms.`
            ]
        }
    },
    {
        name: "Techman Robot Inc.",
        content: {
            title: "Robotic Automation Egineering Trainee",
            company: "Techman",
            time: "06/2020 - 08/2020",
            location: "Taoyuan, Taiwan",
            description: [
                `Got training in practical robotic processing and functioning.
                 (Robotic arm, AI, IoT, Computer vision)`,
                `Developed the TM robotic automation project and presented the project
                  at the 2020 Taipei Industrial Automation Exhibition.`,
                `Won the First Prize in the Projects competition held by the company.`
            ]
        }
    },
];

export const projInfoDict: {[id: string]: IProjCardProps} = {
    'algo-visual': {
        id: "0",
        content_section: "Projects",
        title: "Algorithm Visualizer",
        description: [
            `A web application that visualizes algorithms from code
            (initially provides sorting algorithms demonstration).`
        ],
        tools: ["TypeScript", "Next", "Bootstrap"],
        demoURL: "https://algovisual.xuankhoatu.com/",
        githubURL: "https://github.com/khoaxuantu/Algorithms-Visualizer",
        imageURL: imgs.Algovisual
    },
    'finance-rep': {
        id: 1,
        content_section: "Projects",
        title: "CS50 Finance Replication",
        description: [
            `A web-app replication of CS50 finance's mock stock-trading website
            (finance.cs50.net), which initially comes from a problem set in CS50X.
            It has been extended with some additional features and
            different database.`
        ],
        tools: ["Flask", "Bootstrap", "SQLite", "Firestore", "GCP"],
        demoURL: "https://ﬁnancerep.xuankhoatu.com/",
        githubURL: "https://github.com/khoaxuantu/finance-rep",
        imageURL: imgs.Financerep
    },
    'e-commerce-auction': {
        id: 2,
        content_section: "Projects",
        title: "E-commerce Auction",
        description: [
            `An eBay-like e-commerce auction site that will allow users to post
            auction listings, place bids on listings,
            comment on those listings, and add listings to a ”watchlist”.`
        ],
        tools: ["Django", "Bootstrap", "PostgreSQL"],
        demoURL: "https://youtu.be/dC6IBfkbZs8",
        githubURL: "https://github.com/khoaxuantu/E-commerce_auction_site",
        imageURL: imgs.Auction
    },
    'knapsack-solvers-analysis': {
        id: 3,
        content_section: "Projects",
        title: "Knapsack Solvers Analysis",
        description: [
            `An analysis of the performance in solving typical knapsack problems
            by the Simplex Algorithm and the Harmony Search Algorithm,
            as the Advanced Algorithms coursework project.`
        ],
        tools: ["Python", "Or-tools"],
        githubURL: "https://github.com/khoaxuantu/Solving-Knapsacks-in-LinearProg-vs-HarmonySearch",
        imageURL: imgs.Knapsack
    },
    'email-spa': {
        id: 4,
        content_section: "Projects",
        title: "Email Single Page Application",
        description: [
            `A front-end for an email client in SPA style that makes API calls to send
            and receive email`
        ],
        tools: ["Plain JavaScript", "Django", "Bootstrap"],
        githubURL: "https://github.com/khoaxuantu/one-page-email",
        imageURL: imgs.MailSPA
    },
    'wiki-encyclopedia': {
        id: 4,
        content_section: "Projects",
        title: "Wiki Encyclopedia",
        description: [
            `A Wikipedia-like online encyclopedia that will allow users search
            for an encyclopedia entry, create new entries and edit an existing entry.`
        ],
        tools: ["Django", "Bootstrap"],
        githubURL: "https://github.com/khoaxuantu/wiki_encyclopedia",
        imageURL: imgs.Wiki
    },
    'calendar-on-terminal': {
        id: 5,
        content_section: "Projects",
        title: "Calendar on Terminal",
        description: [
            `A small project of calendar queried on terminal, as a midterm project
            when I first took the C programming course in 2020.`
        ],
        tools: ["C"],
        githubURL: "https://github.com/khoaxuantu/Calendar_demo",
        imageURL: imgs.Calendar
    },
    'techman-proj': {
        id: 6,
        content_section: "Projects",
        title: "Lottery Draw Robotic Application",
        description: [
            `Participated in a group project to develop the robotic arm
            application project in the lottery drawing.`,
            `My responsibility is to set up Eye-in-hand Vision and
            3D Vision via a camera attached to the robotic arm to detect
            the prize's patterns and the area for the gift box container.`
        ],
        tools: ["Robotic automation algorithm design"],
        imageURL: imgs.Tm
    },
    'gripper-sketch': {
        id: 7,
        content_section: "Projects",
        title: "Gripper Base System Sketch",
        description:[
            `A graphical sketch of robotic arm gripper base system,
            as a manual graphic coursework in Mechanical Graphic course.`
        ],
        tools: ["AutoCAD"],
        imageURL: imgs.AutoCAD
    }
};

export const blogInfoDict: {[id: string]: IBlogCardProps} = {
    "great_ytb_channels_1": {
        content_section: "Blogs",
        id: "great_ytb_channels_1",
        title: "Great Youtube Channels (Part 1)",
        brief_description: `I watch youtube a lot, and I make a list of youtube channels
            I have watched that you may find interesting. Here is part 1 of my list...`,
        url: "/great_ytb_channels_1",
        file: "great_ytb_channels_1.md"
    },
    "great_ytb_channels_2": {
        content_section: "Blogs",
        id: "great_ytb_channels_2",
        title: "Great Youtube Channels (Part 2)",
        brief_description: `I watch youtube a lot, and I make a list of youtube channels
            I have watched that you may find interesting. Here is part 2 of my list...`,
        url: "/great_ytb_channels_2",
        file: "great_ytb_channels_2.md"
    },
    "markdown_starter": {
        content_section: "Blogs",
        id:"markdown_starter",
        title: "Get started with Markdown",
        brief_description: "My markdown theme which is generated by React Markdown.",
        url:"/markdown_starter",
        file:"markdown_starter.md"
    },
    "uncommon_javascript_notes": {
        content_section: "Blogs",
        id: "uncommon_javascript_notes",
        title: "Uncommon JavaScript Notes - The language",
        brief_description: `JavaScript is super complicated, like a pain in your ass.
            Even when you are quite familiar with programming languages logics and concepts,
            you still find it difficult to cover major aspects in JS.`,
        url: "/uncommon_javascript_notes",
        file: "uncommon_javascript_notes.md"
    }
};

export const blogInfoList: {dictKey: string, date: string}[] = [
    {dictKey: "great_ytb_channels_1", date: "Apr 26 2023 22:35:23 GMT+0800"},
    {dictKey: "great_ytb_channels_2", date: "Apr 27 2023 13:30:59 GMT+0800"},
    {dictKey: "markdown_starter", date:"Thu Mar 23 2023 23:10:33 GMT+0700"},
    {dictKey: "uncommon_javascript_notes", date: "Fri Jun 16 2023 23:02:26 GMT+0700"},
];

export const oauthInfoList: IconButtonProps[] = [
    {
        icon: BsGithub,
        url: "",
        classname: "btn-oauth-github",
        name: "Github"
    },
    {
        icon: FcGoogle,
        url: "",
        classname: "btn-oauth-google",
        name: "Google"
    }
];
