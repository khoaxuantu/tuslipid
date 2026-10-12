import { getSkillInfo, SkillProps } from "@/lib/general_info_server";
import Link from "next/link";

export function Skills() {
  return (
    <section id="skill">
      <aside className="col-4 pb-3 pe-5">
        <h2>
          About my <span>coding biases</span>
        </h2>
        <blockquote>
          <i>
            <span>I love learning and trying new things...</span>
            <span>
              And I want to share to you <span>my favorite,</span>{" "}
              <span>or familiar,</span> <span>or confident</span> tools.
            </span>
          </i>
        </blockquote>
      </aside>
      <SkillBtnGroup />
    </section>
  );
}

export async function SkillBtnGroup() {
  const skillInfoList = await getSkillInfo();
  skillInfoList.sort(compareSkill);

  function compareSkill(a: SkillProps, b: SkillProps): number {
    if ((a.name as string) < (b.name as string)) return -1;
    else if ((a.name as string) > (b.name as string)) return 1;
    return 0;
  }

  return (
    <div>
      {skillInfoList.map((btnProp) => {
        return (
          <Link
            key={btnProp.name}
            href={btnProp.url}
            target="__blank"
            rel="noreferrer noopener"
          >
            <button>
              <div className="icon">
                <img
                  className="p-1"
                  src={btnProp.icon}
                  alt={"icon-" + btnProp.name}
                  width={32}
                  loading="lazy"
                />
              </div>
              <span>{btnProp.name}</span>
            </button>
          </Link>
        );
      })}
    </div>
  );
}
