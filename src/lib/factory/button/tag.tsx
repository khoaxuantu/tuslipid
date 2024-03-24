'use client';

import { useContext } from "react";
import { TagsButtonProps } from "./type";
import { TagsContext } from "@/lib/context/tag";

export default function TagButton(props: TagsButtonProps) {
  const tags = useContext(TagsContext);

  const tmp = tags.includes(props.content) ? {
    className: "blogs-c-btn__tag-active",
    onclick: removeTagHandler,
  } : {
    className: "blogs-c-btn__tag",
    onclick: addTagHandler,
  }

  function removeTagHandler() {
    props.dispatchActiveTags({ type: "remove_tag", payload: props.content });
  }

  function addTagHandler() {
    props.dispatchActiveTags({ type: "add_tag", payload: props.content });
  }

  return (
    <button className={tmp.className} onClick={tmp.onclick}>
      {formatTag(props.content)}
    </button>
  );
}

function formatTag(tag: string) {
  return `#${tag}`;
}
