import { ACTIVITY_INFO_LIST } from "@/lib/general_info";

export default function Activities() {
  return (
    <section className="mb-5 row">
      <aside className="col-4 pb-3 pe-5">
        <h2>About my activities</h2>
        <blockquote>
          <i>Sometimes, I participates in events for fun, which helps me open many connections.</i>
        </blockquote>
      </aside>
      <ul className="about-c-activities col-8">
        {ACTIVITY_INFO_LIST.map((activity) => {
          return (
            <li key={activity.time}>
              <h5>{activity.title}</h5>
              <blockquote>
                <i>
                  {activity.location}, {activity.time}
                </i>{" "}
                | {activity.position}
              </blockquote>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
