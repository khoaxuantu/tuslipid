"use client";

import { useEffect, useState } from "react";
import Card from "../../lib/factory/cardBase";
import { blogInfoDict } from "../../lib/general_info";

export function BlogsList(props: {
  blogInfoList: { dictKey: string; date: string }[];
}) {
  /**
   * Implement infinite scrolling for blogs
   * - blogsNum: The number of blogs for each fetching
   */
  const blogsNum: number = 4;
  const [startId, setStartId] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [blogs, setBlogs]: [{ dictKey: string; date: string }[], any] =
    useState([]);
  // console.log("🚀 ~ file: blogs.tsx:21 ~ BlogsList ~ blogs:", blogs)

  useEffect(() => {
    let canFetch = true;
    function fetchBlogs(startId: number) {
      const newBlogs = [];
      const nextStartId = startId + blogsNum;
      if (nextStartId >= props.blogInfoList.length) setHasMore(!hasMore);

      for (
        let i = startId;
        i < nextStartId && i < props.blogInfoList.length;
        i++
      ) {
        newBlogs.push(props.blogInfoList[i]);
      }
      setBlogs([...blogs, ...newBlogs]);
    }

    if (canFetch) fetchBlogs(startId);

    return () => {
      canFetch = !canFetch;
      // console.log("🚀 ~ file: blogs.tsx:41 ~ return ~ canFetch:", canFetch)
    };
  }, [startId]);

  useEffect(() => {
    function onScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 100 && hasMore) {
        setStartId((startId) => startId + blogsNum);
      }
    }

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
