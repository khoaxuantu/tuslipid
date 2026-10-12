import { ACTIVITY_INFO_LIST } from "@/lib/general_info";

export default function Activities() {
  return (
    <section id="activity">
      <aside>
        <h2>About my activities</h2>
        <blockquote>
          <i>
            Sometimes, I participates in events for fun, which helps me open
            many connections.
          </i>
        </blockquote>
      </aside>
      <ul>
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
