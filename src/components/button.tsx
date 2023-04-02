import * as React from 'react';
import * as Btn from '../lib/factory/buttonBase';
import { socialMediaInfoList, navBtnInfoList } from '../lib/general_info';


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
            {navBtnInfoList.map(btnProp => {
                return <Btn.DefaultButton 
                    url={btnProp.url}
                    content={btnProp.content}
                    classname='btn btn-rect' />
            })}
        </div>
    );
}