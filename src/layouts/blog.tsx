import { Outlet } from "react-router-dom";
import Copyright from "../components/copyright";
import { Metadata } from "../components/seo/Metadata";
import CustomHead from "../components/seo";

const blogThumb = process.env.PUBLIC_URL + '/seo/blogs-tuslipid.webp';
const metadata: Metadata = {
    image: blogThumb,
    og: {
        type: "article",
        image: blogThumb,
        site_name: "Tusss Blogs"
    },
    twitter: {
        image: blogThumb,
    }
}

function BlogLayout() {
    return(
        <div className="container page-wrapper">
            <CustomHead metadata={metadata} />
            <Outlet />
            <Copyright copyright_class="page-copyright mt-5 pt-5 pb-3" />
        </div>
    );
}

export default BlogLayout;
