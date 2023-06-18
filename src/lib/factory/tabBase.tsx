export interface ITabProps {
    id?: string,
    name: string,
    content: {
        content_class?: string,
        title: string,
        time_space: string,
        description: string[]
    },
    className?: string,
    tabHandler?: React.MouseEventHandler<HTMLButtonElement>
}


export function TabSelector(props: ITabProps) {
    return (
        <button id={props.id} className={props.className} onClick={props.tabHandler}>
            {props.name}
        </button>
    );
}

export function TabContent(props: ITabProps) {
    return (
        <div id={props.id} className={props.className}>
            <h3>{props.content.title}</h3>
            <div className="pt-1 mb-3">{props.content.time_space}</div>
            <div className="description-txt">
                {
                    props.content.description.map((bp, index) => {
                        return <p key={index} className="pb-2">{bp}</p>
                    })
                }
            </div>
        </div>
    );
}