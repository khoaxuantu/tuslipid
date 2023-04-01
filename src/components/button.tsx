import * as React from 'react';
import { CgMail } from 'react-icons/cg';
import { BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs';
import { ImFacebook2 } from "react-icons/im";
import { FaCodepen } from "react-icons/fa";
import { IconType } from 'react-icons/lib';

interface IButtonProps {
    id?: string,
    url: string,
    icon?: IconType,
    content?: string
}

const iconList: IButtonProps[] = [
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

function MenuButton(props: IButtonProps) {
    if (props.icon !== undefined) {
        return (
            <a id={props.id} className='btn btn-square' href={props.url} key={props.id}>
                <props.icon className='icon' size={"1.5rem"} color='#000' />
            </a>
        );
    }
    else {
        return (<a href={props.url} className='btn btn-rect'>{props.content}</a>);
    }
}

function SocialMediaBtnGroup() {
    return (
        <div className='btn-grp social-media-grp'>
            {iconList.map((btnProp) => {
                return <MenuButton url={btnProp.url} icon={btnProp.icon} key={btnProp.id} id={btnProp.id} />;
            })}
        </div>
    );
}

export default SocialMediaBtnGroup;

export function NavBtnGroup() {
    return (
        <div className='btn-grp nav-btn-grp'>
            <MenuButton url='/' content='About'/>
            <MenuButton url='/' content='Works'/>
            <MenuButton url='/' content='Projects' />
        </div>
    );
}