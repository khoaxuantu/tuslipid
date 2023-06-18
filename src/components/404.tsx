import addOrientationHandler from "./orientation";
import { Link } from "react-router-dom";

export default function NotFound() {
    let orientation = addOrientationHandler();

    return (
        <div className={`container menu-wrapper ${orientation} transition-menu`}>
            <div className="header-grp center">
                <div className="header-txt">
                    <b>404</b>
                </div>
                <div className="description-txt mt-2">
                    Oi ~ This URL does not exist. 
                    <br />
                    <br />
                    <Link to="/">Get back to my homepage...</Link>
                </div>
            </div>
        </div>
    );
}