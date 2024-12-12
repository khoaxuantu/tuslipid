'use client';

import { TagsContext } from "@/lib/context/tag";
import { useReducer } from "react";
import tagReducer from "../../lib/reducer/tag";
import { BlogsList } from "./list";
import { Tags } from "./tags";

export function BlogsContent() {
  const [activeTags, dispatchActiveTags] = useReducer(tagReducer, { tags: [] });

  return (
    <main className="blogs row">
      <TagsContext.Provider value={activeTags.tags}>
        <aside className="col-4 pb-5">
          <Tags dispatchActiveTags={dispatchActiveTags} />
        </aside>
        <section className="col-8 blogs-l-wrapper">
          <BlogsList key={activeTags.tags.join('_')} />
        </section>
      </TagsContext.Provider>
    </main>
  );
}
