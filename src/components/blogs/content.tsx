'use client';

import { BlogsList } from "./list";
import { Tags } from "./tags";
import { useReducer } from "react";
import tagReducer from "../../lib/reducer/tag";
import { TagsContext } from "@/lib/context/tag";

export function BlogsContent() {
  const [activeTags, dispatchActiveTags] = useReducer(tagReducer, { tags: [] });

  return (
    <main className="row">
      <TagsContext.Provider value={activeTags.tags}>
        <section className="col-4 pe-5">
          <Tags dispatchActiveTags={dispatchActiveTags} />
        </section>
        <section className="col-8 blogs-l-wrapper">
          <BlogsList key={activeTags.tags.join('_')} />
        </section>
      </TagsContext.Provider>
    </main>
  );
}
