'use client';

import { BlogsList } from "./list";
import { Tags } from "./tags";
import { useReducer } from "react";
import tagReducer from "../../lib/reducer/tag";
import { TagsContext } from "@/lib/context/tag";

export function BlogsContent() {
  const [activeTags, dispatchActiveTags] = useReducer(tagReducer, { tags: [] });

  return (
    <div className="sl-l-container__content row">
      <TagsContext.Provider value={activeTags.tags}>
        <div className="col-4 blogs-l-tags pe-5">
          <Tags dispatchActiveTags={dispatchActiveTags} />
        </div>
        <div className="col-8 blogs-l-wrapper">
          <BlogsList key={activeTags.tags.join('_')} />
        </div>
      </TagsContext.Provider>
    </div>
  );
}
