"use client";

import { BLOG_INFO_DICT } from "@/lib/general_info";
import { TagContext } from "@/lib/provider/tag.provider";
import { BlogRepository } from "@/lib/repository/blog";
import { useContext, useEffect, useState } from "react";
import BlogCard from "./card";

/**
 * Implement infinite scrolling for blogs
 * - PAGINATE_NUM: The number of blogs for each fetching
 */
const PAGINATE_NUM = 4;

export function BlogsList() {
  const { tags } = useContext(TagContext);
  const blogInfoList = BlogRepository.getIdsFromTags(tags);
  const [blogsNum, setBlogsNum] = useState(PAGINATE_NUM);
  const [hasMore, setHasMore] = useState(true);
  const [blogs, setBlogs] = useState<string[]>(
    getLimitedBlogs(blogInfoList, PAGINATE_NUM),
  );

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [blogs]);

  function fetchBlogs(blogsNum: number) {
    setBlogs(getLimitedBlogs(blogInfoList, blogsNum));
    setBlogsNum(blogsNum);
  }

  function onScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && hasMore) {
      const nextBlogsNum = blogsNum + PAGINATE_NUM;
      if (nextBlogsNum >= blogInfoList.length) setHasMore(false);
      fetchBlogs(nextBlogsNum);
    }
  }

  return (
    <>
      {blogs.map((blogId) => {
        return <BlogCard key={blogId} {...BLOG_INFO_DICT[blogId]} />;
      })}
    </>
  );
}

function getLimitedBlogs(blogs: string[], limit: number) {
  return blogs.slice(0, limit);
}
