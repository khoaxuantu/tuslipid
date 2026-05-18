import { ITabProps } from "@/lib/factory/tabBase";
import { WORK_INFO_LIST } from "@/lib/general_info";

function Works() {
  return (
    <section className="mb-5 row">
      <aside className="col-4 pb-3">
        <h2>About my experiences</h2>
        <blockquote>
          <i>I do mostly backend at work and frontend in my free time</i>
        </blockquote>
      </aside>
      <div className="about-c-works pb-2 col-8">
        {WORK_INFO_LIST.map((work, index) => (
          <ItemWork key={index} {...work} isCurrent />
        ))}
      </div>
    </section>
  );
}

export default Works;

function ItemWork(props: ITabProps & { isCurrent: boolean }) {
  return (
    <details name={props.name} open={props.isCurrent}>
      <summary>
        <ItemWorkSummary {...props} />
      </summary>
      <div className="mt-2 p-4">
        {props.content.description.map((bp, index) => {
          return <p key={index} className="pb-2" dangerouslySetInnerHTML={{ __html: bp }}></p>;
        })}
      </div>
    </details>
  );
}

function ItemWorkSummary(props: ITabProps) {
  return (
    <>
      <h5>
        {props.content.title} <span>{"@ " + props.content.company}</span>
      </h5>
      <p>
        <span>{props.content.time + " |"}</span> <span>{props.content.location}</span>
      </p>
    </>
  );
}
