import { motion as m } from "framer-motion";
import { isMobileOnly } from "react-device-detect";
import MenuHeaderGrp from "./header";
import Copyright from "../copyright";
import SocialMediaBtnGroup, { NavBtnGroup } from "../button";

export default function MenuBuilder() {
    let mql = window.matchMedia("(orientation: portrait)");
    let orientation = "center";
    
    // Handle orientation change if a device is `mobile`
    if (isMobileOnly) {
        if (!mql.matches) orientation = "mobile-landscape";
        mql.addEventListener("change", function(m) {
            const container = document.getElementsByClassName("container")[0] as HTMLElement;
            if (m.matches) {
                container.classList.remove("mobile-landscape");
                container.classList.add("center");
            }
            else {
                container.classList.remove("center");
                container.classList.add("mobile-landscape");
            }
        })
    }

    return (
        <m.div
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0 }}
            className={`container menu-wrapper ${orientation} transition-menu`}>
            <MenuHeaderGrp />
            <SocialMediaBtnGroup />
            <NavBtnGroup />
            <Copyright copyright_class="menu-copyright" />
        </m.div>
    );
}