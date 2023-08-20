import { Outlet } from "react-router-dom";
import Copyright from "../copyright";

function BlogLayout() {
    return(
        <div className="container page-wrapper">
            <Outlet />
            <Copyright copyright_class="page-copyright pb-3" />
        </div>
    );
}

export default BlogLayout;
