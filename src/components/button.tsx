import { Link } from 'react-router-dom';
import * as Btn from '../lib/factory/buttonBase';
import * as Info from '../lib/general_info';


export function SocialMediaBtnGroup() {
    return (
        <div className=''>
            <div className='btn-contact-overlay'>
            </div>
            <div className="center body-txt-menu">
                <div className='btn-grp btn-contact-grp'>
                    {Info.socialMediaInfoList.map((btnProp) => {
                        return <Btn.IconButton
                            url={btnProp.url}
                            icon={btnProp.icon}
                            key={btnProp.id}
                            id={btnProp.id}
                            classname='btn btn-square' />;
                    })}
                </div>
                <Link to="/" className='btn btn-rect mt-5' id='go-back'>Home</Link>
            </div>
        </div>
    );
}

export function NavBtnGroup() {
    return (
        <div className='btn-grp nav-btn-grp mb-3 body-txt-menu'>
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
    Info.skillInfoList.sort(compareSkill);

    function compareSkill(a: Btn.IconButtonProps, b: Btn.IconButtonProps): number {
        if ((a.name as string) < (b.name as string)) return -1;
        else if ((a.name as string) > (b.name as string)) return 1;
        return 0;
    }

    return (
        <div className='btn-skill-grp mt-2 col-8'>
            {Info.skillInfoList.map(btnProp => {
                return <Btn.IconButton
                    id={btnProp.name}
                    url={btnProp.url}
                    icon={btnProp.icon}
                    classname='btn btn-skill mt-2 mb-2'
                    key={btnProp.name} />
            })}
        </div>
    );
}
