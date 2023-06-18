import { isMobileOnly } from "react-device-detect";

function addOrientationHandler(): string {
    let mql = window.matchMedia("(orientation: portrait)");
    let orientation: string = "center";

    // Handle orientation change if a device is `mobile`
    if (isMobileOnly) {
        if (!mql.matches) orientation = "mobile-landscape";
        mql.addEventListener("change", m => orientationHandler(m));
    }

    return orientation;
}

function orientationHandler(m: MediaQueryListEvent) {
    const container = document.getElementsByClassName("container")[0] as HTMLElement;
    if (m.matches) {
        changeOrientation(container, "mobile-landscape", "center");
    } else {
        changeOrientation(container, "center", "mobile-landscape");
    }
}

function changeOrientation(container: HTMLElement, initMode: string, newMode: string): void {
    container.classList.remove(initMode);
    container.classList.add(newMode);
}

export default addOrientationHandler;