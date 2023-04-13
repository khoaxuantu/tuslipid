import React from "react";
import { Outlet } from "react-router-dom";
import { motion as m} from "framer-motion";
import * as Header from "./header_grp";
import * as Content from "./content_grp";
import SocialMediaBtnGroup, { NavBtnGroup } from "./button";
import Copyright from "./copyright";
import Navbar from "./navbar";
import Blogs from "./contents/blogs";

export function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export function MenuBuilder() {
    return (
        <m.div
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="container menu-wrapper center transition-menu">
            <Header.MenuHeaderGrp />
            <SocialMediaBtnGroup />
            <NavBtnGroup />
            <Copyright copyright_class="menu-copyright" />
        </m.div>
    );
}

export function AboutPage() {
    return (
        <m.div
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="container page-wrapper transition-page">
            <Header.AboutHeaderGrp />
            <Content.AboutContent />
            <Copyright copyright_class="page-copyright pb-3" />
        </m.div>
    );
}

export function ProjectsPage() {
    return (
        <m.div
            transition={{ duration: 1}}
            exit={{ opacity: 0 }} 
            className="container page-wrapper transition-page">
            <Header.ProjectsPageHeaderGrp />
            <Content.ProjectsContent />
            <Copyright copyright_class="page-copyright pb-3" />
        </m.div>
    );
}

export function BlogPage() {
    return (
        <m.div 
            transition={{ duration: 1}}
            exit={{ opacity: 0 }}
            className="container page-wrapper transition-page">
            <Header.BlogsPageHeaderGrp />
            {/* <Blogs /> */}
            <div className="m-5 description-txt" style={{textAlign: "center"}}>
                Nothing yet lol ~~ This section will be updated soon.
            </div>
            <Copyright copyright_class="page-copyright pb-3" />
        </m.div>
    );
}