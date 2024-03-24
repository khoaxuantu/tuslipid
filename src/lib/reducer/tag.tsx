export interface TagsAction {
  type: "add_tag" | "remove_tag";
  payload: string;
}

interface TagsState {
  tags: string[];
}

export default function tagReducer(state: TagsState, action: TagsAction) {
  switch (action.type) {
    case "add_tag":
      return { tags: [...state.tags, action.payload] }
    case "remove_tag":
      return removeTag(state.tags, action.payload);

    default:
      return state;
  }
}

function removeTag(tags: string[], targetTag: string) {
  for (let i = 0; i < tags.length; i++) {
    if (tags[i] == targetTag) {
      const tmp = tags[i];
      tags[i] = tags[tags.length - 1];
      tags[tags.length - 1] = tmp;
      tags.pop();
      break;
    }
  }

  return { tags: tags };
}
