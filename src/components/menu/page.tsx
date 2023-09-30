import MenuHeaderGrp from "./header";
import Copyright from "../copyright";
import { NavBtnGroup } from "../button";
import addOrientationHandler from "../orientation";

export default function MenuBuilder() {
    let orientation = addOrientationHandler();

    return (
        <>
            <div className="background-overlay">
            </div>
            <div className={`container menu-wrapper ${orientation} transition-menu`}>
                <MenuHeaderGrp />
                <NavBtnGroup />
                <Copyright copyright_class="menu-copyright mt-5" />
            </div>
        </>
    );
}
