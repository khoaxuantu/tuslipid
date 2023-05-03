import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { motion as m} from "framer-motion";
import { isMobileOnly } from "react-device-detect";
import * as Header from "./header_grp";
import * as Content from "./content_grp";
import SocialMediaBtnGroup, { NavBtnGroup } from "./button";
import GuestbookBody from "./guestbook/page";
import Copyright from "./copyright";
import Navbar from "./navbar";

export function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export function BlogsLayout() {
    return (
        <m.div
            transition={{ duration: 0.8}}
            exit={{ opacity: 0 }}
            className="container page-wrapper transition-page">
            <Outlet />
            <Copyright copyright_class="page-copyright pb-3" />
        </m.div>
    );
}

export function MenuBuilder() {
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
            transition={{ duration: 0.8 }}
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
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0 }} 
            className="container page-wrapper transition-page">
            <Header.ProjectsPageHeaderGrp />
            <Content.ProjectsContent />
            <Copyright copyright_class="page-copyright pb-3" />
        </m.div>
    );
}

export function BlogsPage() {
    return (
        <>
            <Header.BlogsPageHeaderGrp />
            <Content.BlogsContent />
            {/* <div className="m-5 description-txt" style={{textAlign: "center"}}>
                Nothing yet lol ~~ This section will be updated soon.
            </div> */}
        </>
    );
}

export function SingleBlogPage() {
    const { blogId } = useParams();

    return (
        <>
            <Header.SingleBlogPageHeaderGrp id={blogId as string} />
            <hr></hr>
            <Content.SingleBlogContent id={blogId as string} />
        </>
    );
}

export function GuestbookPage() {
    return(
        <m.div
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0 }} 
            className="container page-wrapper transition-page">
            <Header.GuestbookHeader />
            <GuestbookBody />
        </m.div>
    );
}