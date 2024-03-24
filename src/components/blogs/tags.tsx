import { Dispatch } from "react";
import { TagsButtonGroup } from "../button_group";
import { TagsAction } from "@/lib/reducer/tag";

export function Tags({ dispatchActiveTags } : { dispatchActiveTags: Dispatch<TagsAction> }) {


  return(
    <>
      <h1>Tags</h1>
      <TagsButtonGroup dispatchActiveTags={dispatchActiveTags} />
    </>
  );
}
