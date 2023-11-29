import { useParams, Navigate, useLocation } from "react-router-dom";
import { SingleBlogPageHeaderGrp } from "./header";
import { SingleBlogContent } from "./contents";
import { blogInfoDict } from "../../lib/general_info";
import { Metadata } from "../seo/Metadata";
import { getMetadataURL } from "../../lib/utils/Location";
import CustomHead from "../seo";
import { IBlogCardProps } from "../../lib/factory/cardBase";

export default function SingleBlogPage() {
  const url = getMetadataURL(useLocation());
  const { blogId } = useParams();

  const validId = blogInfoDict.hasOwnProperty(blogId as string);
  if (!validId) {
    return <Navigate to="/404" replace />;
  }

  const blogInfo = blogInfoDict[blogId as string];
  const metadata = generateMetadata(blogInfo, url);

  return (
    <>
      <CustomHead metadata={metadata} />
      <SingleBlogPageHeaderGrp id={blogId as string} />
      <hr></hr>
      <SingleBlogContent id={blogId as string} />
    </>
  );
}

function generateMetadata(blogInfo: IBlogCardProps, url: string): Metadata {
  return {
    title: blogInfo.title,
    description: blogInfo.brief_description,
    og: {
      title: blogInfo.title + " | Tusss blogs",
      description: blogInfo.brief_description,
      url: url,
    },
    twitter: {
      title: blogInfo.title + " | Tusss blogs",
      description: blogInfo.brief_description,
      url: url,
    },
  };
}
