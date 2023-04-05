import React from "react";
import { Outlet } from "react-router-dom";
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
        <div className="container menu-wrapper center">
            <Header.MenuHeaderGrp />
            <SocialMediaBtnGroup />
            <NavBtnGroup />
            <Copyright />
        </div>
    );
}

export function AboutPage() {
    return (
        <div className="container page-wrapper">
            <Header.AboutHeaderGrp />
            <Content.AboutContent />
        </div>
    );
}

export function ProjectsPage() {
    return (
        <div className="container page-wrapper">
            
        </div>
    );
}

export function BlogPage() {
    return (
        <div className="container page-wrapper">
            
        </div>
    );
}