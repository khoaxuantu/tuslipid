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
    icon: IconType
};



export function DefaultButton(props: DefaultButtonProps) {
    return (<Link to={props.url} className={props.classname}>{props.content}</Link>);
}


export function IconButton(props: IconButtonProps) {
    return (
        <Link id={props.id} className={props.classname} to={props.url} target="_blank" key={props.id}>
            <props.icon className='icon' size={"1.5rem"} color='#000' />
        </Link>
    );
}