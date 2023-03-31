import * as React from 'react';
import { CgMail } from 'react-icons/cg';
import { BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs';
import { ImFacebook2 } from "react-icons/im";
import { FaCodepen } from "react-icons/fa";
import { IconType } from 'react-icons/lib';

interface IButtonProps {
    url: string,
    icon: IconType
}

const iconList: IButtonProps[] = [
    {
        url: "mailto:tungxk2908@gmail.com",
        icon: CgMail
    },
    {
        url: "https://www.linkedin.com/in/xuan-khoa-tu-nguyen-1a8927204/",
        icon: BsLinkedin
    },
    {
        url: "https://github.com/khoaxuantu",
        icon: BsGithub
    },
    {
        url: "https://www.facebook.com/xuankhoatu.nguyen/",
        icon: ImFacebook2
    },
    {
        url: "https://discordapp.com/users/623530338869837825",
        icon: BsDiscord
    },
    {
        url: "https://codepen.io/khoaxuantu",
        icon: FaCodepen
    }
];

function Button(props: IButtonProps) {
    return (
        <a href={props.url} className='btn btn-square'>
            <props.icon className='icon' size={"2rem"} color='#000' />
        </a>
    );
}

function SocialMediaBtnGroup() {
    return (
        <div className='btn-grp social-media-grp'>
            {iconList.map((btnProp) => {
                return <Button url={btnProp.url} icon={btnProp.icon} />;
            })}
        </div>
    );
}

export default SocialMediaBtnGroup;