import { useParams } from "react-router-dom";
import { SingleBlogPageHeaderGrp } from "./header";
import { SingleBlogContent } from "./contents";

export default function SingleBlogPage() {
    const { blogId } = useParams();

    return (
        <>
            <SingleBlogPageHeaderGrp id={blogId as string} />
            <hr></hr>
            <SingleBlogContent id={blogId as string} />
        </>
    );
}