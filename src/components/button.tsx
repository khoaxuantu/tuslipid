import * as React from 'react';
import { CgMail } from 'react-icons/cg';
import { BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs';
import { ImFacebook2 } from "react-icons/im";
import { FaCodepen } from "react-icons/fa";
import * as Btn from '../lib/factory/buttonBase';


const socialMediaInfoList: Btn.IconButtonProps[] = [
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

const NavInfoList: Btn.DefaultButtonProps[] = [
    {
        url: "/",
        content: "About"
    },
    {
        url: "/",
        content: "Projects"
    },
    {
        url: "/",
        content: "Blogs"
    }
];


function SocialMediaBtnGroup() {
    return (
        <div className='btn-grp social-media-grp'>
            {socialMediaInfoList.map((btnProp) => {
                return <Btn.IconButton 
                    url={btnProp.url} 
                    icon={btnProp.icon} 
                    key={btnProp.id} 
                    id={btnProp.id}
                    classname='btn btn-square' />;
            })}
        </div>
    );
}

export default SocialMediaBtnGroup;


export function NavBtnGroup() {
    return (
        <div className='btn-grp nav-btn-grp'>
            {NavInfoList.map(btnProp => {
                return <Btn.DefaultButton 
                    url={btnProp.url}
                    content={btnProp.content}
                    classname='btn btn-rect' />
            })}
        </div>
    );
}