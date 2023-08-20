import MenuHeaderGrp from "./header";
import Copyright from "../copyright";
import SocialMediaBtnGroup, { NavBtnGroup } from "../button";
import addOrientationHandler from "../orientation";

export default function MenuBuilder() {
    let orientation = addOrientationHandler();

    return (
        <div className={`container menu-wrapper ${orientation} transition-menu`}>
            <MenuHeaderGrp />
            <SocialMediaBtnGroup />
            <NavBtnGroup />
            <Copyright copyright_class="menu-copyright" />
        </div>
    );
}
