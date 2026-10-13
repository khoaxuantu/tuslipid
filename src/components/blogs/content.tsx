"use client";

import { TagContext, TagProvider } from "@/lib/provider/tag.provider";
import { useContext } from "react";
import { BlogsList } from "./list";
import { Tags } from "./tags";

export function BlogsContent() {
  return (
    <article>
      <div className="container">
        <TagProvider>
          <aside>
            <Tags />
          </aside>
          <BlogListSection />
        </TagProvider>
      </div>
    </article>
  );
}

function BlogListSection() {
  const { tags } = useContext(TagContext);

  return (
    <section>
      <BlogsList key={tags.join(":")} />
    </section>
  );
}
