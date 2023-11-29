import { BlogsPageHeaderGrp } from "./header";
import { BlogsContent } from "./contents";
import { useEffect } from "react";
import { getMetadataURL } from "../../lib/utils/Location";
import { useLocation } from "react-router-dom";
import { Metadata } from "../seo/Metadata";
import CustomHead from "../seo";

const blogsDescription = "Some notes, some ideas, some opinions";

export default function BlogsPage() {
  const url = getMetadataURL(useLocation());
  const metadata: Metadata = {
    description: blogsDescription,
    title: "Blogs",
    og: {
      description: blogsDescription,
      title: "Tusss Blogs",
      url: url,
    },
    twitter: {
      description: blogsDescription,
      title: "Tusss Blogs",
      url: url,
    },
  };

  useEffect(() => {
    const container = document.getElementsByClassName(
      "container"
    )[0] as HTMLElement;
    container.classList.add("transition-page");
  }, []);

  return (
    <>
      <CustomHead metadata={metadata} />
      <BlogsPageHeaderGrp />
      <BlogsContent />
    </>
  );
}
