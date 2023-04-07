import { Link } from "react-router-dom";
import { IconType } from "react-icons/lib";


interface IBaseButtonProps {
    id?: string,
    url: string,
    classname?: string
};


export interface DefaultButtonProps extends IBaseButtonProps {
    content: string
}


export interface IconButtonProps extends IBaseButtonProps {
    icon: IconType | string,
    name?: string
};



export function DefaultButton(props: DefaultButtonProps) {
    return (<Link to={props.url} className={props.classname}>{props.content}</Link>);
}


export function IconButton(props: IconButtonProps) {
    let Icon: any;
    if (typeof props.icon === "string") {
        Icon = <>
            <div className="icon">
                <img className="m-1" src={props.icon} alt={props.name} width={32} />
            </div>
            <div id="name">{props.id}</div>
        </>;
    }
    else {
        Icon = <props.icon className='icon' size={"1.5rem"} color='#000' />;
    }

    return (
        <Link id={props.id} className={props.classname} to={props.url} target="_blank" key={props.id}>
            {Icon}
        </Link>
    );
}