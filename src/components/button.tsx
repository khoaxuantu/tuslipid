import * as React from 'react';
import * as Btn from '../lib/factory/buttonBase';
import * as Info from '../lib/general_info';


function SocialMediaBtnGroup() {
    return (
        <div className='btn-grp social-media-grp'>
            {Info.socialMediaInfoList.map((btnProp) => {
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
        <div className='btn-grp nav-btn-grp mb-3'>
            {Info.navBtnInfoList.map(btnProp => {
                return <Btn.DefaultButton 
                    url={btnProp.url}
                    content={btnProp.content}
                    classname='btn btn-rect'
                    key={btnProp.content} />
            })}
        </div>
    );
}

export function SkillBtnGroup() {
    return (
        <div className='btn-grp mt-2'>
            {Info.skillInfoList.map(btnProp => {
                return <Btn.IconButton 
                    id={btnProp.name}
                    url={btnProp.url}
                    icon={btnProp.icon}
                    classname='btn btn-skill m-2'
                    key={btnProp.name} />
            })}
        </div>
    );
}