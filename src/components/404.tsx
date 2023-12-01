import { Link } from "react-router-dom";
import { Metadata } from "./seo/Metadata";
import CustomHead from "./seo";

const notFoundDescription = "Oi ~ This URL does not exist, get to my homepage at https://xuankhoatu.com/"
const metadata: Metadata = {
    title: "404",
    description: notFoundDescription,
    og: {
        title: "404 | Page not found",
        description: notFoundDescription,
    },
    twitter: {
        title: "404 | Page not found",
        description: notFoundDescription,
    }
}

export default function NotFound() {
    return (
        <>
            <CustomHead metadata={metadata} />
            <div className="background-overlay"></div>
            <div className={`container menu-wrapper center transition-menu`}>
                <div className="header-grp center">
                    <div className="header-txt">
                        <b>404</b>
                    </div>
                    <div className="body-txt mt-2">
                        Oi ~ This URL does not exist.
                        <br />
                        <br />
                        <Link to="/" style={{ color: "navy" }}>Get back to my homepage...</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
