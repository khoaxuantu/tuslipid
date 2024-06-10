import Link from "next/link";
import Button from "@/lib/factory/button";
import { SOCIAL_MEDIA_INFO_LIST, NAV_BTN_INFO_LIST } from "@/lib/general_info";
import { SkillProps, getSkillInfo } from "@/lib/general_info_server";
import { BlogRepository } from "@/lib/repository/blog";
import { Dispatch } from "react";
import { TagsAction } from "@/lib/reducer/tag";

export function SocialMediaBtnGroup() {
  return (
    <section className="sl-c-btn__group btn-contact-grp mt-5">
      {SOCIAL_MEDIA_INFO_LIST.map((btnProp) => {
        return (
          <Button
            variant="icon"
            url={btnProp.url}
            icon={btnProp.icon}
            key={btnProp.id}
            id={btnProp.id}
            className="sl-c-btn sl-c-btn__square"
          />
        );
      })}
    </section>
  );
}

export function NavBtnGroup() {
  return (
    <main className="mb-3 sl-c-btn__group menu-l-grp__nav-btn">
      {NAV_BTN_INFO_LIST.map((btnProp) => {
        return (
          <Button
            variant="default"
            url={btnProp.url}
            content={btnProp.content}
            className="sl-c-btn sl-c-btn__rect"
            key={btnProp.content}
          />
        );
      })}
    </main>
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
    <div className="about-c-btn__group-skill pt-2 col-8">
      {skillInfoList.map((btnProp) => {
        return (
          <Button
            variant="icon"
            className="sl-c-btn about-c-btn__skill"
            key={btnProp.name}
            {...btnProp}
          />
        );
      })}
    </div>
  );
}

export function TagsButtonGroup({
  dispatchActiveTags,
}: {
  dispatchActiveTags: Dispatch<TagsAction>;
}) {
  const tags = BlogRepository.getTagsList();

  return (
    <div>
      {tags.map((tag) => {
        return (
          <Button
            variant="tag"
            content={tag}
            key={tag}
            dispatchActiveTags={dispatchActiveTags}
          />
        );
      })}
    </div>
  );
}
