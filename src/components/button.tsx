import Link from "next/link";
import * as Btn from "../lib/factory/buttonBase";
import * as Info from "../lib/general_info";
import { getSkillInfo } from "@/lib/general_info_server";

export function SocialMediaBtnGroup() {
  return (
    <>
      <div className="contact-c-btn__overlay"></div>
      <div className="sl-l-container contact-l-wrapper center body-txt-menu">
        <div className="header-txt-contact">
          ~ Oi ~<br></br>
          Say hello to me by one of the following {":)"}
        </div>
        <div className="sl-c-btn__group btn-contact-grp mt-5">
          {Info.socialMediaInfoList.map((btnProp) => {
            return (
              <Btn.IconButton
                url={btnProp.url}
                icon={btnProp.icon}
                key={btnProp.id}
                id={btnProp.id}
                classname="sl-c-btn sl-c-btn__square"
              />
            );
          })}
        </div>
        <Link
          href="/"
          className="sl-c-btn sl-c-btn__rect mt-5"
          id="go-back"
          prefetch={true}
        >
          Home
        </Link>
      </div>
    </>
  );
}

export function NavBtnGroup() {
  return (
    <div className="sl-c-btn__group nav-sl-c-btn__group mb-3 body-txt-menu">
      {Info.navBtnInfoList.map((btnProp) => {
        return (
          <Btn.DefaultButton
            url={btnProp.url}
            content={btnProp.content}
            classname="sl-c-btnbtn-rect"
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

  function compareSkill(
    a: Btn.IconButtonProps,
    b: Btn.IconButtonProps
  ): number {
    if ((a.name as string) < (b.name as string)) return -1;
    else if ((a.name as string) > (b.name as string)) return 1;
    return 0;
  }

  return (
    <div className="about-c-btn__group-skill mt-2 col-8">
      {skillInfoList.map((btnProp) => {
        return (
          <Btn.IconButton
            id={btnProp.name}
            url={btnProp.url}
            icon={btnProp.icon}
            classname="sl-c-btn about-c-btn__skill mt-2 mb-2"
            key={btnProp.name}
          />
        );
      })}
    </div>
  );
}
