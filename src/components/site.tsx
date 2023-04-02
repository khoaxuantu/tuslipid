import React from "react";
import MenuHeaderGrp from "./header_grp";
import SocialMediaBtnGroup, { NavBtnGroup } from "./button";
import Copyright from "./copyright";

function SiteBuilder() {
    return (
        <div className="container content-wrapper center">
            <MenuHeaderGrp />
            <SocialMediaBtnGroup />
            <NavBtnGroup />
            <Copyright />
        </div>
    );
}

export default SiteBuilder;