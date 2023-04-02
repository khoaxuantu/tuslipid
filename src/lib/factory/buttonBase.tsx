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
    return (<a href={props.url} className={props.classname}>{props.content}</a>);
}


export function IconButton(props: IconButtonProps) {
    return (
        <a id={props.id} className={props.classname} href={props.url} key={props.id}>
            <props.icon className='icon' size={"1.5rem"} color='#000' />
        </a>
    );
}