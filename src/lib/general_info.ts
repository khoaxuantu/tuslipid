import { IconButtonProps, DefaultButtonProps } from "./factory/buttonBase";
import { CgMail } from 'react-icons/cg';
import { BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs';
import { ImFacebook2 } from "react-icons/im";
import { FaCodepen } from "react-icons/fa";
import svgs from "./factory/iconBase";


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
        url: "/projects",
        content: "Projects"
    },
    {
        url: "/blogs",
        content: "Blogs"
    }
];

export const skillInfoList: IconButtonProps[] = [
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
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
        icon: svgs["PostgreSQL-Light"]
    },
    {
        name: "PyTorch",
        url: "https://pytorch.org/",
        icon: svgs["PyTorch-Light"]
    },
    {
        name: "Python",
        url: "https://www.python.org/",
        icon: svgs["Python-Light"]
    },
    {
        name: "React",
        url: "https://react.dev/",
        icon: svgs["React-Dark"]
    },
    {
        name: "SQLite",
        url: "https://sqlite.org/",
        icon: svgs.SQLite
    },
    {
        name: "SASS",
        url: "https://sass-lang.com/",
        icon: svgs.Sass
    },
    {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        icon: svgs.TypeScript
    }
];