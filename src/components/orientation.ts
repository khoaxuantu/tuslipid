'use client';

import { isMobileOnly } from "react-device-detect";

function addOrientationHandler(): string {
    let mql = window.matchMedia("(orientation: portrait)");
    let orientation: string = "center";

    // Handle orientation change if a device is `mobile`
    if (isMobileOnly) {
        if (!mql.matches) orientation = "mobile-landscape-wrapper";
        mql.addEventListener("change", m => orientationHandler(m));
    }

    return orientation;
}

function orientationHandler(m: MediaQueryListEvent) {
    const PREFIX = "mobile-landscape";
    const [container, overlay, contactOverlay] = processElement();

    if (m.matches) {
        changeOrientation(container, `${PREFIX}-wrapper`, "center");
        changeOrientation(overlay, `${PREFIX}-overlay`, "");
        changeOrientation(contactOverlay, `${PREFIX}-overlay`, "");
    } else {
        changeOrientation(container, "center", `${PREFIX}-wrapper`);
        changeOrientation(overlay, "", `${PREFIX}-overlay`);
        changeOrientation(contactOverlay, "", `${PREFIX}-overlay`);
    }
}

function processElement(): HTMLElement[] {
    const CLASS_LIST = ["sl-l-container", "sl-c-overlay", "contact-c-btn__overlay"];
    let arr : HTMLElement[] = [];
    CLASS_LIST.forEach(elem => {
        arr.push(document.getElementsByClassName(elem)[0] as HTMLElement);
    })
    return arr;
}

function changeOrientation(container: HTMLElement, initMode: string, newMode: string): void {
    if (!container) return;
    if (initMode) container.classList.remove(initMode);
    if (newMode) container.classList.add(newMode);
}

export default addOrientationHandler;
