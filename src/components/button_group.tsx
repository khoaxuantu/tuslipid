import Link from "next/link";
import { SOCIAL_MEDIA_INFO_LIST, NAV_BTN_INFO_LIST } from "@/lib/general_info";
import { SkillProps, getSkillInfo } from "@/lib/general_info_server";
import Button from "@/lib/factory/button";

export function SocialMediaBtnGroup() {
  return (
    <>
      <div className="contact-c-btn__overlay"></div>
      <div className="sl-l-container contact-l-wrapper center menu-c-txt__body">
        <div className="contact-c-txt__header">
          ~ Oi ~<br></br>
          Say hello to me by one of the following {":)"}
        </div>
        <div className="sl-c-btn__group btn-contact-grp mt-5">
          {SOCIAL_MEDIA_INFO_LIST.map((btnProp) => {
            return (
              <Button
                buttonType="icon"
                url={btnProp.url}
                icon={btnProp.icon}
                key={btnProp.id}
                id={btnProp.id}
                classname="sl-c-btn sl-c-btn__square"
              />
            );
          })}
        </div>
        <Link href="/" className="sl-c-btn sl-c-btn__rect mt-5" id="go-back" prefetch={true}>
          Home
        </Link>
      </div>
    </>
  );
}

export function NavBtnGroup() {
  return (
    <div className="sl-c-btn__group menu-l-grp__nav-btn mb-3 menu-c-txt__body">
      {NAV_BTN_INFO_LIST.map((btnProp) => {
        return (
          <Button
            buttonType="default"
            url={btnProp.url}
            content={btnProp.content}
            classname="sl-c-btn sl-c-btn__rect"
            key={btnProp.content}
          />
        );
      })}
    </div>
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
    <div className="about-c-btn__group-skill mt-2 col-8">
      {skillInfoList.map((btnProp) => {
        return (
          <Button
            buttonType="icon"
            classname="sl-c-btn about-c-btn__skill mt-2 mb-2"
            key={btnProp.name}
            {...btnProp}
          />
        );
      })}
    </div>
  );
}
