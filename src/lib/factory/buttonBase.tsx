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
    name?: string,
    onClick?: any
};



export function DefaultButton(props: DefaultButtonProps) {
    return (<Link to={props.url} className={props.classname}>{props.content}</Link>);
}


export function IconButton(props: IconButtonProps) {
    let Icon: any;
    if (typeof props.icon === "string") {
        Icon = <>
            <div className="icon">
                <img className="m-1" src={props.icon} alt={'icon-' + props.id} width={32} />
            </div>
            <div id="name">{props.id}</div>
        </>;
    }
    else {
        Icon = <props.icon className='icon' size={"1.5rem"} color='#000' aria-label={props.id} />;
    }

    return (
        <Link id={props.id} className={props.classname} to={props.url} target="_blank" key={props.id}>
            {Icon}
        </Link>
    );
}

export function LoginButton(props: IconButtonProps) {
    return (
        <button
            className={`btn btn-oauth ${props.classname} ps-3 pe-3 pt-1 pb-1`}
            onClick={props.onClick}>
            <props.icon size={20} color="white" className="me-3" />
            <span className="oauth-txt">{"Sign in with "+props.name}</span>
        </button>
    );
}
