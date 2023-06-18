import { motion as m } from "framer-motion";
import MenuHeaderGrp from "./header";
import Copyright from "../copyright";
import SocialMediaBtnGroup, { NavBtnGroup } from "../button";
import addOrientationHandler from "../orientation";

export default function MenuBuilder() {
    let orientation = addOrientationHandler();

    return (
        <m.div
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className={`container menu-wrapper ${orientation} transition-menu`}>
            <MenuHeaderGrp />
            <SocialMediaBtnGroup />
            <NavBtnGroup />
            <Copyright copyright_class="menu-copyright" />
        </m.div>
    );
}