import { Dispatch } from "react";
import { TagsButtonGroup } from "../button_group";
import { TagsAction } from "@/lib/reducer/tag";

export function Tags({ dispatchActiveTags } : { dispatchActiveTags: Dispatch<TagsAction> }) {


  return(
    <>
      <h3>Tags</h3>
      <TagsButtonGroup dispatchActiveTags={dispatchActiveTags} />
    </>
  );
}
