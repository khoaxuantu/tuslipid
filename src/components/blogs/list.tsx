"use client";

import { useEffect, useState } from "react";
import Card from "../../lib/factory/cardBase";
import { blogInfoDict } from "../../lib/general_info";

/**
 * Implement infinite scrolling for blogs
 * - PAGINATE_NUM: The number of blogs for each fetching
 */
const PAGINATE_NUM = 4;

interface BlogInfo {
  dictKey: string;
  date: string;
}

export function BlogsList(props: { blogInfoList: BlogInfo[] }) {
  const [blogsNum, setBlogsNum] = useState(PAGINATE_NUM);
  const [hasMore, setHasMore] = useState(true);
  const [blogs, setBlogs] = useState<BlogInfo[]>(
    getLimitedBlogs(props.blogInfoList, PAGINATE_NUM)
  );
  // console.log("🚀 ~ file: blogs.tsx:24 ~ BlogsList ~ blogs:", blogs)

  function fetchBlogs(blogsNum: number) {
    setBlogs(getLimitedBlogs(props.blogInfoList, blogsNum));
    setBlogsNum(blogsNum);
  }

  function onScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && hasMore) {
      const nextBlogsNum = blogsNum + PAGINATE_NUM;
      if (nextBlogsNum >= props.blogInfoList.length) setHasMore(false);
      fetchBlogs(nextBlogsNum);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [blogs]);

  return (
    <>
      {blogs.map((blog, index) => {
        return <Card key={index} {...blogInfoDict[blog.dictKey]} />;
      })}
    </>
  );
}

function getLimitedBlogs(blogs: BlogInfo[], limit: number) {
  return blogs.slice(0, limit);
}
