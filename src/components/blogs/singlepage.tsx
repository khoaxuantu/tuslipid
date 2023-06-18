import { useParams, Navigate } from "react-router-dom";
import { SingleBlogPageHeaderGrp } from "./header";
import { SingleBlogContent } from "./contents";
import { blogInfoDict } from "../../lib/general_info";

export default function SingleBlogPage() {
    const { blogId } = useParams();
    let validId = blogInfoDict.hasOwnProperty(blogId as string);
    if (!validId) {
        return <Navigate to="/404" replace />;
    }

    return (
        <>
            <SingleBlogPageHeaderGrp id={blogId as string} />
            <hr></hr>
            <SingleBlogContent id={blogId as string} />
        </>
    );
}