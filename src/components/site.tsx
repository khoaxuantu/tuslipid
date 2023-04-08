import React from "react";
import { Outlet } from "react-router-dom";
import { motion as m} from "framer-motion";
import * as Header from "./header_grp";
import * as Content from "./content_grp";
import SocialMediaBtnGroup, { NavBtnGroup } from "./button";
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

export function MenuBuilder() {
    return (
        <m.div
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="container menu-wrapper center transition-menu">
            <Header.MenuHeaderGrp />
            <SocialMediaBtnGroup />
            <NavBtnGroup />
            <Copyright />
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
        </m.div>
    );
}

export function ProjectsPage() {
    return (
        <div className="container page-wrapper transition-page">
            
        </div>
    );
}

export function BlogPage() {
    return (
        <div className="container page-wrapper">
            
        </div>
    );
}