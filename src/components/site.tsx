import React from "react";
import MenuHeaderGrp from "./header_grp";
import SocialMediaBtnGroup, { NavBtnGroup } from "./button";
import Copyright from "./copyright";
import Navbar from "./navbar";

function SiteBuilder() {
    return (
        <>
            <Navbar />
            <div className="container content-wrapper center">
                <MenuHeaderGrp />
                <SocialMediaBtnGroup />
                <NavBtnGroup />
                <Copyright />
            </div>
        </>
    );
}

export default SiteBuilder;