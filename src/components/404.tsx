import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
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
