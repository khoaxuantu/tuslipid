"use client";

import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";
import tagReducer, { TagsAction } from "../reducer/tag";

interface TagContextProps {
  tags: string[];
  dispatch: Dispatch<TagsAction>;
  add: (content: string) => void;
  remove: (content: string) => void;
}

export const TagContext = createContext<TagContextProps>({
  tags: [],
  dispatch: () => {},
  add: () => {},
  remove: () => {},
});

export function TagProvider(props: PropsWithChildren) {
  const [activeTags, dispatchActiveTags] = useReducer(tagReducer, { tags: [] });

  const add = (content: string) =>
    dispatchActiveTags({ type: "add_tag", payload: content });
  const remove = (payload: string) =>
    dispatchActiveTags({ type: "remove_tag", payload });

  return (
    <TagContext.Provider
      value={{
        tags: activeTags.tags,
        dispatch: dispatchActiveTags,
        add,
        remove,
      }}
    >
      {props.children}
    </TagContext.Provider>
  );
}
