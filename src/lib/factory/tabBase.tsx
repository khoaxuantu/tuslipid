export interface ITabProps {
  id?: string;
  name: string;
  content: {
    content_class?: string;
    title: string;
    time: string;
    location: string;
    description: string[];
    company: string;
  };
  className?: string;
  tabHandler?: React.MouseEventHandler<HTMLButtonElement>;
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
      <h5>
        {props.content.title} <span>{"@ " + props.content.company}</span>
      </h5>
      <label className="mb-3">
        <span>{props.content.time + " |"}</span> <span>{props.content.location}</span>
      </label>
      <div>
        {props.content.description.map((bp, index) => {
          return <p key={index} className="pb-2" dangerouslySetInnerHTML={{ __html: bp }}></p>;
        })}
      </div>
    </div>
  );
}
