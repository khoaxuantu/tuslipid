import { SkillBtnGroup } from "../button_group";

export function Skills() {
  return (
    <section className="mb-5 row">
      <aside className="col-4 pb-3 pe-5">
        <h2>
          About my <span>coding biases</span>
        </h2>
        <blockquote>
          <i>
            <span>I love learning and trying new things...</span>
            <span>
              And I want to share to you <span>my favorite,</span> <span>or familiar,</span>{" "}
              <span>or confident</span> tools.
            </span>
          </i>
        </blockquote>
      </aside>
      <SkillBtnGroup />
    </section>
  );
}
